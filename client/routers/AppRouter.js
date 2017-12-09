import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedPage from "../pages/FeedPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";

export const history = createHistory();

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" component={FeedPage} exact={true} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
