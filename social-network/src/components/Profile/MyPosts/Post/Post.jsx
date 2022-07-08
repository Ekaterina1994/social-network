import React from "react";
import styles from "./Post.module.scss";

const Post = (props) => {
  return (
    <div>
      <div className={styles.item}>{props.message}</div>
      <div>{props.likes}likes</div>
    </div>
  );
};

export default Post;
