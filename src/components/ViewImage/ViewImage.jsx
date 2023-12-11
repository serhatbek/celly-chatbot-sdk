import './ViewImage.scss';
import { checkImageExtension } from '../../utils/checkExtension';
import DownloadBtn from '../DownloadBtn/DownloadBtn';

const ViewImage = ({ imgUrl, imgDesc, classes, fileCanDownload }) => {
  const trueType = checkImageExtension(imgUrl);

  return (
    <div className='view-image'>
      <div className={`view-image__body ${classes ? classes : ''}`}>
        <figure>
          <img src={imgUrl} />
        </figure>
        {imgDesc && <p>{imgDesc}</p>}
      </div>
      {trueType && fileCanDownload && <DownloadBtn />}
    </div>
  );
};

export default ViewImage;
