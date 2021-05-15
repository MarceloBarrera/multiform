import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Home page</h1>
    <p>Home page just for fun.</p>
    <Link to="multi-steps" className="btn btn-primary btn-lg">
      Go to the real fun
    </Link>
  </div>
);

export default HomePage;
