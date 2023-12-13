import './InfoBoxWide.scss';

const InfoBoxWide = ({ titleOne, textOne, titleTwo, textTwo }) => {
  return (
    <div className='infobox-wide'>
      <div>
        <p>{titleOne}</p>
        <span>{textOne}</span>
      </div>
      <div>
        <p>{titleTwo}</p>
        <span>{textTwo}</span>
      </div>
    </div>
  );
};

export default InfoBoxWide;
