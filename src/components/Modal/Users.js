import { useEffect } from "react";
import TasksAction from "../../Actions/TasksAction";
import Dropdown from "./Dropdown";

const Users = ({ users, selected, taskId, makeRender, setSelectedUsers }) => {
  function pluck(array, key) {
    return array.map((o) => o[key]);
  }
  const removeUser = (id) => {
    new TasksAction().detachUser(taskId, id).then((data) => {
      makeRender();
      setSelectedUsers(data.users);
    });
  };
  const attachUser = (id) => {
    new TasksAction().attachUser(taskId, id).then((data) => {
      makeRender();
      setSelectedUsers(data.users);
    });
  };
  return (
    <div>
      <div>
        {selected && (
          <Dropdown
            users={users}
            attachUser={attachUser}
            selectedIds={selected && pluck(selected, "id")}
          />
        )}
        <ul>
          {selected &&
            selected &&
            selected.map((user) => (
              <li
                key={"selected" + user.id}
                className="flex items-center justify-between p-2 bg-gray-100 rounded-sm"
              >
                <div className="flex items-center">
                  <img
                    src={user.imageUrl}
                    className="flex-shrink-0 rounded-md h-7 w-7"
                  />
                  <span className="font-normal ml-3 block truncate">
                    {user.name}
                  </span>
                </div>
                <button type="button" onClick={() => removeUser(user.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#ff4545"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
