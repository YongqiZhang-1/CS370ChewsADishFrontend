import React, { useEffect, useState } from "react";
import data from "./../../data.json";
import { useParams } from "react-router-dom";
import { timeDifference } from "../GalleryPic";
import Comment from "../comment";
import useFetch from "../useFetch";
import { render } from "react-dom";

export default function SingleGallary() {
  const { id } = useParams();

  const {data:currGalleryPost, isPending, error} = useFetch('http://localhost:3456/api/gallery/' + id);

  const [newComment, setNewComment] = useState("");


  const handleNewComment = (e) => {
    e.preventDefault();
    const newCommentData = {
      commentsContent: newComment,
      commentsuserId: 12,
      commentsLikerecieved: 0, // initial value
      commentsCreationdate: new Date().toISOString(),
    };
    currGalleryPost.comment.push(newCommentData);
    fetch("http://localhost:3456/api/gallery/" + id,{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(currGalleryPost)
        }).then(() => {
          console.log(currGalleryPost);
          //window.location.reload(false);
        })
    setNewComment("");
    //setCurrPost((p) => {
    //  const prev = { ...p };
    //  prev.comment = [newCommentData].concat(prev.comment);
    //  return prev;
    //});
  };

  const handleDeleteComment = (i) => {
    //setCurrPost((p) => {
    //  const prev = { ...p };
    //  prev.comment.splice(i, 1);
    //  return prev;
    //});
  };

  return (
    <div
      className="container d-flex justify-content-center mt-4"
      style={{ overflow: "hidden" }}
    >
    { isPending && <div> Loading... </div> }
    { error && <div> {error} </div>}
    {currGalleryPost &&
      <div>
        <div className="row">
          <div className="col-sm-8 vh-100">
            <img
              src={currGalleryPost.media}
              className="img-fluid"
              style={{
                maxHeight: "700px",
                objectFit: "contain",
                width: "100%",
                objectPosition: "center",
              }}
              alt={currGalleryPost.content}
            />
          </div>
          <div className="col-sm-4">
            <div
              //   style={{ minHeight: "600px" }}
              className="d-flex align-items-center"
            >
              <div>
                <h3>
                  <small className="text-muted">
                    {currGalleryPost.content}
                  </small>
                </h3>
              </div>
            </div>

            <div>
              <div className="headings d-flex justify-content-between align-items-center mb-3"></div>
              <h2>Comments ({currGalleryPost.comment.length})</h2>

              <div style={{ overflowY: "scroll", maxHeight: "500px" }}>
                <form onSubmit={handleNewComment}>
                  <div class="mb-3">
                    <label class="form-label">Comment:</label>
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      class="form-control"
                    />
                  </div>

                  <button type="submit" class="btn btn-secondary">
                    Submit
                  </button>
                </form>
                {currGalleryPost.comment?.map((comment, i) => (
                  <Comment
                    key={new Date().getMilliseconds() * Math.random()}
                    comment={comment}
                    postId={currGalleryPost._id}
                    handleDelete={handleDeleteComment}
                    commentId={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </div>
  );
}
