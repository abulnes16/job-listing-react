import React, { useEffect, useState } from "react";

//Context
import Context from "./index";

//Data
import data from "../data/data.json";
//Constants
import filterStructure from "../constants/filtersStructure.json";

//Helpers
import { isFiltersEmpty } from "../helpers";

const Provider = (props) => {
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
    <Context.Provider
      value={{
        jobs: jobs,
        filters: filters,
        clean: clean,
        popFilter: popFilter,
        addFilter: addFilter,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
