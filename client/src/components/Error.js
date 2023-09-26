import React from "react";
import { Link } from "react-router-dom";
import error404 from "../images/error404.jpg";
import "normalize.css";
import Wrapper from "../wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img className="error" src={error404} alt="not found" />
        <h3>Ohh! Page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
