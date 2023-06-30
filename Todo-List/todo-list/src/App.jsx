/* eslint-disable react/jsx-no-undef */
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import Container from "./components/Container";
import Header from "./components/header";
import InputTask from "./components/InputTask";

function App() {
  // Config para almacenar tareas por localstorage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  // if(!initialTasks){
  //   initialTask = [];
  // }

  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  console.log(tasks);

  return (
    <>
      <div>
        <Container>
          <Header />
          <InputTask createTask={createTask} />
        </Container>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
