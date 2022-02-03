const LoadingTask = () => {
  return (
    <div className="bg-white p-3 py-5 rounded-sm shadow-md mb-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-red-400 w-1/3">
          <span className="animate-pulse bg-red-100 font-normal text-xs text-gray-700 w-full p-2"></span>
        </div>
        <span className="text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </span>
      </div>
      <h4 className="my-2 text-gray-900 text-base font-bold animate-pulse p-2 w-full bg-gray-200"></h4>
      <p className="font-normal text-sm animate-pulse bg-gray-100 text-gray-100 w-full h-20"></p>
      <div className="flex items-center mt-4 justify-between">
        <div className="flex items-center relative h-8 w-full">
          <div className="flex animate-pulse items-center absolute top-0 justify-center bg-blue-600 h-8 w-8 rounded-full text-white font-normal text-2xl left-0"></div>
        </div>
        <div className="text-green-700 animate-pulse bg-green-100 p-1 px-2 rounded-md flex items-center justify-end">
          <span className="font-normal text-xs text-green-700 mr-2 w-20 p-2"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingTask;
