import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";

const TuitItem = ({tuit}) => {

const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}

 return(
    <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={tuit.image} className="wd-rounded-images" width="50px" height="50px" />
                </div>
                <div className="col-10">
                    <span className="wd-font-color"><b>{tuit.topic}</b></span>&nbsp;
                    <i className="bi bi-check-circle-fill wd-blue-color"></i>&nbsp;
                    <span className="wd-gray-color">{tuit.handle}&nbsp;.&nbsp;{tuit.time}</span>
                    <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
            <br/>
                    <span className="wd-font-color">{tuit.tuit}</span>
                    {/* <div className={`card wd-card-bg ${post.cardTitle?'wd-card-border':''}`} id="c1">
                      <img src={post.cardImage} className="card-img-top m-0" alt="..." style={{borderRadius: '0px'}} />
                      {post.cardTitle?
                      <div className={`card-body ${post.cardTitle?'wd-card-title-border':''}`} id="c2">
                          <h5 className="card-title wd-font-color ">{post.cardTitle}</h5>
                          <p className="card-text wd-gray-color">{post.cardBody}</p>
                      </div>:''}
                    </div> */}
                    <div className="row wd-icons">
                    <TuitStats tu={tuit}/>
            </div>
                </div>
            </div>
        </div>
 );
};
export default TuitItem;