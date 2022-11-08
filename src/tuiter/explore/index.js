import React from "react";
import PostSummaryList from "../post-summary-list";
import WhoToFollowList from "../who-to-follow-list";
import "./index.css";

const ExploreComponent = () => {
 return(
  <div className="row">
    <div className="col-12 col-lg-8 col-xl-7">
    <div className="wd-content-padding wd-search-bar-div">
    <div className="row wd-search-content">
      <div className="col-11">
        <div className="position-relative">
            <span className="wd-search-icon position-absolute">
                <i className="bi bi-search" aria-hidden="true" style={{color:'darkgray'}}></i>
              </span>
        
        <input
          type="text"
          placeholder="Search Twitter"
          className="wd-search-bar"
        />
    </div>
      </div>
      <div className="col-1">
        <a href="explore-settings.html">
          <i
            className="bi bi-gear-fill"
            style={{paddingTop:'8px', fontSize: '25px'}}
          ></i>
        </a>
      </div>
    </div>
  </div>
    <ul className="nav nav-tabs wd-nav-tabs">
      <li className="nav-item">
        <b><a className="nav-link active wd-active-link" href="#">For you</a></b>
      </li>
      <li className="nav-item">
       <b><a className="nav-link" href="#">Trending</a></b>
      </li>
      <li className="nav-item">
        <b><a className="nav-link" href="#">News</a></b>
      </li>
      <li className="nav-item">
        <b><a className="nav-link" href="#">Sports</a></b>
      </li>
      <li className="d-none d-md-block d-lg-block d-xl-block d-xxl-block nav-item">
        <b><a className="nav-link" href="#">Entertainment</a></b>
      </li>
    </ul>
    <div className="wd-grid-row">
      <div className="wd-grid-right-posts">
      
        <div className="wd-spacex-image">
        <img id="wd-spacex-pic" src="/images/Starship.webp" />
        <h1 className="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
        </div>
        <div id="wd-summary-content">
        <PostSummaryList />
        </div>
    </div>
    </div>
    </div>
    <div className="d-none d-lg-block col-lg-4 col-xl-5"><WhoToFollowList /></div>
    </div>
 );
};
export default ExploreComponent;