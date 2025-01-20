import React from "react";
import { Carousel } from "./ui/AllUi"; 
import AppleCard from "./Apple"; 
const Projects = () => {
  return (
    <section id="projects">
      <div className="w-full h-full py-20">
        <h2 className="heading">
          Recently Cooked{" "}
          <span className="text-purple">Projects</span>
        </h2>
        <div className="flex flex-col justify-center pt-6">
          {/* Using the mapped AppleCard inside the Carousel */}
          <Carousel items={AppleCard} />
        </div>
      </div>
    </section>
  );
};
export default Projects;

