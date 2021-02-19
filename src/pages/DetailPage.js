import { IconButton, makeStyles, Button, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import api from "../apiService";

import { Chat, Delete, Edit } from "@material-ui/icons";
import CommentList from "../components/CommentList";
import HoverRating from "../components/HoverRating";
import PublicNavbar from "../components/PublicNavbar";
import ReviewForm from "../components/ReviewForm";
import foodActions from "../redux/actions/food.actions";
import reviewActions from "../redux/actions/review.actions";
import { Container } from "react-bootstrap";
// import { routeActions } from "../redux/actions/route.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    padding: "4rem",
  },
  textBox: {
    // height: "18vh",
    width: "100%",
    backgroundColor: "#fff",
    textAlign: "left",
    alignContent: "center",
    border: "0.5px solid grey",
    borderRadius: "10px",
    marginBottom: "5vh",
    padding: theme.spacing(2),
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    width: "100%",
  },
}));

const DetailPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();
  const Loading = useSelector((state) => state.food.loading);
  const history = useHistory();
  const food = useSelector((state) => state.food.selectedfood);
  const menuId = params.id;
  console.log(menuId);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [showComments, setShowComments] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const submitReviewLoading = useSelector(
    (state) => state.theReviews.submitReviewLoading
  );
  const reviewId = params.reviewId;
  const project = useSelector((state) => state.theReviews.selectedProject);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    console.log(reviewText, "hi");
  }, [reviewText]);

  const handleShowComments = () => {
    if (showComments === false) {
      setShowComments(true);
    } else {
      setShowComments(false);
    }
  };
  const handleShowHistory = () => {
    if (showHistory === false) {
      setShowHistory(true);
    } else {
      setShowHistory(false);
    }
  };
  const handleInputChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    dispatch(reviewActions.createReview(params.id, reviewText));
    dispatch(reviewActions.getReviews(menuId));
    setReviewText("");
  };

  const handleDelete = () => {
    dispatch(reviewActions.deleteReview(menuId));
    history.goBack();
  };
  const handleEmojiClick = (targetType, targetId, emoji) => {
    dispatch(reviewActions.postEmoji(targetType, targetId, emoji));
  };

  useEffect(() => {
    dispatch(foodActions.foodsRequest());

    console.log(params);
    if (params?.id) {
      dispatch(foodActions.getSingleFood(params.id));
    }
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(reviewActions.getReviews(menuId));
  }, [dispatch, menuId]);

  return (
    <>
      {Loading ? (
        <h1>.</h1>
      ) : (
        <>
          <PublicNavbar />
          <div id="fb-root"></div>
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v9.0&appId=150211800209794&autoLogAppEvents=1"
            nonce="MDf2duU3"
          ></script>
          <div
            style={{
              paddingTop: "72px",

              backgroundImage:
                "url(https://i.pinimg.com/564x/f8/b3/db/f8b3dbc425757f702d8f15fa7756b901.jpg)",
              backgroundRepeat: true,
              backgroundSize: "70vw, 70vh",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "40rem" }}
            >
              <div
                style={{
                  width: "63rem",
                  border: "1px solid white",
                  backgroundColor: "white",
                  margin: "50px 0",
                }}
              >
                <div
                  className="detailCard flex-wrap flex-direction-row "
                  style={{
                    paddingLeft: "30px",
                    height: "100%",
                    margin: "18px",
                  }}
                >
                  <img
                    className="detailCard "
                    style={{
                      width: "24rem",
                      height: "27rem",
                    }}
                    src={food?.images}
                    alt={food?.name}
                  />
                  <div className="text-name">
                    <div
                      style={{ fontSize: "35px" }}
                      className="d-flex text-nowrap"
                    >
                      <strong>{food?.name}</strong>
                    </div>
                    <h5 className="text-menu " style={{ fontSize: "25px" }}>
                      {food?.price * 1000} VNĐ
                    </h5>
                    <h5
                      className="text-menu "
                      style={{
                        fontSize: "21px",
                        display: " flex",
                        flexDirection: "column",
                        justifyContent: " center",
                        textAlign: " center",
                        alignSelf: " center",
                      }}
                    ></h5>

                    <div class="body">
                      <a className="aa" href="/menu">
                        <div className="text">
                          <span className="spans">Menu</span>
                        </div>
                        <div className="liquid"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* TODO make a btn to show more text */}
      <Container className="mt-5">
        <h1>History</h1>
        <hr />
        <h4>{food?.name}</h4>
        {/* <div>{food?.info}</div> */}
        {food?.info?.length < 90
          ? food?.info
          : food?.info.slice(0, 250) + " ..."}
        <Link onClick={handleShowHistory}>Xem Them</Link>

        <p style={{ marginTop: "15px", float: "right", color: "grey" }}>
          Source: Wikipedia
        </p>
      </Container>
      <Container className="mt-5">
        <h1>Comment and FeedBack</h1>
        {isAuthenticated && (
          <>
            <Divider />
            <div className={classes.btnGroup}>
              <hr />
              <IconButton aria-label="comment" onClick={handleShowComments}>
                <Chat />
              </IconButton>
              <IconButton aria-label="delete" onClick={handleDelete}>
                <Delete />
              </IconButton>
            </div>
          </>
        )}
        {/* <div
        class="fb-comments"
        data-href="https://saigonese-final.netlify.app"
        data-width=""
        data-numposts="5"
      ></div> */}

        <div className={classes.textBox}>
          <h5 id="commentsSection" className="text-left">
            Comments:
          </h5>
          {/* TODO */}
          <HoverRating />
          {isAuthenticated && (
            <ReviewForm
              reviewText={reviewText}
              handleInputChange={handleInputChange}
              handleSubmitReview={handleSubmitReview}
              loading={submitReviewLoading}
            />
          )}
          {project?.reviews && (
            <>
              {/* {console.log("object", project.reviews)} */}
              <CommentList
                handleEmojiClick={handleEmojiClick}
                loading={submitReviewLoading}
              />
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default DetailPage;
