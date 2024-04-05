import PropTypes from "prop-types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import formateDate from "../../../../util/formateDate";

const TimelineElement = ({ element, icon }) => {
  const {
    company_name,
    summary,
    startDate,
    endDate,
    jobTitle,
    jobLocation,
    bulletPoints,
  } = element;

  const formattedStartDate = formateDate(startDate);
  const formattedEndDate = formateDate(endDate);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={`${formattedStartDate} - ${formattedEndDate}`}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title text-2xl font-bold text-blue-700">
        {jobTitle}
      </h3>
      <h4 className="vertical-timeline-element-subtitle text-xl">
        {jobLocation}
      </h4>
      <p className="text-gray-900 text-md">{summary}</p>
      <ul className="list-disc ml-6 text-gray-700 text-lg">
        {bulletPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="text-gray-700 text-md font-semibold">
        Company: {company_name}
      </p>
    </VerticalTimelineElement>
  );
};

TimelineElement.propTypes = {
  element: PropTypes.object,
  icon: PropTypes.node,
};

export default TimelineElement;
