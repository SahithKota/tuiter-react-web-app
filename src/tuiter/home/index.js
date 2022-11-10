import React from "react";
import WhoToFollowList from "../who-to-follow-list";
import "./index.css";
import WhatsHappening from "./whats-happening";
import TuitList from "../tuit-list"

const HomeComponent = () => {

 return(
    <div class="row">
        <div className="col-12 col-lg-7 col-xl-7">
    <WhatsHappening/>
    <TuitList/>
     </div>
     <div className="d-none d-lg-block col-lg-5 col-xl-5">
     <WhoToFollowList />
     </div>
     </div>
 );
};
export default HomeComponent;