import { useRef, useState } from "react";

const Form = ({ props, updateProps, callClose }) => {
  const [errors, setErrors] = useState([]);

  const title = useRef("");
  const description = useRef("");
  const deadline = useRef();

  const makePreview = () => {
    if (title.current.value == "" || description.current.value == "") {
      setErrors({
        title: title.current.value == "" ? true : false,
        description: description.current.value == "" ? true : false,
      });
    } else {
      updateProps({
        deadline: deadline.current.value,
        title: title.current.value,
        description: description.current.value,
      });
    }
  };

  return (
    <div>
      <div className="flex items-center my-2 text-red-400 bg-gray-100 p-1 rounded-sm">
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
        <input
          type="date"
          className="font-normal text-xs text-gray-800 bg-gray-100 focus:outline-none w-full p-2"
          placeholder="Select date"
          defaultValue={props && props.deadline}
          min={
            new Date(Date.now() + 3600 * 1000 * 48).toISOString().split("T")[0]
          }
          ref={deadline}
        />
      </div>
      <input
        type="text"
        spellCheck="false"
        className="font-bold mb-3 text-xl text-gray-800 focus:border-gray-500 focus:outline-none w-full border-l-4 border-gray-400 p-2"
        defaultValue={props && props.title}
        placeholder="Task Title"
        ref={title}
      />
      {errors.title && (
        <div className="text-sm text-red-500 mb-3">
          <small>Title is required.</small>
        </div>
      )}
      <textarea
        cols="30"
        rows="5"
        defaultValue={props && props.description}
        ref={description}
        spellCheck="false"
        placeholder="Write some description for this task."
        className="font-normal resize-none focus:border-gray-400 focus:outline-none mb-3 text-sm text-gray-600 w-full border-l-4 border-gray-400 p-2"
      ></textarea>

      {errors.description && (
        <div className="text-sm text-red-500 mb-3">
          <small>Description is required.</small>
        </div>
      )}
      <div className=" py-3 flex items-center justify-between rounded-b-lg">
        <div>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={() => callClose()}
          >
            Close
          </button>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={makePreview}
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
