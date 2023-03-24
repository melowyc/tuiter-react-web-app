import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {BsTwitter, BsBookmark} from "react-icons/bs";
import {BiHomeAlt, BiHash, BiUser} from "react-icons/bi";
import {AiOutlineBell, AiOutlineUnorderedList, AiOutlineMessage} from "react-icons/ai";
import {SlEnvolope} from "react-icons/sl";
import {RiComputerLine} from "react-icons/ri";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    console.log(paths);
    console.log(active);
    return (
        <>
        <div className="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
        <div className="list-group">
            <a href="#" alt="" className="list-group-item"><BsTwitter color="#60aaf6"/></a>
            <Link to="/tuiter/" className={`list-group-item ${active === "" ?'active':''}`}>
                <BiHomeAlt/> Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <BiHash/> Explore
            </Link>
            <Link to="/" className="list-group-item">
                <RiComputerLine/> Labs
            </Link>
            <a href="#" alt="" className={`list-group-item
                            ${active === 'notifications'?'active':''}`}>
                <AiOutlineBell/> Notifications
            </a>
            <a href="#" alt="" className={`list-group-item
                            ${active === 'messages'?'active':''}`}>
                <SlEnvolope/> Messages
            </a>
            <a href="#" alt="" className={`list-group-item
                            ${active === 'bookmarks'?'active':''}`}>
                <BsBookmark/> Bookmarks
            </a>
            <a href="#" alt="" className={`list-group-item
                            ${active === 'lists'?'active':''}`}>
                <AiOutlineUnorderedList/> Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <BiUser/> Profile
            </Link>
            <a href="#" alt="" className={`list-group-item
                            ${active === 'more'?'active':''}`}>
                <AiOutlineMessage/> More
            </a>
        </div>
        </div>

        <div className="d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
            <div className="list-group">
                <a href="#" alt="" className="list-group-item"><BsTwitter color="#60aaf6"/></a>
                <Link to="/tuiter" className={`list-group-item ${active === 'home'?'active':''}`}>
                    <BiHomeAlt/>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                    <BiHash/>
                </Link>
                <Link to="/" className="list-group-item">
                    <RiComputerLine/>
                </Link>
                <a href="#" alt="" className={`list-group-item
                            ${active === 'notifications'?'active':''}`}>
                    <AiOutlineBell/>
                </a>
                <a href="#" alt="" className={`list-group-item
                            ${active === 'messages'?'active':''}`}>
                    <SlEnvolope/>
                </a>
                <a href="#" alt="" className={`list-group-item
                            ${active === 'bookmarks'?'active':''}`}>
                    <BsBookmark/>
                </a>
                <a href="#" alt="" className={`list-group-item
                            ${active === 'lists'?'active':''}`}>
                    <AiOutlineUnorderedList/>
                </a>
                <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                    <BiUser/>
                </Link>
                <a href="#" alt="" className={`list-group-item
                            ${active === 'more'?'active':''}`}>
                    <AiOutlineMessage/>
                </a>
            </div>
        </div>
        </>
    );
};
export default NavigationSidebar;