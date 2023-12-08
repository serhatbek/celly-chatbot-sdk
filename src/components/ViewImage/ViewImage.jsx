import downloadIcon from '../../../public/images/icons/download@2x.png';
import { checkImageExtension } from '../../utils/checkExtension';
import './ViewImage.scss';

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
      {trueType && fileCanDownload && (
        <a
          className='download-file__download'
          href={imgUrl}
          download={imgUrl}
          onClick={(event) => event.stopPropagation()}
        >
          <img src={downloadIcon} alt='İndir' />
        </a>
      )}
    </div>
  );
};

export default ViewImage;
