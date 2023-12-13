import InfoBox from './InfoBox/InfoBox';
import InfoBoxWide from './InfoBoxWide/InfoBoxWide';
import './UserProfile.scss';
import {
  infoBoxItems,
  infoBoxItems2,
  wideBoxItems,
  wideBoxItems2,
} from './data';

const UserProfile = ({ userIcon, userName, userPhone }) => {
  return (
    <div className='user-info'>
      <div className='user-info__head'>
        <figure>
          <img src={userIcon} />
        </figure>
        <div>
          <p>{userName}</p>
          <span>{userPhone}</span>
        </div>
      </div>

      <div className='user-info__body'>
        <InfoBoxWide
          titleOne={wideBoxItems.titleOne}
          textOne={wideBoxItems.textOne}
          titleTwo={wideBoxItems.titleTwo}
          textTwo={wideBoxItems.textTwo}
        />

        <div className='box'>
          {infoBoxItems.map((item, index) => (
            <InfoBox
              key={index}
              infoIcon={item.icon}
              infoTitle={item.title}
              infoText={item.text}
            />
          ))}
        </div>

        <InfoBoxWide
          titleOne={wideBoxItems2.titleOne}
          textOne={wideBoxItems2.textOne}
          titleTwo={wideBoxItems2.titleTwo}
          textTwo={wideBoxItems2.textTwo}
        />

        <div className='box'>
          {infoBoxItems2.map((item, index) => (
            <InfoBox
              key={index}
              infoIcon={item.icon}
              infoTitle={item.title}
              infoText={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
