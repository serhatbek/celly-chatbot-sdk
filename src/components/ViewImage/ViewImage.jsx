import './ViewImage.scss';

const ViewImage = ({ image, imgDesc }) => {
  return (
    <div className='view-image'>
      <figure>
        <img src={image} />
      </figure>
      {imgDesc && <p>{imgDesc}</p>}
    </div>
  );
};

export default ViewImage;
