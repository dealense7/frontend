const Loading = () => {
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
        <span className="font-normal text-xs ml-2 text-gray-700">
          Waiting..
        </span>
      </div>
      <h2 className="font-bold mb-3 text-xl text-gray-800 bg-gray-200 animate-pulse p-3"></h2>
      <p className="text-sm text-gray-600 font-normal h-20 animate-pulse bg-gray-100"></p>
    </div>
  );
};

export default Loading;
