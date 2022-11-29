import parse from 'html-react-parser'
import {useDispatch} from "react-redux";
import  TuitStats from '../Tuit_stats';
import { deleteTuitThunk } from '../../services/tuits-thunks';

const tuitWithImage=({posts})=>{
    return(
        <div className="row mt-3">
            <div className={`card mx-auto wd-card-bg p-0 ${posts.cardTitle?'wd-card-border':''}`} id="c1" style={{"width": "30rem"}}>
                <img src={posts.cardImage} className="card-img-top m-0 p-1" alt="..." style={{"borderRadius": "0px"}} />
                {posts.cardTitle?
                    <div className={`card-body p-3 ${posts.cardTitle?'wd-card-title-border':''}`} id="c2">
                        <h5 className="card-title wd-font-color ">{posts.cardTitle}</h5>
                        <p className="card-text wd-gray-color">{parse(`${posts.cardBody}`)}</p>
                    </div>:''}
            </div>
        </div>
    );
}

const TuitListItem = ({posts}) =>{
    const dispatch = useDispatch();
    const deleteTuitClick = (tuit) => {
        dispatch(deleteTuitThunk(tuit._id));
    };

    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <img src={posts.image} alt="tuit" className="wd-rounded-images" width="50px" height="50px" />
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 p-0">
                    <span className="wd-font-color">{posts.username}</span>
                    <i className="fa fa-circle-check fa-inverse"></i><br />
                    <span className="wd-gray-color">{posts.handle}&nbsp;.&nbsp;{posts.timeframe}</span><br />
                    <span className="wd-font-color">{parse(`${posts.tuit}` )}</span>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 ">       
                    <i className="bi bi-x" style={{"color":"black"}} onClick={() => {
                 deleteTuitClick(posts);
                    }}></i>
                    
                </div>
            </div>
            {posts.cardImage?tuitWithImage({posts}):''}
            <TuitStats tuit={posts}/>
        </div>
    );
}

export default TuitListItem;