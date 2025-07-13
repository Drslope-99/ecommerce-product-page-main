import "./UserProfile.css";
import UserImage from "../../assets/images/image-avatar.png";

function UserProfile() {
  return (
    <div className="user">
      <img src={UserImage} alt="" className="user__image" />
    </div>
  );
}

export default UserProfile;
