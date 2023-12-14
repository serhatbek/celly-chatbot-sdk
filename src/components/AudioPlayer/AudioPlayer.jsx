import './AudioPlayer.scss';
import { checkAudioExtension } from '../../utils/checkExtension';
import DownloadBtn from '../DownloadBtn/DownloadBtn';
import { Player } from 'react-simple-player';
import { useState } from 'react';

const AudioPlayer = ({ audioFile, fileCanDownload }) => {
  const trueType = checkAudioExtension(audioFile);
  const [audioState, setAudioState] = useState({});

  return (
    <div className='audio-player'>
      <div
        className={`${fileCanDownload ? 'bg-gray' : ''}`}
        style={{ paddingBottom: '27px' }}
      >
        <div className={`${audioState.playing ? 'btn-pause' : 'btn-play'}`}>
          <Player
            onState={(state) => setAudioState(state)}
            hideVolume
            src={audioFile}
            height={40}
          />
        </div>
        {trueType && fileCanDownload && <DownloadBtn />}
      </div>
    </div>
  );
};

export default AudioPlayer;
