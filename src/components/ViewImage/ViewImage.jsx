import './ViewImage.scss';
import downloadingIcon from '../../../public/images/icons/downloading@2x.png';
import downloadDeleteIcon from '../../../public/images/icons/donload-delete@2x.png';
import downloadRefreshIcon from '../../../public/images/icons/download-refresh@2x.png';
import downloadIcon from '../../../public/images/icons/download@2x.png';
import { useState } from 'react';
import { checkImageExtension } from '../../utils/checkExtension';

const ViewImage = ({ imgUrl, imgDesc, classes, fileCanDownload }) => {
  const trueType = checkImageExtension(imgUrl);
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
    <div className='view-image'>
      <div className={`view-image__body ${classes ? classes : ''}`}>
        <figure>
          <img src={imgUrl} />
        </figure>
        {imgDesc && <p>{imgDesc}</p>}
      </div>
      {trueType && fileCanDownload && (
        <button
          className='download-file__download'
          href={imgUrl}
          download={imgUrl}
          onClick={handleDownload}
        >
          <img src={downloadIconToShow} alt='İndir' />
        </button>
      )}
    </div>
  );
};

export default ViewImage;
