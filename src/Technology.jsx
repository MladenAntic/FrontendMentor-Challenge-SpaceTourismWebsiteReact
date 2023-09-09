import React, { useRef, useState } from "react";
import "./Technology.scss";
import launchVehicleImgPortrait from "./assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportPortrait from "./assets/technology/image-spaceport-portrait.jpg";
import spaceCapsulePortrait from "./assets/technology/image-space-capsule-portrait.jpg";
import launchVehicleImgLandscape from "./assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "./assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleLandscape from "./assets/technology/image-space-capsule-landscape.jpg";
import "animate.css";

const Technology = () => {
  const [technology1, setTechnology1] = useState("active-technology");
  const [technology2, setTechnology2] = useState("");
  const [technology3, setTechnology3] = useState("");

  const technologyName = useRef(null);
  const technologyDescription = useRef(null);
  const technologyImage = useRef(null);

  function changeImage1() {
    window.innerWidth <= 992
      ? (technologyImage.current.src = launchVehicleImgLandscape)
      : (technologyImage.current.src = launchVehicleImgPortrait);
  }

  window.addEventListener("load", () => {
    changeImage1();
    window.addEventListener("resize", changeImage1);
  });

  function changeImage2() {
    window.innerWidth <= 992
      ? (technologyImage.current.src = spaceportLandscape)
      : (technologyImage.current.src = spaceportPortrait);
  }

  function changeImage3() {
    window.innerWidth <= 992
      ? (technologyImage.current.src = spaceCapsuleLandscape)
      : (technologyImage.current.src = spaceCapsulePortrait);
  }

  function selectTechnology1() {
    setTechnology1("active-technology");

    setTechnology2("");
    setTechnology3("");

    technologyName.current.innerText = "LAUNCH VEHICLE";
    technologyDescription.current.innerText =
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

    changeImage1();
    window.addEventListener("resize", changeImage1);

    animateContent();
  }

  function selectTechnology2() {
    setTechnology2("active-technology");

    setTechnology1("");
    setTechnology3("");

    technologyName.current.innerText = "SPACEPORT";
    technologyDescription.current.innerText =
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

    changeImage2();
    window.addEventListener("resize", changeImage2);

    animateContent();
  }

  function selectTechnology3() {
    setTechnology3("active-technology");

    setTechnology1("");
    setTechnology2("");

    technologyName.current.innerText = "SPACE CAPSULE";
    technologyDescription.current.innerText =
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

    changeImage3();
    window.addEventListener("resize", changeImage3);

    animateContent();
  }

  function animateContent() {
    technologyName.current.className = "mainContainerTech__name";
    technologyDescription.current.className = "mainContainerTech__description";
    technologyImage.current.className = "";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        technologyName.current.classList.add("animation");
        technologyDescription.current.classList.add("animation");
        technologyImage.current.classList.add("animation");
      });
    });
  }

  return (
    <>
      <section id="backgroundTech"></section>

      <main className="mainContainerTech">
        <h2 className="animate__animated animate__fadeIn">
          <span className="mainContainerTech__number">03</span> Space Launch 101
        </h2>

        <div className="mainContainerTech__wrapper">
          <div className="mainContainerTech__steps animate__animated animate__fadeIn">
            <div className={technology1} onClick={selectTechnology1}>
              1
            </div>
            <div className={technology2} onClick={selectTechnology2}>
              2
            </div>
            <div className={technology3} onClick={selectTechnology3}>
              3
            </div>
          </div>
          <div className="mainContainerTech__content animate__animated animate__bounceInDown">
            <span className="mainContainerTech__terminology">
              The Terminology...
            </span>
            <h3 ref={technologyName} className="mainContainerTech__name">
              Launch Vehicle
            </h3>
            <p
              ref={technologyDescription}
              className="mainContainerTech__description"
            >
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
          <img
            ref={technologyImage}
            id="technologyImg"
            className="animate__animated animate__bounceInUp"
            alt="Technology Image"
          />
        </div>
      </main>
    </>
  );
};

export default Technology;
