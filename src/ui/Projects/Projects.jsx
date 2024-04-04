import SectionTitle from "../../components/SectionTitle/SectionTitle";
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
    <section className="max-w-7xl w-full mx-auto ">
      <SectionTitle title={"Projects"} />
      <div className="grid grid-cols-1  space-y-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-center h-screen overflow-y-auto scroll-smooth">
        {sortedProject.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
