import React from "react";
import {HiBadgeCheck} from "react-icons/hi";
import {IoEllipsisHorizontal} from "react-icons/io5";
import TuitStats from "./tuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";

const TuitItem = (
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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-pill" alt="" style={{position:"relative", left: "15px"}} width="75%" src={`/images/${post.image}`} />
                </div>
                <div className="col-10 ">
                    <div className="row">
                        <div className="col-10">
                            <div className="fw-bold">
                                {post.userName}
                                <HiBadgeCheck color="#60aaf6"/>
                                <span className="text-secondary fw-normal">{post.handle}</span>
                                <span className="text-secondary fw-normal">- {post.time}</span>
                            </div>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(post._id)}></i>
                        </div>

                    </div>

                    <div className="mb-2">
                        <span className="fw-normal">{post.tuit}</span>

                    </div>
                    <div class="border-0">
                    <TuitStats
                        key={post._id} post={post}/>
                    </div>

                </div>

            </div>
        </li>
    );
};
export default TuitItem;