import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PublicNavbar from "../components/PublicNavbar";
import RegisterPage from "../pages/RegisterPage";

import NotFoundPage from "../pages/NotFoundPage";
import StoryPage from "../pages/StoryPage";
import PayNavigation from "../pages/PayNavigation";
import VietnameseCuisine from "../pages/VietnameseCuisine";
import Navs from "../components/Navs";
import MainPage from "../pages/MainPage";
import Test from "../Test";

const PublicLayout = () => {
  return (
    <>
      {/* <PublicNavbar /> */}
      <>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/foods/:id" component={DetailPage} />
          <Route exact path="/navs" component={Navs} />
          <Route exact path="/menu" component={MainPage} />
          <Route exact path="/pay-method" component={PayNavigation} />
          <Route exact path="/story" component={StoryPage} />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/category/:category"
            component={VietnameseCuisine}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </>
  );
};
export default PublicLayout;
