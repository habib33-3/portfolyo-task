import PropTypes from "prop-types";

const SkillCard = ({ skill }) => {
  const {
    name,
    image: { url: img },
    percentage,
  } = skill;

  return (
    <div className="relative w-24 group mx-auto">
      <div className="relative">
        <img
          src={img}
          alt={name}
          className="w-full h-auto group-hover:opacity-10 object-contain object-center"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-textAccent text-center">{percentage}%</span>
        </div>
      </div>
      <div className="absolute rounded bottom-0 w-full flex justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-textPrimary text-center">{name}</span>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.object,
};

export default SkillCard;
