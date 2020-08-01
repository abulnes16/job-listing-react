import React, { useState } from "react";
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

function App() {
  const [jobs, setJobs] = useState(data);

  return (
    <div className="App">
      <div className="relative">
        <Header />
        <FilterCard />
      </div>
      <Main filter>
        <JobList jobs={jobs} />
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
