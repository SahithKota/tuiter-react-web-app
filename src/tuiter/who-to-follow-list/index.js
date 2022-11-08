import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowListItem
  from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
 return(
    <>
    <ul class="list-group">
    <li class="list-group-item wd-follow-label" style={{borderRadius:"15px 15px 0px 0p", fontSize:"20px"}}><b>Who to follow</b></li>
    {
        whoArray.map((w, index)=> <WhoToFollowListItem key={index} who={w} />)
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