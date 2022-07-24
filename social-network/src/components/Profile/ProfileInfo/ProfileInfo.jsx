import React from "react";
import styles from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.profile_img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="background-img"
        />
      </div>
      <div>
        <img
          className={styles.portrait_img}
          src="https://static6.depositphotos.com/1003369/659/i/600/depositphotos_6591667-stock-photo-close-up-of-beautiful-womanish.jpg"
          alt="person-img"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
