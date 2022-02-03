import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DataList from "./components/DataList";
import Modal from "./components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  const [selected, setSelected] = useState(null);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/statuses")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        var taskArray = [];
        data.data.map((item) => taskArray.push(...item.tasks));
        setTasks(taskArray);
      });

    fetch("http://127.0.0.1:8000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      });

    setSelected(tasks[0]);
  }, []);

  return (
    <div className="App">
      <div className="w-11/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <Navbar count={tasks.length} />
        <DataList data={data} />
        <Modal users={users} selected={selected} />
      </div>
    </div>
  );
}

export default App;
