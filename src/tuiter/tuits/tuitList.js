import React, {useEffect} from "react";
// import postsArray from './posts.json';
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuitItem";
import {findTuitsThunk} from "../../services/tuits-thunks";
const TuitList = () => {
    // const postsArray = useSelector(state => state.tuits)
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    console.log(tuits)
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(post =>
                    <TuitItem
                        key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default TuitList;