import PropTypes from "prop-types";

const TestimonialSlide = ({ testimonial }) => {
  const {
    name,
    position,
    review,
    image: { url: img },
  } = testimonial;

  return (
    <div className="px-2 py-10 md:px-0 ">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0">
            <img
              className="relative h-48 w-48 rounded-full object-cover"
              src={img}
              alt={`${name}'s review`}
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-textDescription">“{review}”</p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-textPrimary">
              {name}
            </p>
            <p className="mt-1 text-base text-textAccent">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialSlide.propTypes = {
  testimonial: PropTypes.object,
};

export default TestimonialSlide;
