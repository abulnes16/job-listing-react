import React, { useState, useEffect } from "react";
import "./App.css";

//Data
import data from "./data/data.json";

//Styled Layout Components
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

//Components
import JobList from "./components/JobList";
import FilterCard from "./components/FilterCard";

//Helpers
import { isFiltersEmpty } from "./helpers";

//Constants
import filterStructure from "./constants/filtersStructure.json";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filters, setFilters] = useState(filterStructure);

  useEffect(() => {
    let filterData = data;
    if (!isFiltersEmpty(filters)) {
      filterData = data.filter((job) => {
        if (
          (filters.level !== "" && filters.level === job.level) ||
          (filters.role !== "" && filters.role === job.role) ||
          (filters.languages.length !== 0 &&
            filters.languages.includes(...job.languages)) ||
          (filters.tools.length !== 0 && filters.tools.includes(...job.tools))
        ) {
          return job;
        }
      });
    }
    setJobs(filterData);
  }, [filters]);

  const clean = () => {
    setFilters(filterStructure);
    setJobs(data);
  };

  const addFilter = (value, type) => {
    let filterValue = "";
    if (type === "role" || type === "level") {
      filterValue = value;
    } else {
      
      filterValue = [...filters[type]];
      if (!filterValue.includes(value)) {
        filterValue.push(value);
      }
    }
    setFilters({
      ...filters,
      [type]: filterValue,
    });
  };

  const popFilter = (value, type) => {
    let popValue = "";
    if (type === "role" || type === "level") {
      popValue = "";
    } else {
      popValue = filters[type].filter((filter) => filter !== value);
    }

    setFilters({
      ...filters,
      [type]: popValue,
    });
  };

  return (
    <div className="App">
      <div className="relative">
        <Header />
        {!isFiltersEmpty(filters) ? (
          <FilterCard filters={filters} clean={clean} popFilter={popFilter} />
        ) : null}
      </div>
      <Main filter={!isFiltersEmpty(filters)}>
        <JobList jobs={jobs} addFilter={addFilter} />
        <Footer>
          Challenge by &nbsp;
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor.
          </a>
          Coded by &nbsp; <a href="https://github.com/abulnes16">@abulnes16.</a>
        </Footer>
      </Main>
    </div>
  );
}

export default App;
