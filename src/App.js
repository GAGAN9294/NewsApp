import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setprogress={setProgress}
                key="general"
                pageSize={12}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setprogress={setProgress}
                key="business"
                pageSize={12}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setprogress={setProgress}
                key="entertainment"
                pageSize={12}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setprogress={setProgress}
                key="general"
                pageSize={12}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setprogress={setProgress}
                key="health"
                pageSize={12}
                country="in"
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setprogress={setProgress}
                key="science"
                pageSize={12}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setprogress={setProgress}
                key="sports"
                pageSize={12}
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setprogress={setProgress}
                key="technology"
                pageSize={12}
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
