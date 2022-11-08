import React from "react";
import WhoToFollowList from "../who-to-follow-list";
import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProfileComponent = () => {
 const profileData = useSelector((state) => state.profile);
 let month = new Date(profileData.dateJoined).toDateString().slice(4,7);
 let year = new Date(profileData.dateJoined).toDateString().slice(11,15);
 let dobarray = profileData.dateOfBirth.split("-"); 
 let d = new Date(dobarray[0],dobarray[1],dobarray[2]).toDateString();
 let joinDate = month.concat(" ").concat(year);
 return(
  
  <div class="row">
    
<div className="col-12 col-lg-7 col-xl-7">
  <div class="row">
    <div class="col-1">
    <i class="bi bi-arrow-left-short wd-back-icon"></i>
    </div>
    <div class="col-11">
    <b>{profileData.firstName}&nbsp;{profileData.lastName}</b>
<div class="wd-tweets">{profileData.tweets} tweets</div>
    </div>
  </div>

<div class="columns wd-the-header-one is-marginless">
<div class="column wd-header-text-one is-6 is-offset-3 is-12-mobile">
  <img class="wd-header-background-one" src="../../image/profilebackground.jpg" id="header-background-id" alt="background-img"/>
</div>
</div>
<Link to="/tuiter/editprofile" class="wd-editprofile-button">
<button class="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold">Edit Profile</button>
</Link>

<div class="column is-13 has-text-left">
<img class="wd-profile-picture-one" src="../../image/kai.png" alt="profile-picture"/>
</div>

<div class="wd-profile-name">
<h3>{profileData.firstName}&nbsp;{profileData.lastName}</h3>
</div>
<div class="wd-profile-handler">
{profileData.handle}
</div><br/>
<div class="wd-profile-info">
{profileData.bio}
</div><br/>
<div class="row wd-profile-details">
<div class="col-4">
<i class="bi bi-map"></i>&nbsp;{profileData.location}
</div>
<div class="col-4">
<i class="bi bi-balloon-fill"></i>&nbsp;{new Date(dobarray[0],dobarray[1] - 1,dobarray[2]).toDateString().slice(4)}
</div>
<div class="col-4">
<i class="bi bi-calendar"></i>&nbsp;Joined&nbsp;{joinDate}
</div>
</div><br/>
<div class="wd-followers">
<b>{profileData.followersCount}</b> Followers <b>{profileData.followingCount}</b> Following
</div>
  </div>
<div className="d-none d-lg-block col-lg-5 col-xl-5">
<WhoToFollowList />
</div>
</div>
);
};
export default ProfileComponent;