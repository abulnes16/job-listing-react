import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

//Styled components
const JobItemContainer = styled.div`
  position: relative;
  padding: 20px 20px 10px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 5px;
  border-left: 7px solid ${colors.primary};
  box-shadow: 0px 9px 12px -2px hsla(180, 29%, 50%, 0.3);
`;

const JobItem = ({ job }) => {
  return (
    <JobItemContainer>
      <img src={job.logo} alt="Job logo" />
      <div className="job-item__title">
        <h4>{job.company}</h4>
        {job.new ? <span>New!</span> : null}
        {job.featured ? <span>Featured</span> : null}
      </div>
      <div className="job-item__data">
        <h3>{job.position}</h3>
        <div>
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span> {job.location}</span>
        </div>
      </div>
      <div className="job-item__requirements">
        <span>{job.role}</span>
        <span>{job.role}</span>
        {job.languages.length !== 0
          ? job.languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))
          : null}
        {job.tools.length !== 0
          ? job.tools.map((tool, index) => <span key={index}>{tool}</span>)
          : null}
      </div>
    </JobItemContainer>
  );
};

export default JobItem;
