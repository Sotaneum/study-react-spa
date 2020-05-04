import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
}

/*
v5 이전
<Route path="/about" component={About} />
<Route path="/info" component={About} />

v5 이후
<Route path={["/about", "/info"]} component={About} />
 */

export default App;
