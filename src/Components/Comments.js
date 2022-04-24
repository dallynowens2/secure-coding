import React, { useEffect, useState } from "react";
import coolPicture from "./fantasy.jpg";
import Comment from "../models/Comment";
import wireGuardService from "../services/WireGuardService";
import CommentList from "./CommentList";

const Comments = ({ user }) => {
  const [comment, setcomment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    wireGuardService.getComments().then((c) => setComments(c));
  }, []);


  const commentChangeHandler = (e) => {
    setcomment(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (comment.length > 1) {
      comment.replaceAll('<', ' ');
      comment.replaceAll('>', ' ');
      if (user) {
        const newComment = new Comment(comment, user.name);
        wireGuardService.postComments(newComment);
      } else {
        const newComment = new Comment(comment, "");
        wireGuardService.postComments(newComment);
      }
    }
  };

  return (
    <div>
      <h1>Look at this cool picture</h1>
      <h3>comment on it if you would like</h3>
      <img src={coolPicture} alt="cool picture" width="640" height="362" />
      <form onSubmit={submitHandler}>
        <label>Comment here</label>
        <input
          type="text"
          style={{ margin: "10px", width: "300px" }}
          onChange={commentChangeHandler}
          maxLength="500"
        ></input>
        <button type="submit">Post</button>
      </form>
      {
        comments.length == 0 ? <div>No Comments </div> : <CommentList comments={comments}/>
      }
    </div>
  );
};

export default Comments;
