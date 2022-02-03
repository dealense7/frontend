const Task = ({ item }) => {
  return (
    <div className="bg-white p-3 py-5 rounded-sm shadow-md mb-3">
      <div className="flex items-center justify-between">
        {item.getDeadlineDiffForHumans ? (
          <div className="flex items-center text-red-400">
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
            <span className="font-normal text-xs ml-2 text-gray-700">
              Due in {item.getDeadlineDiffForHumans}
            </span>
          </div>
        ) : (
          <div></div>
        )}
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
      <h4 className="my-2 text-gray-900 text-base font-bold">{item.title}</h4>
      <p className="font-normal text-gray-700 text-sm">{item.description}</p>
      <div className="flex items-center mt-4 justify-between">
        <div className="flex items-center relative h-8 w-full">
          <div
            className={
              "flex items-center absolute top-0 justify-center bg-blue-600 h-8 w-8 rounded-full text-white font-normal text-2xl left-" +
              item.users.length * 5
            }
          >
            +
          </div>
          {item.users.map((item, index) => (
            <img
              key={item.id}
              src={item.imageUrl}
              className={
                "w-8 h-8 rounded-full absolute top-0 left-" + index * 5
              }
              style={{ zIndex: 30 - index * 5 }}
            />
          ))}
        </div>
        {item.status == "ready" ? (
          <div className="text-gray-700 flex items-center justify-end">
            <span className="font-normal text-xs text-gray-700 w-max mr-2">
              Ready to do
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
        {item.status == "processing" ? (
          <div className="text-yellow-500 flex items-center justify-end">
            <span className="font-normal text-xs text-gray-700 w-max mr-2">
              Processing
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
        {item.status == "done" ? (
          <div className="text-green-700 bg-green-100 p-1 px-2 rounded-md flex items-center justify-end">
            <span className="font-normal text-xs text-green-700 w-max mr-2">
              Completed
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Task;
