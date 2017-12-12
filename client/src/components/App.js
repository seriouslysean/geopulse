import React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

export const App = ({ route }) => {
  return (
    <div className="app">
      <Helmet>
        <title>Geopulse</title>
        <meta property="og:title" content="Geopulse" />
      </Helmet>

      <Header />

      {renderRoutes(route.routes)}

      <Footer />
    </div>
  );
};

export default {
  component: App
};
