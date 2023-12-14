import './VideoPlayer.scss';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { checkVideoExtension } from '../../utils/checkExtension';
import { useEffect, useRef } from 'react';

const VideoPlayer = ({ videoUrl, videoPoster }) => {
  const trueType = checkVideoExtension(videoUrl);
  const typeCheckedItem = trueType ? videoUrl : null;
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const options = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: typeCheckedItem,
        type: 'video/mp4',
      },
    ],
    poster: videoPoster,
  };

  const onReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      // videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      // videojs.log('player will dispose');
    });
  };

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        // videojs.log('player is ready');
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;
