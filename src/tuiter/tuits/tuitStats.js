import React from "react";
import {AiOutlineRetweet, AiOutlineDislike, AiFillDislike} from "react-icons/ai";
import {HiOutlineChatBubbleLeft} from "react-icons/hi2";
import {BsHeart, BsFillHeartFill, BsShare} from "react-icons/bs";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
const TuitStats = (
    {post}
) => {
    const dispatch = useDispatch();
    const handle_like = async () => {
        if (post.liked) {
            dispatch(updateTuitThunk({
                ...post,
                likes: post.likes - 1,
                liked: false
            }))
            // setLiked_(false);
            // setLikes_(likes_ - 1);
        } else if (!post.liked) {
            dispatch(updateTuitThunk({
                ...post,
                likes: post.likes + 1,
                liked: true
            }))
            // setLiked_(true);
            // setLikes_(likes_ + 1);
        }
    }
    const handle_dislike = async () => {
        if (post.disliked) {
            dispatch(updateTuitThunk({
                ...post,
                dislikes: post.dislikes - 1,
                disliked: false
            }))
            // setLiked_(false);
            // setLikes_(likes_ - 1);
        } else if (!post.disliked) {
            dispatch(updateTuitThunk({
                ...post,
                dislikes: post.dislikes + 1,
                disliked: true
            }))
            // setLiked_(true);
            // setLikes_(likes_ + 1);
        }
    }
    return(

            <div className="row mt-3 mb-3">
                <div className="col-2">
                    <div className="text-nowrap text-secondary"><HiOutlineChatBubbleLeft/>  {post.replies}</div>
                </div>
                <div className="col-2 ms-3">
                    <div className="text-nowrap text-secondary"><AiOutlineRetweet/> {post.retuits}</div>
                </div>
                <div className="col-2 ms-3">
                    <div className="text-nowrap text-secondary"
                         onClick={handle_like
                    }>

                        {post.liked && <BsFillHeartFill style={{color:"red"}}/>}
                        {!post.liked && <BsHeart/>}

                        {post.likes}
                    </div>

                </div>
                <div className="col-2 ms-3">
                    <div className="text-nowrap text-secondary"
                         onClick={handle_dislike
                         }>

                        {post.disliked && <AiFillDislike style={{color:"red"}}/>}
                        {!post.disliked && <AiOutlineDislike/>}

                        {post.dislikes}
                    </div>

                </div>
                <div className="col-2 ms-3">
                    <div className="text-secondary"><BsShare/></div>
                </div>
            </div>

    );
};
export default TuitStats;