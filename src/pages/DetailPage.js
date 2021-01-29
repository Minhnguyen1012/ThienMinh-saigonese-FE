import React, { useEffect } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import api from "../apiService";
import PublicNavbar from "../components/PublicNavbar";
import foodActions from "../redux/actions/food.actions";
import { routeActions } from "../redux/actions/route.actions";

const DetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector((state) => state.food.loading);
  const food = useSelector((state) => state.food.selectedfood);

  useEffect(() => {
    dispatch(foodActions.foodsRequest());
    console.log("adasfasd", params.id);
    console.log(params);
    if (params?.id) {
      dispatch(foodActions.getSingleFood(params.id));
    }
  }, [dispatch, params]);

  return (
    <>
      {loading ? (
        <h1>.</h1>
      ) : (
        <>
          <PublicNavbar />

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
                    // width: "19.1rem",
                    height: "100%",
                    margin: "18px",
                    // border: "0.75px solid silver",
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
                    >
                      {food?.info}
                    </h5>
                    <div class="body">
                      <a className="aa" href="#">
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
    </>
  );

  // return (
  //   <div>
  //     {loading ? (
  //       <h1> loadding...</h1>
  //     ) : (
  //       <>
  //         <PublicNavbar />
  //         asdsaa

  //         <h1>thisshsdsafp</h1>
  //       </>
  //     )}
  //   </div>
  // );
};

export default DetailPage;
