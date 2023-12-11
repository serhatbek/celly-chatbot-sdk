import './DownloadBtn.scss';
import downloadingIcon from '../../../public/images/icons/downloading@2x.png';
import downloadDeleteIcon from '../../../public/images/icons/donload-delete@2x.png';
import downloadRefreshIcon from '../../../public/images/icons/download-refresh@2x.png';
import downloadIcon from '../../../public/images/icons/download@2x.png';
import { useState } from 'react';

const DownloadBtn = () => {
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
    <button className='download-btn' onClick={handleDownload}>
      <img
        src={downloadIconToShow}
        className={
          downloadIconToShow === downloadingIcon ? 'downloading-animation' : ''
        }
        alt='İndir'
      />
    </button>
  );
};

export default DownloadBtn;
