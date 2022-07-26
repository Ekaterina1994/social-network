import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.postData} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} />
    </div>
  );
};

export default Profile;
