import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";
//import PostListItem from "./post-list-item";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-3">
        <i className="bi bi-chat wd-gray-color">&nbsp;{tuit.replies}</i>
      </div>
      <div className="col-3">
        <i className="bi bi-arrow-repeat wd-gray-color">&nbsp;{tuit.retuits}</i>
      </div>
      <div onClick={() =>{
        console.log("TESTTS");
            dispatch(
              updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
              })
            )
      }} className="col-3">
        <i
          className="bi bi-heart-fill me-2 text-danger"
        ></i>{tuit.likes}
      </div>

      <div onClick={() =>{
        console.log("TESTTS");
            dispatch(
              updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1,
              })
            )
      }} className="col-3">
        <i
          className="bi bi-hand-thumbs-down me-2 text-danger"
        ></i>{tuit.dislikes}
      </div>
    </div>
  );
};
export default TuitStats;
