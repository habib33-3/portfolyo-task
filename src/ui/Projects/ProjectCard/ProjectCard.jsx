import PropTypes from "prop-types";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    title,
    image: { url: img },
  } = project;

  return (
    <div className="group w-64 h-48 relative mx-auto">
      <img
        src={img}
        alt={title}
        className="w-full h-full mx-auto object-fill object-center transition-opacity duration-300 group-hover:opacity-50 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex flex-col items-center justify-center space-y-5">
          <h3 className="text-gray-700 font-bold text-3xl text-center">{title}</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3 py-2 rounded-md bg-gradient-to-r from-amber-500 to-amber-700 w-max text-stone-100 text-md font-medium transition duration-300 ease-in-out overflow-hidden relative hover:from-blue-500 hover:to-blue-700 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-l from-amber-700 to-amber-500 transition-transform duration-300 ease-in-out transform translate-x-full" />
            {" "}View Details
          </button>
        </span>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center bg-gray-800 bg-opacity-80 w-full h-full z-50">
          <ProjectDetails
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            project={project}
          />
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
