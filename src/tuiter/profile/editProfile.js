import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from 'react-router';
import { editUserInfo } from './profile-reducer';
import {Button, TextField} from "@mui/material";
import { IconButton } from "rsuite";
import { alpha, styled } from '@mui/material/styles';
import {Link} from "react-router-dom";
import {MdClose, MdOutlineAddAPhoto} from "react-icons/md";
import {HiOutlineChevronRight} from "react-icons/hi";
import './index.css';
import "rsuite/dist/rsuite.min.css";


const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: "white",
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'white',
        },
        '&.Mui-focused': {
            backgroundColor: 'white',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
}));
const EditProfileComponent  = (
    // {userInfo = {
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
    const userInfo = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const saveProfileChange = () => {
        dispatch(editUserInfo({
            firstName: name.split(' ')[0] || '',
            lastName: name.split(' ')[1] || '',
            bio: bio,
            website: website,
            location: location,
            dateOfBirth: birthday,
            }
        ));
        navigate("/tuiter/profile");
    }
    const [editBirthday, setEditBirthday] = useState(false);
    const [name, setName] = useState(userInfo.firstName+userInfo.lastName);
    const [bio, setBio] = useState(userInfo.bio);
    const [location, setLocation] = useState(userInfo.location);
    const [website, setWebsite] = useState(userInfo.website);
    const [birthday, setBirthday] = useState(userInfo.dateOfBirth);

    return(
        <div className="border border-1">
            <div className="row mt-2">
                <div className="col-1">
                    <Link to='/tuiter/profile'>
                        <MdClose className="ms-3" style={{fontSize:"20px", color:"black"}}/>
                    </Link>


                </div>
                <div className="col-8 ms-3 mb-2">
                    <span className="fw-bold" style={{fontSize:"20px"}}> Edit profile </span>
                </div>
                <div className="col-2 ms-4">
                    <Button className="mb-2 rounded-pill border-1 fw-bold"
                            style={{borderColor:"grey",color:"white",backgroundColor:"black", textTransform: 'none'}}
                            onClick={() => saveProfileChange()}
                            variant="outlined"
                    >
                        Save
                    </Button>

                </div>
            </div>
            <div>
                <img src={`/images/${userInfo.bannerPicture}`}
                     height="100%"
                     weight="100%"
                className="w-100 darker"/>

                <IconButton icon={<MdOutlineAddAPhoto />}
                             className='camera1'
                            circle size="lg" />
                <IconButton icon={<MdClose />} color="white"
                             className='close-icon'
                            circle size="lg" />



            </div>
            <div className="row">
                <div className="col-4 rounded-circle mt-5">
                    <div style={{position:"absolute", top:"200px", left:"30px"}}>
                        <img src={`/images/${userInfo.profilePicture}`}
                             height="150px"
                             className="rounded-circle darker"
                        />
                        <IconButton icon={<MdOutlineAddAPhoto />} color="cyan"
                                     className='camera2'
                                    circle size="lg" />
                        {/*<IconButton className='camera2'*/}
                        {/*            color="white"*/}
                        {/*            aria-label="upload picture"*/}
                        {/*            component="label">*/}
                        {/*    <MdOutlineAddAPhoto className='rounded-pill'/>*/}
                        {/*</IconButton>*/}
                    </div>
                </div>
                <div className="col-5">

                </div>
                <div className="col-3 mt-2">

                </div>
            </div>
            <div className="ps-3 pe-3">
                <div>
                    <RedditTextField
                        label="Name"
                        defaultValue={`${userInfo.firstName} ${userInfo.lastName}`}
                        id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 15, width:'100%'}}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="mt-3">
                    <RedditTextField
                        multiline
                        label="Bio"
                        defaultValue={`${userInfo.bio}`}
                        id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width:'100%'}}
                        onChange={e => setBio(e.target.value)}
                    />
                </div>

                <div className="mt-3">
                    <RedditTextField
                        label="Location"
                        defaultValue={`${userInfo.location}`}
                        id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width:'100%'}}
                        onChange={e => setLocation(e.target.value)}
                    />
                </div>

                <div className="mt-3">
                    <RedditTextField
                        label="Website"
                        id="reddit-input"
                        variant="filled"
                        style={{ marginBottom: 20, marginTop: 11, width:'100%'}}
                        onChange={e => setWebsite(e.target.value)}
                    />
                </div>


                {editBirthday
                    ?
                    <div className='wd-forms'>
                        <space className='text-secondary'>Birth date</space>
                        <br/>
                        <input onChange={e => setBirthday(e.target.value)}
                               required
                               type={'date'}
                               />
                    </div>
                    :
                    <div>
                        <div>
                            <span className='text-secondary'>Birth date · </span>
                            <button
                                onClick={() => setEditBirthday(true)}
                                className="button-text"
                                >
                                Edit
                            </button>
                        </div>
                        <div>{birthday}</div>
                    </div>
                }

                <div className="row mt-3 pb-3 mb-3">
                    <div className="col-10"> Switch to professional </div>
                    <div className="col-1"> <a href="#" style={{color:"inherit"}}><HiOutlineChevronRight/></a> </div>
                </div>
            </div>
        </div>
    );
};
export default EditProfileComponent;