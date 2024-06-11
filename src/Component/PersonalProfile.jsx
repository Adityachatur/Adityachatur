import React from "react";
import personalimg from "../Asset/personl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Links from "./Links";
import { Link } from "react-router-dom";

const PersonalProfile = () => {
  return (
    <>
      <div className="h-auto" style={{ background: "#141619" }}>
        <div className="w-full lg:h-80 h-36 mainbg rounded-t-[40px] flex items-end justify-center">
          <img
            src={personalimg}
            alt="Personal"
            className="rounded-3xl lg:h-56 lg:w-56 h-36 w-36 mb-[-60px]"
          />
        </div>
        <div
          className="lg:w-6/12 md:w-8/12 md:mx-auto  lg:mx-auto mx-2 bg-gray lg:mt-24 mt-20 text-center text-white h-auto"
          style={{ background: "#141619" }}
        >
          <div>
            <h1 className="text-3xl font-semibold mb-2 font-noto-serif uppercase tracking-wide text-white">Aditya Chatur</h1>
            <h2 className="space-x-2 lg:text-xl text-lg font-normal text-gray-600">
              <FontAwesomeIcon icon={faLocationDot} /> <span>Pune</span>
            </h2>
            <p className="lg:text-3xl  text-2xl mt-5 font-semibold tracking-widest font-chakra">
              Full Stack Web Developer
            </p>
          </div>
          <div className="flex space-x-4 justify-center mt-5 ">
            <Link to={"https://www.linkedin.com/in/adityachatur/"}>
              {" "}
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="icon hover:bg-blue-800 transition-all duration-300 ease-in"
              />
            </Link>
            <Link to={"https://github.com/Adityachatur"}>
              <FontAwesomeIcon
                icon={faGithub}
                className="icon  hover:bg-gray-950 transition-all duration-300 ease-in"
              />
            </Link>
            {/* <Link to={}>
            <div
              className="items-center justify-center flex shadow rounded-full cursor-pointer hover:bg-black transition-all duration-300 ease-in "
              style={{ width: "50px" }}
            >
              <img src={vercellogo} alt="" className="w-8 h-8" />
            </div>
          </Link> */}
          </div>
          <Links />
          <div className=" space-x-5  h-20 items-center flex justify-center">
            <a href="tel:9552314201">
              <FontAwesomeIcon
                icon={faPhone}
                className="contact hover:text-green-800 hover:bg-white transition-all ease-in-out duration-500 cursor-pointer"
              />
            </a>
            <a href="mailto:adityachatur7996@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="contact hover:bg-black transition-all ease-in-out duration-500 cursor-pointer "
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalProfile;
