import * as React from "react";
import Home from "./home";
import Wild from "./wild";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../style/index.less";

interface IApp {
  name: string;
}

const App: React.FC<IApp> = ({ name }) => {
  return (
    <>
      <p className="favor">Hi! {name}, now choose where u are going ahead?</p>
      <Router>
        <Link to="/">Make Choice!</Link> <br />
        <Link to="/home">Home</Link> <br />
        <Link to="/wild">Wild</Link>
        <div>
          <Route
            path="/"
            exact
            render={() => {
              return <div>A Choice...</div>;
            }}
          />
          <Route path="/home" component={Home} />
          <Route path="/wild" component={Wild} />
        </div>
      </Router>
    </>
  );
};

export default App;
