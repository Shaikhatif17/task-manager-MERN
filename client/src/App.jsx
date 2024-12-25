import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Addtask from "./components/Addtask";
import ShowTask from "./components/ShowTask";

import "./App.css";

const App = () => {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Addtask
          task={task}
          setTask={setTask}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
        <ShowTask
          task={task}
          setTask={setTask}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
      </div>
    </div>
  );
};

export default App;
