import React, { useState, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import clickgadget from "/src/assets/images/ecom-gadget.png";
import ibgroup from "/src/assets/images/ecom-desktop.png";
import memento from "/src/assets/images/portfolio-v1-desktop.png";
import acc from "/src/assets/images/todos-square.png";
import weather from "/src/assets/images/weather-desktop.png";
import lander from "/src/assets/images/lander.png";
import pineal from "/src/assets/images/pineal.png";
import securesmartgoods from "/src/assets/images/securesmartgoods.png";
import shopify from "/src/assets/images/shopify.png";
import emarket from "/src/assets/images/emarketempire.png";
import books from "/src/assets/images/learnpathtowealth.png";
import ecom1 from "/src/assets/images/fashionforwardclothingline.com.png";
import ecom2 from "/src/assets/images/luxurioushairtreatmentonline.com.png";
import dash from "/src/assets/images/dashboard.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + (projects.length - prevVisible));
  };


  useEffect(() => {
    // Refresh ScrollTrigger after content changes
    ScrollTrigger.refresh();
  }, [visibleProjects]);


  const projects = [
    {
      link: "https://github.com/Tony-Man7/CRUD-admin-panel-with-input-data-product-to-mongoDB",
      img: dash,
      alt: "Admin Panel Dashboard",
      name: "Admin Panel Dashboard",
      type: "Frontend and Backend Development",
      year: "2024",
      tools: "Bootstrap • NodeJS • ExpressJS • MongoDB",
    },
    {
      link: "https://fashionforwardclothingline.com/",
      img: ecom1,
      alt: "Ecommerce Website",
      name: "Ecommerce Website",
      type: "Web Design • Frontend Development",
      year: "2024",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },
    {
      link: "https://luxurioushairtreatmentonline.com",
      img: ecom2,
      alt: "Ecommerce Website",
      name: "Ecommerce Website",
      type: "Web Design • Frontend Development • Backend Development",
      year: "2024",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },
    {
      link: "https://learnpathtowealth.com",
      img: books,
      alt: "Ecommerce Website",
      name: "Ecommerce Website",
      type: "Frontend Development • Backend Development",
      year: "2024",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },
    {
      link: "https://proudlibertystore.com/2023/powersaver/3",
      img: lander,
      alt: "Lander/ Sales Page",
      name: "Lander/ Sales Page",
      type: "Frontend Development • Backend Development",
      year: "2024",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },
    {
      link: "https://pinealabundanceboost.com/traffic/flow1/up1.php",
      img: pineal,
      alt: "Upsells Page",
      name: "Upsells Page",
      type: "Frontend Development",
      year: "2024",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },

    {
      link: "https://securesmartgoods.com/",
      img: securesmartgoods,
      alt: "Ecommerce Website",
      name: "Ecommerce Website",
      type: "Web Design • Frontend Development • Backend Development",
      year: "2024",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },
    {
      link: "https://m1o2o3n4b5e6a7m.com/wst_slmr/1?tid=tracking&subid=subid",
      img: shopify,
      alt: "Shopify Page",
      name: "Shopify Page",
      type: "Frontend Development",
      year: "2023",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },
    {
      link: "https://emarketempire.com/",
      img: emarket,
      alt: "Ecommerce Website",
      name: "Ecommerce Website",
      type: "Web Design • Frontend Development",
      year: "2023",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },
    {
      link: "https://clickcommercecrest.com/",
      img: clickgadget,
      alt: "Ecommerce Website",
      name: "Ecommerce Website",
      type: "Frontend Development",
      year: "2023",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },
    {
      link: "https://patriotzonetribe.com/index.php",
      img: ibgroup,
      alt: "Ecommerce Website",
      name: "Ecommerce Website",
      type: "Web Design • Frontend Development",
      year: "2023",
      tools: "HTML • CSS • JavaScript • PHP • Bootstrap",
    },
    {
      link: "https://portfolio-16c32.web.app/",
      img: memento,
      alt: "Portfolio v1",
      name: "Portfolio v.1",
      type: "Frontend Development",
      year: "2022",
      tools: "ReactJS • TailwindCSS",
    },
    {
      link: "https://github.com/Tony-Man7/todo-list/",
      img: acc,
      alt: "todos",
      name: "What todo's",
      type: "Frontend Development",
      year: "2022",
      tools: "HTML • CSS • JavaScript",
    },
    {
      link: "https://github.com/Tony-Man7/weather-app/",
      img: weather,
      alt: "Weathering with You",
      name: "Weathering with You",
      type: "Frontend Development • Backend Development",
      year: "2022",
      tools: "HTML • CSS • JavaScript",
    }
  ];

  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className="col-span-1 md:col-span-6">
            <Projects
              link={project.link}
              img={project.img}
              alt={project.alt}
              name={project.name}
              type={project.type}
              year={project.year}
              tools={project.tools}
            />
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="text-center mt-8">
          <button 
            onClick={showMoreProjects} 
            className="relative px-6 py-3 bg-gray-200 text-gray-800 rounded-full overflow-hidden group"
            style={{ color: 'rgb(14, 14, 12)', backgroundColor: 'rgb(209, 209, 199)' }}>
            <span className="relative">
              <span 
                className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"
              ></span>
              <span className="text-lg">See more</span>
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
