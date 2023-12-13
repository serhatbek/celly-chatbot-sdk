import InfoBox from './InfoBox/InfoBox';
import './UserProfile.scss';
import { infoBoxItems } from './data';

const UserProfile = ({ userIcon, userName, userPhone }) => {
  console.log(infoBoxItems);
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
