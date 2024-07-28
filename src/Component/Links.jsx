import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Vignaharta from "../Asset/eventmanagement.png";
import gymweb from "../Asset/gymwebpage.png";
import portfololio from "../Asset/profile.png";
import Filmyverse from "../Asset/Filmyverse.png";
import Construction from "../Asset/Construction.png";
import architecture from "../Asset/ruizarch-architecture.png";
const projects = [
  {
    id: 1,
    name: "Vignaharta Event Management System",
    path: "https://vighnahartaevents.vercel.app/",
    img: Vignaharta,
  },
  {
    id: 2,
    name: "Professional Portfolio",
    path: "https://sdcmultimedia.vercel.app/",
    img: portfololio,
  },
  {
    id: 3,
    name: "Gym Web Page Application",
    path: "https://gym-web-page-red.vercel.app/",
    img: gymweb,
  },
  {
    id: 4,
    name: "Ruizarch Architecture Website",
    path: "https://ruizarch-architecture-website.vercel.app/",
    img: architecture,
  },
  {
    id: 5,
    name: "Filmy Verse Movies Review System",
    path: "https://filmyverse-movie-review.vercel.app/",
    img: Filmyverse,
  },
  {
    id: 6,
    name: "Construction Web page ",
    path: "https://construction-web-aditya-project.vercel.app/",
    img: Construction,
  },
];

const ProjectCard = ({ name, path, img }) => (
  <Link to={path} className="block">
    <div className="lg:h-20 h-16 rounded-2xl flex justify-between lg:px-4 px-2 items-center shadow mb-5 Linkcard font-chakra">
      <img
        src={img}
        alt={`${name} logo`}
        className="h-16 w-24 p-1 rounded-2xl"
      />
      <h1 className="lg:text-xl md:text-lg text-[14px] font-normal ">{name}</h1>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="lg:text-2xl text-xl rightarrow p-4 rounded-full"
      />
    </div>
  </Link>
);

const Links = () => {
  return (
    <div className="lg:w-8/12 md:9/12 w-full  lg:mx-auto my-5">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          path={project.path}
          img={project.img}
        />
      ))}
    </div>
  );
};

export default Links;
