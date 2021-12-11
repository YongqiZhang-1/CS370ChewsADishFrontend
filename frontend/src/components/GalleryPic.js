import React, { useState } from "react";
import "./Post.css";
// import CardItem from './Carditem';
import { Link } from "react-router-dom";

export function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
  }
}

function GalleryPic({ post }) {
  console.log(post);
  const [likes, setLikes] = useState(
    post.likeCount || "0"
  );
  const [isLikedByUser, setIsLikedByUser] = useState(false);
  const handleLikeClick = () => {
    if (!isLikedByUser) {
      setIsLikedByUser(true);
      setLikes((p) => p + 1);
    } else {
      setIsLikedByUser(false);
      setLikes((p) => p - 1);
    }
    // CALL THE API HERE
  };
  return (
    <div className="wrapper">
      <div className="left-col">
        <div className="gallery-item">
          <div className="info">
            <div className="user">
              <p className="username">ChewsADish</p>
            </div>
          </div>

          <Link
            to={"/Gallary/" + post._id}
            style={{ textDecoration: "none", color: "initial" }}
          >
            <img src={post.media} className="gallery-image" alt="" />
          </Link>
          <div className="post-content">
            <div className="reaction-wrapper">
              <img
                src="images/like.jpeg"
                className="icon"
                alt=""
                onClick={handleLikeClick}
              />
              <img src="images/comment.jpeg" className="icon" alt="" />
            </div>
            <p className="likes">{likes} likes</p>
            <p className="description">
              <span>Shirley Chen </span>
              {post.content}
            </p>
            <p className="post-time">
              {timeDifference(new Date(), new Date(post.creationDate))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GalleryPic;
