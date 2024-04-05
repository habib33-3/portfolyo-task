import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";
import TimelineElement from "./TimelineElement/TimelineElement";

const TimelineSector = ({ data, icon }) => {
  return (
    <div>
      <VerticalTimeline layout="1-column">
        {data.map((element) => (
          <TimelineElement
            key={element._id}
            element={element}
            icon={icon}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

TimelineSector.propTypes = {
  data: PropTypes.array,
  icon: PropTypes.node,
};

export default TimelineSector;
