import InfoBox from './InfoBox/InfoBox';
import InfoBoxWide from './InfoBoxWide/InfoBoxWide';
import './UserProfile.scss';
import { infoBoxItems, wideBoxItems } from './data';

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
        <div>
          {infoBoxItems.map((item, index) => (
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
