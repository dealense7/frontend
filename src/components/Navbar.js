const Navbar = ({ count, callCreate }) => {
  return (
    <section>
      <div className="flex my-3 items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          Recent Tasks{" "}
          <span className="text-gray-400 text-base ml-2">
            {count > 0 ? "(" + count + ")" : ""}
          </span>
        </h2>
        <button
          onClick={() => callCreate()}
          className="bg-blue p-2 px-5 text-base font-normal text-white rounded-sm"
        >
          + New Task
        </button>
      </div>
    </section>
  );
};

export default Navbar;
