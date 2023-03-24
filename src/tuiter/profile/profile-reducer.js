import { createSlice } from "@reduxjs/toolkit";
import profile from '../data/profile.json';

const currentUser = {
    firstName: 'Yichao',
    lastName: 'Wu',
    handle: '@yichaowu',
    profilePicture: 'yeats.jpg',
    bannerPicture: 'polyglot.jpg',
    bio: 'MSCS Student at NEU, Software Engineer Intern, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'San Jose, CA',
    dateOfBirth: '3/16/1998',
    dateJoined: '3/2019',
    followingCount: 340,
    followersCount: 223,
    numOfTuits: 1234,
    initialState:profile
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: currentUser,
    reducers: {
        editUserInfo(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.website = action.payload.website;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});
export const {editUserInfo} = profileSlice.actions;
export default profileSlice.reducer;