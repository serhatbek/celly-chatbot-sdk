import './FileDownload.scss';
import downloadingIcon from '../../../public/images/icons/downloading@2x.png';
import downloadDeleteIcon from '../../../public/images/icons/donload-delete@2x.png';
import downloadRefreshIcon from '../../../public/images/icons/download-refresh@2x.png';
import downloadIcon from '../../../public/images/icons/download@2x.png';
import { useState } from 'react';
import { checkFileExtension } from '../../utils/checkExtension';

const FileDownload = ({ fileIcon, fileTitle, fileUrl, classes }) => {
  const trueType = checkFileExtension(fileUrl);
  const [downloadStatus, setDownloadStatus] = useState('idle');
  const handleDownload = () => {
    setDownloadStatus('downloading');

    setTimeout(() => {
      setDownloadStatus('delete');
    }, 3000);
  };

  let downloadIconToShow = downloadIcon;

  if (downloadStatus === 'downloading') {
    downloadIconToShow = downloadingIcon;
  }
  if (downloadStatus === 'delete') {
    downloadIconToShow = downloadDeleteIcon;
  }

  if (downloadStatus === 'refresh') {
    downloadIconToShow = downloadRefreshIcon;
  }

  return (
    <div className={`download-file ${classes ? classes : ''}`}>
      <div>
        <figure>
          <img src={fileIcon} />
        </figure>
        <span>{fileTitle}</span>
        {trueType && (
          <button
            className='download-file__download'
            href={fileUrl}
            download={fileUrl}
            onClick={handleDownload}
          >
            <img src={downloadIconToShow} alt='İndir' />
          </button>
        )}
      </div>
    </div>
  );
};

export default FileDownload;
