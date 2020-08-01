import React from "react";
import "./App.css";

//Styled Layout Components
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

//Components
import JobList from "./components/JobList";
import FilterCard from "./components/FilterCard";
import Provider from "./context/Provider";

//Helpers
import { isFiltersEmpty } from "./helpers";

import Context from "./context";

function App() {
  return (
    <Provider>
      <Context.Consumer>
        {(context) => (
          <div className="App">
            <div className="relative">
              <Header />

              {!isFiltersEmpty(context.filters) ? <FilterCard /> : null}
            </div>

            <Main filter={!isFiltersEmpty(context.filters)}>
              <JobList jobs={context.jobs} />
              <Footer>
                Challenge by &nbsp;
                <a
                  href="https://www.frontendmentor.io?ref=challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend Mentor.
                </a>
                Coded by &nbsp;{" "}
                <a href="https://github.com/abulnes16">@abulnes16.</a>
              </Footer>
            </Main>
          </div>
        )}
      </Context.Consumer>
    </Provider>
  );
}

export default App;
