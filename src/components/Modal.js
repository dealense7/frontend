import { useRef, useState } from "react";

const Modal = ({ users, selected }) => {
  const [open, setOpen] = useState(true);
  const [edit, setEdit] = useState(false);

  console.log(selected);

  const cancelButtonRef = useRef(false);
  const [dropdown, setDropdown] = useState(true);

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
              <div className="sm:flex sm:items-start">
                <div>
                  <div
                    className={
                      edit
                        ? "flex items-center my-2 text-red-400 bg-gray-100 p-1 rounded-sm"
                        : "flex items-center my-2 text-red-400 rounded-sm"
                    }
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    {edit ? (
                      <input
                        datepicker
                        type="date"
                        className="font-normal text-xs text-gray-800 bg-gray-100 focus:outline-none w-full p-2"
                        placeholder="Select date"
                      />
                    ) : (
                      <span className="font-normal text-xs ml-2 text-gray-700">
                        Due in 4 days from now
                      </span>
                    )}
                  </div>
                  {edit ? (
                    <div>
                      <input
                        type="text"
                        spellCheck="false"
                        className="font-bold mb-3 text-xl text-gray-800 focus:border-gray-500 focus:outline-none w-full border-l-4 border-gray-400 p-2"
                        defaultValue={"Prof. Aliya Gulgowski III"}
                      />
                      <textarea
                        cols="30"
                        rows="5"
                        spellCheck="false"
                        className="font-normal resize-none focus:border-gray-400 focus:outline-none mb-3 text-sm text-gray-600 w-full border-l-4 border-gray-400 p-2"
                      >
                        Cum sunt et magnam autem. Ut omnis non molestiae ratione
                        adipisci commodi ipsa. Aut delectus qui et delectus quos
                        nihil. Et minima impedit voluptatum omnis architecto
                        corrupti.
                      </textarea>
                    </div>
                  ) : (
                    <div>
                      <h2 className="font-bold mb-3 text-xl text-gray-800">
                        Prof. Aliya Gulgowski III
                      </h2>
                      <p className="text-sm text-gray-600 font-normal">
                        Cum sunt et magnam autem. Ut omnis non molestiae ratione
                        adipisci commodi ipsa. Aut delectus qui et delectus quos
                        nihil. Et minima impedit voluptatum omnis architecto
                        corrupti.
                      </p>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center my-2">
                      <div className="relative w-full">
                        <button
                          onClick={() => setDropdown(!dropdown)}
                          type="button"
                          className="relative w-full bg-white cursor-pointer border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm"
                          aria-haspopup="listbox"
                          aria-expanded="true"
                          aria-labelledby="listbox-label"
                        >
                          <span className="flex items-center">
                            <img
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                              className="flex-shrink-0 h-6 w-6 rounded-full"
                            />
                            <span className="ml-3 block truncate">
                              Tom Cook
                            </span>
                          </span>
                          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                              className="h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                        {dropdown && (
                          <ul
                            className="absolute z-10 h-32 overflow-y-auto mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                            tabIndex="-1"
                            role="listbox"
                            aria-labelledby="listbox-label"
                            aria-activedescendant="listbox-option-3"
                          >
                            {users.map((user) => (
                              <li
                                className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                                id="listbox-option-0"
                                role="option"
                                key={user.id}
                              >
                                <div className="flex items-center">
                                  <img
                                    src={user.imageUrl}
                                    className="flex-shrink-0 h-6 w-6 rounded-lg"
                                  />
                                  <span className="font-normal ml-3 block truncate">
                                    {user.name}
                                  </span>
                                </div>
                                <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <button className="bg-blue-600 text-white font-bold rounded-md h-full ml-2 p-2 px-4 w-max">
                        Add
                      </button>
                    </div>
                    <ul>
                      {/* <li className="flex items-center justify-between p-2 bg-gray-100 rounded-sm">
                        <div className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                          />
                          <span className="font-normal ml-3 block truncate">
                            Wade Cooper
                          </span>
                        </div>
                        <button>
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
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex items-center justify-between rounded-b-lg">
              <div></div>
              {edit ? (
                <div className="flex items-center">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setEdit(false)}
                    ref={cancelButtonRef}
                  >
                    Discard
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center bg-blue-600 text-white rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setEdit(true)}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center bg-blue-600 text-white rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setEdit(true)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return renderModal();
};

export default Modal;
