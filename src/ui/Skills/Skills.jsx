import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useUserData from "../../hook/useUserData";
import filterEnabled from "../../util/filterEnabled";
import sortBySequence from "../../util/sortBySequence";
import SkillCard from "./SkillCard/SkillCard";

const Skills = () => {
  const { data: userData } = useUserData();

  const {
    user: { skills },
  } = userData;

  const skillsData = filterEnabled(skills);
  const sortedSkills = sortBySequence(skillsData);

  return (
    <section className="max-w-7xl mx-auto ">
      <SectionTitle title={"Skills"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center space-x-3 space-y-3 mx-auto w-full">
        {sortedSkills.map((skill) => (
          <SkillCard
            key={skill._id}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
