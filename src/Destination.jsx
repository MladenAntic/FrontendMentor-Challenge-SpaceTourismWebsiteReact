import React, { useState, useRef } from "react";
import "./Destination.scss";
import imageMoon from "./assets/destination/image-moon.png";
import imageMars from "./assets/destination/image-mars.png";
import imageEuropa from "./assets/destination/image-europa.png";
import imageTitan from "./assets/destination/image-titan.png";
import "animate.css";

const Destination = () => {
  const [moon, setMoon] = useState("active-destination");
  const [mars, setMars] = useState("");
  const [europa, setEuropa] = useState("");
  const [titan, setTitan] = useState("");

  const destinationNumber = useRef(null);
  const destinationImage = useRef(null);
  const destinationTitle = useRef(null);
  const destinationDescription = useRef(null);
  const destinationDistance = useRef(null);
  const destinationTravelTime = useRef(null);

  function selectMoon() {
    setMoon("active-destination");

    setMars("");
    setEuropa("");
    setTitan("");

    destinationNumber.current.innerText = "01";
    destinationImage.current.src = imageMoon;
    destinationTitle.current.innerText = "Moon";
    destinationDescription.current.innerText =
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    destinationDistance.current.innerText = "384,400 KM";
    destinationTravelTime.current.innerText = "3 DAYS";

    animateContent();
  }

  function selectMars() {
    setMars("active-destination");

    setMoon("");
    setEuropa("");
    setTitan("");

    destinationNumber.current.innerText = "02";
    destinationImage.current.src = imageMars;
    destinationTitle.current.innerText = "Mars";
    destinationDescription.current.innerText =
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    destinationDistance.current.innerText = "225 MIL. KM";
    destinationTravelTime.current.innerText = "9 MONTHS";

    animateContent();
  }

  function selectEuropa() {
    setEuropa("active-destination");

    setMars("");
    setMoon("");
    setTitan("");

    destinationNumber.current.innerText = "03";
    destinationImage.current.src = imageEuropa;
    destinationTitle.current.innerText = "Europa";
    destinationDescription.current.innerText =
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    destinationDistance.current.innerText = "628 MIL. KM";
    destinationTravelTime.current.innerText = "3 YEARS";

    animateContent();
  }

  function selectTitan() {
    setTitan("active-destination");

    setMars("");
    setEuropa("");
    setMoon("");

    destinationNumber.current.innerText = "04";
    destinationImage.current.src = imageTitan;
    destinationTitle.current.innerText = "Titan";
    destinationDescription.current.innerText =
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    destinationDistance.current.innerText = "1.6 BIL. KM";
    destinationTravelTime.current.innerText = "7 YEARS";

    animateContent();
  }

  function animateContent() {
    destinationNumber.current.className =
      "mainContainerDest__destinationNumber";
    destinationImage.current.className = "";
    destinationTitle.current.className = "";
    destinationDescription.current.className = "";
    destinationDistance.current.className = "";
    destinationTravelTime.current.className = "";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        destinationNumber.current.classList.add("animation");
        destinationImage.current.classList.add("animation");
        destinationTitle.current.classList.add("animation");
        destinationDescription.current.classList.add("animation");
        destinationDistance.current.classList.add("animation");
        destinationTravelTime.current.classList.add("animation");
      });
    });
  }

  return (
    <>
      <section id="backgroundDest"></section>

      <main className="mainContainerDest">
        <h2 className="animate__animated animate__fadeIn">
          <span
            ref={destinationNumber}
            className="mainContainerDest__destinationNumber"
          >
            01
          </span>{" "}
          Pick Your Destination
        </h2>
        <div className="mainContainerDest__wrapper">
          <img
            ref={destinationImage}
            src={imageMoon}
            className="animate__animated animate__fadeInDown"
            alt="Image Moon"
          />

          <div className="mainContainerDest__content animate__animated animate__fadeInDown">
            <ul className="mainContainerDest__destinations">
              <li className={moon} onClick={selectMoon}>
                Moon
                <span className="mainContainerDest__highlightDestination"></span>
              </li>
              <li className={mars} onClick={selectMars}>
                Mars
                <span className="mainContainerDest__highlightDestination"></span>
              </li>
              <li className={europa} onClick={selectEuropa}>
                Europa
                <span className="mainContainerDest__highlightDestination"></span>
              </li>
              <li className={titan} onClick={selectTitan}>
                Titan
                <span className="mainContainerDest__highlightDestination"></span>
              </li>
            </ul>
            <h3 ref={destinationTitle}>Moon</h3>
            <p ref={destinationDescription}>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <div className="mainContainerDest__divider"></div>
            <div className="mainContainerDest__info">
              <div className="mainContainerDest__distance">
                <h5>Avg. Distance</h5>
                <span ref={destinationDistance}>384,400 Km</span>
              </div>

              <div className="mainContainerDest__time">
                <h5>Est. Travel Time</h5>
                <span ref={destinationTravelTime}>3 Days</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Destination;
