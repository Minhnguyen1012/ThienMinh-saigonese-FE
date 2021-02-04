import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
// import ProfilePage from "../pages/Admin/ProfilePage";
// import SideMenu from "../pages/Admin/SideMenu";

import AddOrEditProduct from "../pages/Admin/AddOrEditProduct";
import PublicNavbar from "../components/PublicNavbar";
import AlertMsg from "../components/Alert";

const AdminLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid>
        <Row>
          {/* <SideMenu /> */}
          <Col md={9} lg={10}>
            <AlertMsg />
            <Switch>
              {/* <Route exact path="/admin/profile" component={ProfilePage} /> */}

              <Route
                exact
                path="/admin/food/add"
                component={AddOrEditProduct}
              />

              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLayout;
