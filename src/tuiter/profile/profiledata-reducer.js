import { createSlice } from "@reduxjs/toolkit";

const profile = {
        firstName: "Kai", 
        lastName: "Hiwatari", 
        handle: "@kaihiwatari",
        profilePicture: "jose.png", 	
        bannerPicture: "polyglot.png",
        bio: "Former leader of the Blade Sharks and current leader of the G Revolutions. Also, former member of the Blitzkrieg Boys. Bit-Beast and Beyblade is Dranzer - one of the 4 Sacred Bit-Beasts.",
        website: "youtube.com/webdevtv",
        location: "Boston, MA",	
        dateOfBirth: "1996-10-13",	
        dateJoined: "2009-6-1",
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
