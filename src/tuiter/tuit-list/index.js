import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";
import TuitListItem from "../tuit-list-item";

const TuitList = () => {
  const { tuits, loading } = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <>
      {loading && <li className="list-group-item">Loading...</li>}

      <div className="list-group wd-post-list-group">
        {console.log(tuits)}
        {tuits.map((tuit) => {
          return <TuitListItem posts={tuit} />;
        })}
      </div>
    </>
  );
};

export default TuitList;
