import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useUserData from "../../hook/useUserData";
import filterEnabled from "../../util/filterEnabled";
import sortBySequence from "../../util/sortBySequence";
import TimelineSector from "./TimelineSector/TimelineSector";
import { IoBriefcase, IoSchoolSharp } from "react-icons/io5";

const Timeline = () => {
  const { data: userData } = useUserData();

  const {
    user: { timeline },
  } = userData;

  const filteredTimeline = filterEnabled(timeline);

  const sortedTimeline = sortBySequence(filteredTimeline);

  const educationTimeline = sortedTimeline.filter(
    (item) => item.forEducation === true
  );
  const experienceTimeline = sortedTimeline.filter(
    (item) => item.forEducation === false
  );

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0">
      <SectionTitle title={"Experience"} />
      <Tabs className="flex flex-col items-center">
        <TabList className="flex justify-center space-x-8">
          <Tab className="focus:outline-none focus:bg-gray-200">
            <h2 className="border-b-4 border-transparent transition-colors duration-300 hover:border-blue-500 py-2 px-4 rounded-md text-lg font-semibold text-textPrimary hover:text-blue-500 hover:text-xl">
              Education
            </h2>
          </Tab>
          <Tab className="focus:outline-none focus:bg-gray-200">
            <h2 className="border-b-4 border-transparent transition-colors duration-300 hover:border-blue-500 py-2 px-4 rounded-md text-lg font-semibold text-textPrimary hover:text-blue-500 hover:text-xl">
              Experience
            </h2>
          </Tab>
        </TabList>

        <TabPanel>
          <TimelineSector
            data={educationTimeline}
            icon={<IoSchoolSharp />}
          />
        </TabPanel>
        <TabPanel>
          <TimelineSector
            data={experienceTimeline}
            icon={<IoBriefcase />}
          />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Timeline;
