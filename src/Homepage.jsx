import React, { useEffect } from "react";
import "./Homepage.scss";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";

const Homepage = () => {
  function reloadOnRouteChange() {
    const navigate = useNavigate();

    useEffect(() => {
      const unlisten = navigate.listen(() => {
        window.location.reload();
      });
      return () => {
        unlisten();
      };
    }, [navigate]);
  }

  return (
    <>
      <section id="backgroundHome"></section>

      <main className="mainContainer">
        <div className="mainContainer__content animate__animated animate__fadeIn">
          <span>So, you want to travel to</span>
          <h1 className="mainContainer__title">Space</h1>
          <p className="mainContainer__description">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link
          to="/destination"
          className="mainContainer__exploreBtn animate__animated animate__fadeIn"
          onClick={reloadOnRouteChange}
        >
          Explore
        </Link>
      </main>
    </>
  );
};

export default Homepage;
