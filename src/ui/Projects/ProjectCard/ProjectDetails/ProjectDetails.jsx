import PropTypes from "prop-types";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const ProjectDetails = ({ setIsModalOpen, project }) => {
  const {
    title,
    image: { url: img },
    liveurl,
    githuburl,
    description,
    techStack,
  } = project;

  return (
    <div>
      <div className="relative lg:w-96 lg:h-96 w-80 h-80 p-4 bg-gray-700 rounded-lg ">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800"
        >
          <IoCloseOutline
            color="white"
            className="text-3xl font-extrabold"
          />
        </button>
        <div
          className="overflow-y-auto h-full"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#cbd5e0 #e2e8f0" }}
        >
          <div className="flex flex-col items-center justify-center px-6">
            <h1 className="text-textPrimary text-5xl font-bold mb-5 text- text-center ">
              {title}
            </h1>
            <div className="flex flex-col items-center justify-center ">
              <img
                src={img}
                alt={title}
              />
              <div className="flex items-center justify-between w-1/3 mx-auto text-3xl mt-4">
                <a href={liveurl}>
                  <FiGlobe color="blue" />
                </a>
                <a href={githuburl}>
                  <FaGithub />
                </a>
              </div>
            </div>
            <p className="text-textDescription text-justify text-lg font-medium break-normal">
              {description}
            </p>
          </div>
          <h1 className="text-textAccent text-3xl font-semibold text-center">
            Tech
          </h1>
          <ul className="grid grid-cols-3  items-center justify-center px-6 space-x-4 space-y-4 justify-items-center">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="px-3 py-2 bg-green-700 m-1 text-textPrimary text-center min-w-max "
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProjectDetails;
