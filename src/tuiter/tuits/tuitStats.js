import React from "react";
import {AiOutlineRetweet} from "react-icons/ai";
import {HiOutlineChatBubbleLeft} from "react-icons/hi2";
import {BsHeart, BsShare, BsFillHeartFill} from "react-icons/bs";
const TuitStats = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s whatbeing a spacefaring civilization is all about. It’s about believing in the future and thinking that thefuture will be better than the past. And I can’t think of anything more exciting than going out there andbeing among the stars"

        }
    }
) => {
    return(

            <div className="row mt-3 mb-3">
                <div className="col-3">
                    <div className="text-nowrap text-secondary"><HiOutlineChatBubbleLeft/>  {post.replies}</div>
                </div>
                <div className="col-3">
                    <div className="text-nowrap text-secondary"><AiOutlineRetweet/> {post.retuits}</div>
                </div>
                <div className="col-3">
                    {post.liked === true ?
                        <div className="text-nowrap text-secondary"><BsFillHeartFill style={{color:"red"}}/>   {post.likes}</div>
                        :
                        <div className="text-nowrap text-secondary"><BsHeart/>   {post.likes}</div>
                    }

                </div>
                <div className="col-3">
                    <div className="text-secondary"><BsShare/></div>
                </div>
            </div>

    );
};
export default TuitStats;