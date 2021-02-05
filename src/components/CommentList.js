import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import HoverRating from "./HoverRating";
// import ReactionMaterial from "./ReactionMaterial";

const useStyles = makeStyles((theme) => ({
  comment: {
    margin: theme.spacing(1),
  },
}));

const CommentList = ({ handleEmojiClick, loading }) => {
  const reviews = useSelector(
    (state) => state.theReviews.selectedProject.reviews
  );
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      {reviews?.length > 0 && (
        <ul className="list-unstyled">
          {reviews.map((review) => (
            <ReviewContent
              key={review._id}
              review={review}
              handleEmojiClick={handleEmojiClick}
              loading={loading}
            />
          ))}
        </ul>
      )}
    </>
  );
};

const ReviewContent = ({ review, handleEmojiClick, loading }) => {
  const classes = useStyles();
  // console.log("review", review);
  return (
    <div className={classes.comment}>
      <hr />
      <Nav
        className="d-flex align-items-center "
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
      >
        <Avatar alt="avatar" src={review?.user?.avatarUrl} />
        <span className="comment_author ml-2">{review?.user?.name} </span>
      </Nav>
      <span className="comment_body">{review?.content}</span>
      <br />
      <HoverRating />
      <span className="comment_date">
        <Moment fromNow>{review?.createdAt}</Moment>
      </span>
    </div>
  );
};

export default CommentList;
