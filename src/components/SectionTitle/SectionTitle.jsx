import PropTypes from "prop-types";

SectionTitle.propTypes = {
  title: PropTypes.string,
};

function SectionTitle({ title }) {
  return (
    <h1 className="text-4xl font-bold text-white leading-tight text-center">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse">
        {title}
      </span>
    </h1>
  );
}

export default SectionTitle;
