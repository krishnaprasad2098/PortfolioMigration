import React from "react";
import ExperienceData from "../data/ExperienceData";
import { Icon } from "@iconify/react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const ExperienceCard = () => {
  const workIconStyles = { background: "#06D6A0" };
  return (
    <div>
      <VerticalTimeline>
        {ExperienceData.map((exe) => {
          // const IsWorkIcon = exe.icon === "work";
          return (
            <VerticalTimelineElement
              key={exe.id}
              date={exe.duration}
              dateClassName="date"
              iconStyle={exe.icon === "work" ? workIconStyles : null}
              icon={<Icon icon="ph:desktop-duotone" />}
            >
              <div className="flex flex-col gap-0">
                <h1 className="vertical-timeline-element-title font-bold">
                  {exe.company}
                </h1>
                <p className="vertical-timeline-element-subtitle">
                  {exe.title}
                </p>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceCard;
