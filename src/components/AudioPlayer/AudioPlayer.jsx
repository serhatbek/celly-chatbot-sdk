import './AudioPlayer.scss';
import { checkAudioExtension } from '../../utils/checkExtension';
import DownloadBtn from '../DownloadBtn/DownloadBtn';

const AudioPlayer = ({ fileCanDownload }) => {
  const trueType = checkAudioExtension();
  return (
    <div className='audio-player'>
      AudioPlayer
      {fileCanDownload && <DownloadBtn />}
    </div>
  );
};

export default AudioPlayer;
