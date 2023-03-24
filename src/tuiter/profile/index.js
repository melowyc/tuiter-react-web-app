import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {HiArrowLeft} from "react-icons/hi";
import {BsCalendar3} from "react-icons/bs";
import {GiNewBorn} from "react-icons/gi";
import {RiMapPinLine} from "react-icons/ri";


const ProfileComponent = (
    // {profile = {
    //     firstName: 'Yichao',
    //     lastName: 'Wu',
    //     handle: '@yichaowu',
    //     profilePicture: 'yeats.jpg',
    //     bannerPicture: 'polyglot.jpg',
    //     bio: 'MSCS Student at NEU, Software Engineer Intern, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    //     website: 'youtube.com/webdevtv',
    //     location: 'San Jose, CA',
    //     dateOfBirth: '3/16/1998',
    //     dateJoined: '3/2019',
    //     followingCount: 340,
    //     followersCount: 223,
    //     numOfTuits: 1234
    // }}
) => {
    const profile = useSelector((state) => state.profile);
    return(
        <div className="border border-1 ">
            <div className="row ps-4">
                <div className="col-1">
                    <HiArrowLeft className="mt-3"/>

                </div>
                <div className="col-11 mb-1">
                    <span className="fw-bold" style={{fontSize:"20px"}}> {profile.firstName} {profile.lastName} </span>
                    <br/>
                    <span className="text-secondary"> {profile.numOfTuits} Tweets </span>
                </div>
            </div>
            <div className="w-100">
                <img src={`/images/${profile.bannerPicture}`}
                     height="120%"
                     weight="120%"
                     className="w-100"/>
            </div>
            <div className="row">
                <div className="col-4 rounded-circle">
                    <div style={{position:"absolute", top:"35%", left:"30px"}}>
                        <img src={`/images/${profile.profilePicture}`}
                             height="150px"
                             className="rounded-circle"
                        />
                    </div>
                </div>
                <div className="col-4">

                </div>
                <div className="col-3 ms-4">
                    <Button className="mt-3 rounded-pill border-1 fw-bold"
                            style={{borderColor:"grey",color:"black", textTransform: 'none'}}
                            component={Link}
                            to="/tuiter/edit-profile"
                            variant="outlined"
                            >
                        Edit profile
                    </Button>


                </div>
            </div>
            <div className="mt-5 ps-3">
                <div>
                    <span className="fw-bold" style={{fontSize:"24px"}}> {profile.firstName} {profile.lastName} </span>
                    <br/>
                    <span className="text-secondary"> {profile.handle} </span>
                </div>

                <div className="mt-3 me-3">
                    {profile.bio}
                </div>

                <div className="text-secondary mt-3 d-flex align-items-center">
                    <RiMapPinLine/>
                    <span className="ms-1 me-3">{profile.location}</span>
                    <GiNewBorn/>
                    <span className="me-3"> Born {profile.dateOfBirth}</span>
                    <BsCalendar3/>
                    <span className="ms-1 me-3"> Joined {profile.dateJoined}</span>

                </div>


                <div className="mt-3 pb-3">
                    <span className="fw-bold"> {profile.followingCount} </span> <span className="me-3 text-secondary">  Following </span>
                    <span className="fw-bold"> {profile.followersCount} </span> <span className="text-secondary"> Followers </span>
                </div>
            </div>
        </div>
    );
};
export default ProfileComponent;