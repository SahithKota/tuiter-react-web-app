import React from "react";
import PostSummaryItem
  from "./post-summary-item";
  import {useSelector} from "react-redux";

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuits)
 return(
    
        postsArray.map(p=>
            <PostSummaryItem key={p._id} post={p} />
    )
    
 );
};
export default PostSummaryList;
