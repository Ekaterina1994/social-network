import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
			My posts
      <Post message='Hello' likes='2' />
			<Post message='Hello hello' likes='5' />
			<Post message='Hi' likes='1' />
			<Post message='Hi hi' likes='12' />
			<Post message='Bye' likes='25' />
    </div>
  );
};

export default MyPosts;
