import React from "react";
const PostSummaryItem = ({post}) => {
 return(
    <div className="wd-posts-two">
    <div className="row">
      <div className="col-10">
        <div className={post.topic?'wd-topic':''}>{post.topic}</div>
        <div className="wd-title"><b>{post.userName}</b>&nbsp;<i className="bi bi-check-circle-fill wd-blue-color"></i>&nbsp;<span className="wd-topic"> - {post.time}</span></div>
        <div className={post.title?'wd-title':''}><b>{post.title}</b></div>
        <div className={post.tweets?'wd-topic':''}><b>{post.tweets}</b></div>
      </div>
      <div className="col-2">
        <img id="wd-react-image" src={post.image} />
      </div>
    </div>
  </div>
 );
};
export default PostSummaryItem;