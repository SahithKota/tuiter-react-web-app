import { createSlice } from "@reduxjs/toolkit";

const profile = {
        firstName: "Bruce", 
        lastName: "Wayne", 
        handle: "@batman",
        profilePicture: "jose.png", 	
        bannerPicture: "polyglot.png",
        bio: "Batman's secret identity is Bruce Wayne, a wealthy American industrialist. As a child, Bruce witnessed the murder of his parents, Dr. Thomas Wayne and Martha Wayne, which ultimately led him to craft the Batman persona and seek justice against criminals.",
        website: "youtube.com/webdevtv",
        location: "Boston, MA",	
        dateOfBirth: "1997-08-06",	
        dateJoined: "2011-08-06",
        followingCount: 340,	
        followersCount: 223,
        tweets: 4117
}

const tuitsSlice = createSlice({
 name: 'profile',
 initialState: profile,
 reducers: {
    updateProfile(state, action) {
        return {...state,
        ...action.payload}
     
    }
}});
export const {updateProfile} = tuitsSlice.actions;
export default tuitsSlice.reducer;
