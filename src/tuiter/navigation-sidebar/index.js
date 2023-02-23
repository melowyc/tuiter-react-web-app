import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {BsTwitter, BsBookmark} from "react-icons/bs";
import {BiHomeAlt, BiHash, BiUser} from "react-icons/bi";
import {AiOutlineBell, AiOutlineUnorderedList, AiOutlineMessage} from "react-icons/ai";
import {SlEnvolope} from "react-icons/sl";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
        <div className="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a className={`list-group-item
                            ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item
                            ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item
                            ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
                            ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a className={`list-group-item
                            ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a className={`list-group-item
                            ${active === 'more'?'active':''}`}>
                More
            </a>
        </div>
        </div>

        <div className="d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
            <div className="list-group">
                <a className="list-group-item"><BsTwitter color="#60aaf6"/></a>
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                    <BiHomeAlt/>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                    <BiHash/>
                </Link>
                <Link to="/" className="list-group-item">
                    Labs
                </Link>
                <a className={`list-group-item
                            ${active === 'notifications'?'active':''}`}>
                    <AiOutlineBell/>
                </a>
                <a className={`list-group-item
                            ${active === 'messages'?'active':''}`}>
                    <SlEnvolope/>
                </a>
                <a className={`list-group-item
                            ${active === 'bookmarks'?'active':''}`}>
                    <BsBookmark/>
                </a>
                <a className={`list-group-item
                            ${active === 'lists'?'active':''}`}>
                    <AiOutlineUnorderedList/>
                </a>
                <a className={`list-group-item
                            ${active === 'profile'?'active':''}`}>
                    <BiUser/>
                </a>
                <a className={`list-group-item
                            ${active === 'more'?'active':''}`}>
                    <AiOutlineMessage/>
                </a>
            </div>
        </div>
        </>
    );
};
export default NavigationSidebar;