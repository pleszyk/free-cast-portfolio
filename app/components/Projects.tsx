"use client";

import { useState } from "react";
import Card from "./Card";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Project } from "@/types/Project";

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  console.log(projects);

  return (
    <div className="p-4 mx-6 flex border bg-gray-800 border-gray-700 rounded-lg flex-col items-center space-y-4">
      <div className="overflow-hidden w-full">
        <div className="items-center flex space-x-4">
          {projects.length > 2 ? (
            <>
              <Card
                {...projects[
                  (currentIndex - 1 + projects.length) % projects.length
                ]}
              />
              <Card {...projects[currentIndex]} size="lg" />
              <Card {...projects[(currentIndex + 1) % projects.length]} />
            </>
          ) : (
            <>
              <Card {...projects[currentIndex]} size="lg" />
            </>
          )}
          {projects.length < 1 && (
            <></>
          )}
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={prevProject}
          className="px-8 py-2 bg-indigo-700 border-2 border-indigo-600 text-white rounded hover:bg-indigo-600"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextProject}
          className="px-8 py-2 bg-indigo-700 border-2 border-indigo-600 text-white rounded hover:bg-indigo-600"
        >
          <FaArrowRight className="" />
        </button>
      </div>
    </div>
  );
}

export default Projects;
