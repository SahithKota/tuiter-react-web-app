import React from "react";
//import PostListItem from "./post-list-item";
import tuits from "./tuits.json"
import TuitItem from "./TuitItem";

const TuitStats = ({tu}) => {
 return(<>
    <div className="col-3">
                <i className='bi bi-chat wd-gray-color'>&nbsp;{tu.replies}</i>
            </div>
            <div className="col-3">
            <i className="bi bi-arrow-repeat wd-gray-color">&nbsp;{tu.retuits}</i>
            </div>
            <div className="col-3">
                <i className={tu.liked?'bi bi-heart-fill wd-red-color':'bi bi-heart'}>&nbsp;{tu.likes}</i>
            </div>
            <div className="col-3">
            <i className="bi bi-share wd-gray-color"></i>
            </div>
            </>
 );
};
export default TuitStats;
