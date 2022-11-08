import React from "react";
const WhoToFollowListItem = ({who}
) => {
 return(
    <div className="list-group-item wd-follow-label">
    <div className="row wd-row">
        <div className="col-8">
          <div className="d-flex flex-row align-items-center">
            <img
            className="wd-tweet-pages-pic"
            src={who.avatarIcon}
          />
          <div>
            <b>{who.userName}</b>&nbsp;<i className="bi bi-circle-check bi-inverse"></i><div className="wd-handler">@{who.handle}</div>
          </div>
        </div>
          </div>
        <div className="col-4">
            <button
        id="wd-follow-button"
        type="submit"
        className="btn btn-primary"
      >
        Follow
      </button>
        </div>
    </div>
</div>
 );
};
export default WhoToFollowListItem;