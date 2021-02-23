// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import AlertMsg from "./components/Alert";
import PublicNavbar from "./components/PublicNavbar";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import authActions from "./redux/actions/auth.actions";
import MessengerCustomerChat from "react-messenger-customer-chat";
import PrivateRoute from "./routes/PrivateRoute";
import AdminLayout from "./routes/AdminLayout";
import PublicLayout from "./routes/PublicLayout";
const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken !== "undefined") {
      dispatch(authActions.getCurrentUser(accessToken));
    } else {
      dispatch(authActions.logout());
    }
  }, [dispatch]);

  return (
    <div className="App">
      {isAuthenticated === null ? (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
          <img src="https://cdn.dribbble.com/users/2520294/screenshots/7209485/media/cf226d98a06282e9cabf5c2f8f6d547f.gif" />
        </div>
      ) : (
        <>
          <AlertMsg />

          <Router>
            <PublicNavbar />
            <Switch>
              <PrivateRoute path="/admin" component={AdminLayout} />
              <Route path="/" component={PublicLayout} />
            </Switch>
          </Router>
          <MessengerCustomerChat
            pageId="103840071695085"
            appId="150211800209794"
          />

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
