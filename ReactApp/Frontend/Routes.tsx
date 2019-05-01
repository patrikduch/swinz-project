//-----------------------------------------------------------------------
// <copyright file="Routes.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// React router routing setup
//-----------------------------------------------------------------------
import * as React from "react";
import HomeComp from "./pages/Home-Page";
import CustomerPage from "./pages/customers/Customer-Page";
import OrderPage from "./pages/orders/Order-Page";
import ProductPage from "./pages/products/Product-Page";
import StatsPage from "./pages/stats/Stats-Page";
import CompanyStatsPage from "./pages/stats/Company-Stats-Page";
import CustomerStatsPage from "./pages/stats/Customer-Stats-Page";
import LoginPage from "./redux/containers/login/Login-Page-Container";

import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import HeaderComp from "./components/layout/Header";
import FooterComp from "./components/layout/Footer";
import Navbar from "./components/common/navigation/NavBar";
import Navigation from "./components/common/navigation/Navigation";
import AdminAuth from "./hoc/authentication/Admin-Auth";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <AdminAuth>
        <HeaderComp>
          <Navigation />
        </HeaderComp>
        <Route path="/" exact component={HomeComp} />
        <Route path="/customers" exact component={CustomerPage} />
        <Route path="/orders" exact component={OrderPage} />
        <Route path="/products" exact component={ProductPage} />
        <Route path="/stats" exact component={StatsPage} />
        <Route path="/stats/customers" exact component={CustomerStatsPage} />
        <Route path="/stats/company" exact component={CompanyStatsPage} />
        <FooterComp />
      </AdminAuth>
    </Switch>
  );
};

export default hot(module)(Routes);
