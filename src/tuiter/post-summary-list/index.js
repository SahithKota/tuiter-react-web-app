import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
  from "./post-summary-item";

const PostSummaryList = () => {
 return(
    
        postsArray.map(p=>
            <PostSummaryItem post={p} />
    )
    
 );
};
export default PostSummaryList;