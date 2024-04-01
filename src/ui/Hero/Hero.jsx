import useUserData from "../../hook/useUserData";

const Hero = () => {
  const { data: userData } = useUserData();

  const {
    user: {
      about: {
        name,
        title,
        subTitle,
        description,
        avatar: { url: img },
      },
    },
  } = userData;

  return (
    <section className="max-w-8xl w-full mx-auto  flex justify-around">
      <div className="flex flex-col items-center justify-center w-1/2">
        <h2 className="text-textPrimary text-5xl font-bold uppercase text-center">
          {name}
        </h2>
        <h4 className="text-textAccent text-2xl font-medium text-center">
          {title}
        </h4>
        <p className="text-lg text-textDescription text-justify font-medium">
          {subTitle}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <img
          src={img}
          alt="avatar"
          className="size-48 rounded-full mx-auto"
        />
        <p className="text-lg text-textDescription text-justify font-medium px-5">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
