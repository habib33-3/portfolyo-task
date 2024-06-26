import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useUserData from "../../hook/useUserData";

const About = () => {
  const { data: userData } = useUserData();

  const {
    user: {
      about: {
        name,
        description,
        alternateAvatars: [{ url: img }],
      },
    },
  } = userData;

  return (
    <section className="max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row items-center justify-between space-x-4 space-y-4">
        <div className="px-2 py-3 min-h-max rounded-sm bg-textPrimary lg:w-2/3 w-full  flex flex-col justify-center items-center">
          <img
            src={img}
            alt={name}
            className="w-full h-[400px]  mx-auto object-contain object-center"
          />
        </div>
        <div className="min-h-[400px] h-max mx-auto px-3 w-full py-3 bg-gray-700 flex flex-col items-center justify-center">
          <SectionTitle title={"About Me"} />
          <p className="text-textDescription text-justify text-xl font-bold">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
