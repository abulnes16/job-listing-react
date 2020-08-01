import React from "react";
import colors from "../constants/colors";
//Styled components
import Badge from "./styled/Badge";
import Button from "./styled/Button";
import JobItemContainer from "./styled/JobItemContainer";

//Components
import BadgeList from "./BadgeList";

const JobItem = ({ job, addFilter }) => {
  return (
    <JobItemContainer>
      <div className="job-item__data">
        <img src={job.logo} alt="Job logo" />
        <div className="job-item__description">
          <div className="job-item__title">
            <h5>{job.company}</h5>
            {job.new ? <Badge background={colors.primary}>New!</Badge> : null}
            {job.featured ? (
              <Badge background={colors.darkerCyan}>Featured</Badge>
            ) : null}
          </div>
          <h3>{job.position}</h3>
          <div>
            <span>{job.postedAt}</span>
            <span>&bull;</span>
            <span>{job.contract}</span>
            <span>&bull;</span>
            <span> {job.location}</span>
          </div>
        </div>
      </div>
      <div className="job-item__requirements">
        <Button onClick={() => addFilter(job.role, "role")}>{job.role}</Button>
        <Button onClick={() => addFilter(job.level, "level")}>
          {job.level}
        </Button>
        {job.languages.length !== 0 ? (
          <BadgeList
            data={job.languages}
            info="languages"
            addFilter={addFilter}
          />
        ) : null}
        {job.tools.length !== 0 ? (
          <BadgeList data={job.tools} info="tools" addFilter={addFilter} />
        ) : null}
      </div>
    </JobItemContainer>
  );
};

export default JobItem;
