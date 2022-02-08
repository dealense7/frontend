import { useEffect, useState } from "react";

const Dropdown = ({ users, selectedIds, attachUser }) => {
  const [dropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected(users[0]);
  }, [users]);

  return (
    <div className="flex items-center my-2">
      <div className="relative w-full">
        <button
          onClick={() => setDropdown(!dropdown)}
          type="button"
          className="relative w-full bg-white cursor-pointer border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="flex items-center">
            <img
              src={selected && selected.imageUrl}
              alt=""
              className="flex-shrink-0 h-6 w-6 rounded-full"
            />
            <span className="ml-3 block truncate">
              {selected && selected.name}
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
                onClick={() => {
                  setSelected(user);
                  setDropdown(false);
                }}
                className="text-gray-900 hover:bg-gray-100 cursor-default select-none relative py-2 pl-3 pr-9"
                id="listbox-option-0"
                role="option"
                key={"dropdown" + user.id}
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
                {selectedIds &&
                  selectedIds.length > 0 &&
                  selectedIds.includes(user.id) && (
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
                  )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={() => attachUser(selected.id)}
        className="bg-blue-600 text-white font-bold rounded-md h-full ml-2 p-2 px-4 w-max"
      >
        Add
      </button>
    </div>
  );
};

export default Dropdown;
