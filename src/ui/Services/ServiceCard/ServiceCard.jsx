import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const {
    name,
    charge,
    desc,
    image: { url: img },
  } = service;

  return (
    <div className="w-full md:w-1/2 mx-auto rounded-md shadow-xl">
      <div className="relative group h-[300px]">
        <img
          src={img}
          alt={name}
          className="object-center object-cover w-full  group-hover:opacity-40 group-hover:scale-110"
        />
        <div className="absolute w-full h-full  inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 rounded-md">
          <div className="text-center px-3 ">
            <h3 className="text-lg font-bold text-textPrimary">{name}</h3>
            <p className="text-md text-textAccent text-justify">{desc}</p>
          </div>
        </div>
        <p className="absolute right-1 top-0 px-4 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-xl text-lg font-bold bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-500 group-hover:text-[#f1f1f1] group-hover:text-transparent">
          {charge}
        </p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
