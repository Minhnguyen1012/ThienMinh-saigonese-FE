// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import PayNavigation from "./pages/PayNavigation";
import AlertMsg from "./components/Alert";
import PublicNavbar from "./components/PublicNavbar";
import Footer from "./components/Footer";
import StoryPage from "./pages/StoryPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import authActions from "./redux/actions/auth.actions";
import VietnameseCuisine from "./pages/VietnameseCuisine";
import MessengerCustomerChat from "react-messenger-customer-chat";
import AddOrEditProduct from "./pages/Admin/AddOrEditProduct";
import Navs from "./components/Navs";
import PrivateRoute from "./routes/PrivateRoute";
import AdminLayout from "./routes/AdminLayout";
const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);

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
      {isLoading === null ? (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
          <img src="https://cdn.dribbble.com/users/2520294/screenshots/7209485/media/cf226d98a06282e9cabf5c2f8f6d547f.gif" />
        </div>
      ) : (
        <>
          <AlertMsg />

          <Router>
            <PublicNavbar />
            <Switch>
              <Route exact path="/foods/:id" component={DetailPage} />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/pay-method" component={PayNavigation} />
              <Route exact path="/story" component={StoryPage} />
              <PrivateRoute path="/admin" component={AdminLayout} />
              <Route exact path="/navs" component={Navs} />
              <Route
                exact
                path="/category/:category"
                component={VietnameseCuisine}
              />
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
