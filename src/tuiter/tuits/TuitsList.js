import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const TuitsList = () => {
  const tuits = useSelector(state => state.tuits)

 return(
<div class="list-group wd-post-list-group">
        {tuits.map(t=>{
             return <TuitItem tuit={t}/>;
    })
    }
    </div>
 );
};
export default TuitsList;