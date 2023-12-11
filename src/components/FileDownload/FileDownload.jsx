import './FileDownload.scss';
import { checkFileExtension } from '../../utils/checkExtension';
import DownloadBtn from '../DownloadBtn/DownloadBtn';

const FileDownload = ({ fileIcon, fileTitle, fileUrl, classes }) => {
  const trueType = checkFileExtension(fileUrl);

  return (
    <div className={`download-file ${classes ? classes : ''}`}>
      <div>
        <figure>
          <img src={fileIcon} />
        </figure>
        <span>{fileTitle}</span>
        {trueType && <DownloadBtn />}
      </div>
    </div>
  );
};

export default FileDownload;
