import React, { useState, useRef } from "react";
import "./Crew.scss";
import imgDouglas from "./assets/crew/image-douglas-hurley.png";
import imgMark from "./assets/crew/image-mark-shuttleworth.png";
import imgVictor from "./assets/crew/image-victor-glover.png";
import imgAnousheh from "./assets/crew/image-anousheh-ansari.png";
import "animate.css";

const Crew = () => {
  const [crewMember1, setCrewMember1] = useState("active-crew");
  const [crewMember2, setCrewMember2] = useState("");
  const [crewMember3, setCrewMember3] = useState("");
  const [crewMember4, setCrewMember4] = useState("");

  const crewMemberNum = useRef(null);
  const crewMemberJob = useRef(null);
  const crewMemberName = useRef(null);
  const crewMemberRole = useRef(null);
  const crewMemberImg = useRef(null);

  function selectCrewMember1() {
    setCrewMember1("active-crew");

    setCrewMember2("");
    setCrewMember3("");
    setCrewMember4("");

    crewMemberNum.current.innerText = "01";
    crewMemberJob.current.innerText = "COMMANDER";
    crewMemberName.current.innerText = "DOUGLAS HURLEY";
    crewMemberRole.current.innerText =
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    crewMemberImg.current.src = imgDouglas;

    animateContent();
  }

  function selectCrewMember2() {
    setCrewMember2("active-crew");

    setCrewMember1("");
    setCrewMember3("");
    setCrewMember4("");

    crewMemberNum.current.innerText = "02";
    crewMemberJob.current.innerText = "MISSION SPECIALIST";
    crewMemberName.current.innerText = "MARK SHUTTLEWORTH";
    crewMemberRole.current.innerText =
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    crewMemberImg.current.src = imgMark;

    animateContent();
  }

  function selectCrewMember3() {
    setCrewMember3("active-crew");

    setCrewMember1("");
    setCrewMember2("");
    setCrewMember4("");

    crewMemberNum.current.innerText = "03";
    crewMemberJob.current.innerText = "PILOT";
    crewMemberName.current.innerText = "VICTOR GLOVER";
    crewMemberRole.current.innerText =
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    crewMemberImg.current.src = imgVictor;

    animateContent();
  }

  function selectCrewMember4() {
    setCrewMember4("active-crew");

    setCrewMember1("");
    setCrewMember2("");
    setCrewMember3("");

    crewMemberNum.current.innerText = "04";
    crewMemberJob.current.innerText = "FLIGHT ENGINEER";
    crewMemberName.current.innerText = "ANOUSHEH ANSARI";
    crewMemberRole.current.innerText =
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    crewMemberImg.current.src = imgAnousheh;

    animateContent();
  }

  function animateContent() {
    crewMemberImg.current.className = "";
    crewMemberNum.current.className = "mainContainerCrew__crewMemberNum";
    crewMemberJob.current.className = "mainContainerCrew__position";
    crewMemberName.current.className = "mainContainerCrew__name";
    crewMemberRole.current.className = "mainContainerCrew__description";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        crewMemberImg.current.classList.add("animation");
        crewMemberNum.current.classList.add("animation");
        crewMemberJob.current.classList.add("animation");
        crewMemberName.current.classList.add("animation");
        crewMemberRole.current.classList.add("animation");
      });
    });
  }

  return (
    <>
      <section id="backgroundCrew"></section>
      <img
        ref={crewMemberImg}
        src={imgDouglas}
        id="crewMemberImg"
        className="animate__animated animate__bounceInUp"
        alt="Crew Member Image"
      />

      <main className="mainContainerCrew">
        <h2 className="animate__animated animate__fadeIn">
          <span
            ref={crewMemberNum}
            className="mainContainerCrew__crewMemberNum"
          >
            01
          </span>{" "}
          Meet Your Crew
        </h2>

        <div className="mainContainerCrew__wrapper">
          <div className="mainContainerCrew__content">
            <span
              ref={crewMemberJob}
              className="mainContainerCrew__position animate__animated animate__bounceInDown"
            >
              Commander
            </span>
            <h3
              ref={crewMemberName}
              className="mainContainerCrew__name animate__animated animate__bounceInDown"
            >
              Douglas Hurley
            </h3>
            <p
              ref={crewMemberRole}
              className="mainContainerCrew__description animate__animated animate__bounceInDown"
            >
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
            <div className="mainContainerCrew__slider animate__animated animate__fadeIn">
              <div className={crewMember1} onClick={selectCrewMember1}></div>
              <div className={crewMember2} onClick={selectCrewMember2}></div>
              <div className={crewMember3} onClick={selectCrewMember3}></div>
              <div className={crewMember4} onClick={selectCrewMember4}></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Crew;
