import useUserData from "../../hook/useUserData";
import filterEnabled from "../../util/filterEnabled";
import sortBySequence from "../../util/sortBySequence";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  const { data: userData } = useUserData();

  const {
    user: { projects },
  } = userData;

  const projectData = filterEnabled(projects);
  const sortedProject = sortBySequence(projectData);

  return (
    <section className="grid grid-cols-1 max-w-7xl w-full mx-auto space-y-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
      {sortedProject.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
        />
      ))}
    </section>
  );
};

export default Projects;
