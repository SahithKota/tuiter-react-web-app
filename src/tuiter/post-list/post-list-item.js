const PostListItem = ({
    post
}) => {
 return(
    <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={post.image} className="wd-rounded-images" width="50px" height="50px" />
                </div>
                <div className="col-10">
                    <span className="wd-font-color">{post.username}</span>
                    <i className="fa fa-circle-check fa-inverse"></i><br />
                    <span className="wd-gray-color">{post.handle}&nbsp;.&nbsp;{post.timeframe}</span><br />
                    <span className="wd-font-color">{post.content}</span>
                    <div className={`card wd-card-bg ${post.cardTitle?'wd-card-border':''}`} id="c1">
                      <img src={post.cardImage} className="card-img-top m-0" alt="..." style={{borderRadius: '0px'}} />
                      {post.cardTitle?
                      <div className={`card-body ${post.cardTitle?'wd-card-title-border':''}`} id="c2">
                          <h5 className="card-title wd-font-color ">{post.cardTitle}</h5>
                          <p className="card-text wd-gray-color">{post.cardBody}</p>
                      </div>:''}
                    </div>
                    <div className="row wd-icons">
                    <div className="col-3">
                <i className='bi bi-chat wd-gray-color'>&nbsp;{post.commentNumber}</i>
            </div>
            <div className="col-3">
            <i className="bi bi-arrow-repeat wd-gray-color">&nbsp;{post.shareNumber}</i>
            </div>
            <div className="col-3">
                <i className="bi bi-heart-fill wd-red-color">&nbsp;{post.heartNumber}</i>
            </div>
            <div className="col-3">
            <i className="bi bi-upload wd-gray-color"></i>
            </div>
            </div>
                </div>
            </div>
        </div>
 );
};
export default PostListItem;