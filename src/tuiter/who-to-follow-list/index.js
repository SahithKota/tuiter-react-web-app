import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
  from "./who-to-follow-list-item";

const WhoToFollowList = () => {
 return(
    <>
    <ul class="list-group">
    <li class="list-group-item wd-follow-label" style={{borderRadius:"15px 15px 0px 0p", fontSize:"20px"}}><b>Who to follow</b></li>
    {
        whoArray.map(w=> <WhoToFollowListItem who={w} />)
    }
    <li class="list-group-item wd-follow-label" style={{borderRadius:"0px 0px 15px 15px"}}>
    <div class="row wd-row">
        <a href="#">Show More</a>
    </div>
</li>

</ul>
  </>
 );
};

export default WhoToFollowList;