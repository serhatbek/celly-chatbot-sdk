import './FileDownload.scss';
import downloadIcon from '../../../public/images/icons/download@2x.png';

const FileDownload = ({ fileIcon, fileTitle, fileUrl, classes }) => {
  //   const handleDownload = () => {};

  return (
    <div className={`download-file ${classes ? classes : ''}`}>
      <div>
        <figure>
          <img src={fileIcon} />
        </figure>
        <span>{fileTitle}</span>
        <a
          className='download-file__download'
          href={fileUrl}
          download={fileUrl}
          onClick={(event) => event.stopPropagation()}
        >
          <img src={downloadIcon} alt='İndir' />
        </a>
      </div>
    </div>
  );
};

export default FileDownload;
