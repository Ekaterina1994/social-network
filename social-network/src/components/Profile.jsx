import React from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.content}>
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
      <div>
        My posts
        <div>New post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
