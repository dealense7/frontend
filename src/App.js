import { useEffect, useState } from "react";
import "./App.css";
import DataList from "./components/DataList";
import StatusAction from "./Actions/StatusAction";
import UsersAction from "./Actions/UsersAction";

function App() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    makeRender();
    new UsersAction().getList().then((data) => setUsers(data));
  }, []);

  const makeRender = () => {
    new StatusAction().getList().then((data) => setData(data));
  };

  return (
    <div className="App">
      <div className="w-11/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <DataList users={users} data={data} makeRender={makeRender} />
      </div>
    </div>
  );
}

export default App;
