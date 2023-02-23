import React from "react";
import { HiOutlineArrowUpTray,HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { HiBadgeCheck } from "react-icons/hi";
import { AiOutlineRetweet } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { IoEllipsisHorizontal } from "react-icons/io5";
import "./index.css";
const PostListItem =  (
    {
        post = {
            "_id": 234,
            "retweeted": "",
            "avatarIcon": "musk-avatar.png",
            "topic": "Space",
            "userName": "Elon Musk ",
            "handle": " @elonmusk",
            "content": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.",
            "time": "15h",
            "link-text": "",
            "link": "",
            "comment": "5,346",
            "forward": "1,601",
            "like": "19.2K",
            "image": "" ,
            "thread": "",
            "nested":"true",
            "f-avatar": "spacex.png",
            "f-username": "SpaceX ",
            "f-handle": " @SpaceX",
            "f-time":"16h",
            "f-content": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage →",
            "f-link-text": "starlink.com/rv",
            "f-link": "https://www.starlink.com/rv"
        }
    }
) => {
    return(
        <li className="list-group-item">
            {post.retweeted !== "" ?
                <div>

                    <span className="fw-bold wd-font-color ms-5"><AiOutlineRetweet strokeWidth="30"/>{post.retweeted} Retweeted</span>
                </div>
                : ""
            }
            <div className="row">
                <div className="col-2">
                    <img className="rounded-pill" alt="" style={{position:"relative", left: "15px"}} width="75%" src={`/images/${post.avatarIcon}`} />
                </div>
                <div className="col-10 ">  
                    <div className="row">
                        <div className="col-11">
                            <div className="fw-bold">
                                {post.userName}
                                <HiBadgeCheck color="#60aaf6"/>
                                <span className="text-secondary fw-normal">{post.handle}</span>
                                <span className="text-secondary fw-normal">- {post.time}</span>
                            </div>
                        </div>
                        <div className="col-1">
                            <IoEllipsisHorizontal/>
                        </div>
                    
                    </div>             

                    <div className="mb-2">
                        <span className="fw-normal">{post.content}</span>
                        <a className="link-no-underline" href={`{post.link}`}>{post["link-text"]}</a>
                    
                    </div>
                    <div className="wd-border-radius-more" >
                        {post.nested === "" ?
                        <img className="wd-border-radius-1" alt=""  width="100%" src={`/images/${post.image}`}/>
                        :
                        <div className="container border rounded-4">
                            <div className="row">
                            <div className="col-1">
                            <img className="rounded-pill" width="200%" src={`/images/${post["f-avatar"]}`} alt="" />
                            </div>

                            <div className="col-11">
                                <div className="fw-bold">
                                    {post["f-username"]}
                                    <HiBadgeCheck color="#60aaf6"/>
                                    <span className="text-secondary fw-normal">{post["f-handle"]}</span>
                                    <span className="text-secondary fw-normal">- {post["f-time"]}</span>
                                </div>
                            </div>
                            </div>

                            <div className="mb-2">
                            <span>{post["f-content"]}</span>
                            <a className="link-no-underline-white" href={post["f-link"]}>{post["f-link-text"]}</a>
                            </div>
                        </div> }
                    </div>
                    <div className="row mt-3 mb-3">
                        <div className="col-3">
                            <div className="text-nowrap text-secondary"><HiOutlineChatBubbleLeft/>  {post.comment}</div>
                        </div>
                        <div className="col-3">
                            <div className="text-nowrap text-secondary"><AiOutlineRetweet/> {post.forward}</div>
                        </div>
                        <div className="col-3">
                            <div className="text-nowrap text-secondary"><BsHeart/>   {post.like}</div>
                        </div>
                        <div className="col-3">
                            <div className="text-secondary"><HiOutlineArrowUpTray/></div>
                        </div>
                    </div>
                    {post.thread !== "" ?
                        <div>
                            <a className="link-no-underline" href={""}>Show the thread</a>
                        </div> : ""
                    }
                </div>

            </div>
        </li>
    
    );
}
export default PostListItem;