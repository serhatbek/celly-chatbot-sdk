import './FileDownload.scss';
import { checkFileExtension } from '../../utils/checkExtension';
import DownloadBtn from '../DownloadBtn/DownloadBtn';

const FileDownload = ({
  fileIcon,
  fileTitle,
  fileUrl,
  fileCanDownload,
  classes,
}) => {
  const trueType = checkFileExtension(fileUrl);

  return (
    <div className={`download-file ${classes ? classes : ''}`}>
      <div>
        <figure>
          <img src={fileIcon} />
        </figure>
        <span>{fileTitle}</span>
        {trueType && fileCanDownload && <DownloadBtn />}
      </div>
    </div>
  );
};

export default FileDownload;
