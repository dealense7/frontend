const Preview = ({ props, callClose, callEdit, savable, callSubmit }) => {
  return (
    <div>
      <div>
        {props && props.deadline && (
          <div className="flex items-center my-2 text-red-400 rounded-sm">
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
            <span className="font-normal text-xs ml-2 text-gray-700">
              {props.deadline}
            </span>
          </div>
        )}
        <h2 className="font-bold mb-3 text-xl text-gray-800">
          {props && props.title}
        </h2>
        <p className="text-sm break-words text-gray-600 font-normal">
          {props && props.description}
        </p>
      </div>
      <div className="py-3 flex items-center justify-between rounded-b-lg">
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
            onClick={() => callEdit()}
          >
            Edit
          </button>
          {savable && (
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center bg-blue-600 text-white rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => callSubmit()}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
