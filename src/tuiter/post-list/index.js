import React from "react";
import PostListItem from "./post-list-item";
import posts from "./posts.json"

const PostList = () => {
 return(
<div class="list-group wd-post-list-group">
        {posts.map(p=>{
             return <PostListItem post={p}/>;
    })
    }
    </div>
 );
};
export default PostList;