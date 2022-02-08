import { useEffect, useState } from "react";
import TasksAction from "../Actions/TasksAction";
import Dropdown from "./Modal/Dropdown";
import Form from "./Modal/Form";
import Loading from "./Modal/Loading";
import Preview from "./Modal/Preview";
import Users from "./Modal/Users";

const Modal = ({ users, selectedId, setSelectItem, makeRender }) => {
  const [props, setProps] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [savable, setSavable] = useState(false);
  const [saved, setSaved] = useState({
    updated: false,
    created: false,
  });

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const updateProps = (data) => {
    if (
      (!savable && props.title != data.title) ||
      (!savable && props.description != data.description) ||
      (!savable && props.deadline != data.deadline)
    ) {
      setSavable(true);
    }
    setProps(data);
    setEdit(false);
  };

  const callSubmit = () => {
    if (typeof selectedId == "number") {
      new TasksAction().updateItem(selectedId, props).then((data) => {
        setSaved({
          updated: true,
          created: false,
        });
        makeRender();
      });
    } else {
      new TasksAction().createItem(props).then((data) => {
        setSaved({
          updated: false,
          created: true,
        });
        setSelectItem(data.id);
        makeRender();
      });
    }
    setSavable(false);
  };

  useEffect(() => {
    if (typeof selectedId == "number") {
      cleanup();
      setOpen(true);
      new TasksAction().getItem(selectedId).then((data) => {
        setProps({
          title: data.title,
          description: data.description,
          deadline: data.deadline ?? null,
        });
        setSelectedUsers(data.users);
      });
    } else if (selectedId == "create") {
      cleanup();
      setOpen(true);
      setEdit(true);
    }
  }, [selectedId]);

  const cleanup = () => {
    setSelectedUsers([]);
    setSaved(null);
    setProps([]);
    setEdit(false);
    setSavable(false);
  };

  const makeClose = () => {
    setOpen(false);
    setSelectItem(null);
  };

  function renderModal() {
    if (!open) {
      return <></>;
    }
    return (
      <div
        className="fixed z-50 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg">
              {((saved && saved.updated) || (saved && saved.created)) && (
                <div className="bg-green-300 text-gray-700 font-bold p-1 my-3 text-xs">
                  {saved && saved.updated && "Updated "}
                  {saved && saved.created && "Created "}
                  Successfuly!
                </div>
              )}
              <div className="block w-full">
                {edit ? (
                  <Form
                    props={props}
                    updateProps={updateProps}
                    callClose={() => makeClose()}
                  />
                ) : props ? (
                  <>
                    <Preview
                      props={props}
                      savable={savable}
                      callEdit={() => setEdit(true)}
                      callClose={() => makeClose()}
                      callSubmit={callSubmit}
                    />
                    {typeof selectedId == "number" && (
                      <Users
                        taskId={selectedId}
                        users={users}
                        makeRender={makeRender}
                        selected={selectedUsers}
                        setSelectedUsers={setSelectedUsers}
                      />
                    )}
                  </>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return renderModal();
};

export default Modal;
