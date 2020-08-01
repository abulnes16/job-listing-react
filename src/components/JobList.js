import React from 'react';
import PropTypes from 'prop-types';

//Components
import JobItem from './JobItem'


const JobList = ({jobs, addFilter}) => {
  return (
    <section className="job-list">
      {
        jobs.map((job)=>(
          <JobItem key={job.id} job={job} addFilter={addFilter}/>
        ))
      }
    </section>
  )
}

JobList.propTypes = {
  jobs: PropTypes.array.isRequired
}

export default JobList;
