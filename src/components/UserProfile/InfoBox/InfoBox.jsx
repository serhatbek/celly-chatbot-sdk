import './InfoBox.scss';

const InfoBox = ({ infoTitle, infoIcon, infoText }) => {
  return (
    <div className='info-box'>
      <figure>
        <img src={infoIcon} />
      </figure>
      <div>
        <p>{infoTitle}</p>
        <span>{infoText}</span>
      </div>
    </div>
  );
};

export default InfoBox;
