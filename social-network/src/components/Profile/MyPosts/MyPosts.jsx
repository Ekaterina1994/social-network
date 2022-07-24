import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElements = props.postData.map((post) => {
		return (<Post message={post.post} likes={post.likesCount} />)
	});

  return (
    <div>
			My posts
      { postsElements }
    </div>
  );
};

export default MyPosts;
