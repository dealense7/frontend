import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import LoadingTask from "./LoadingTask";
import Task from "./Task";

const DataList = ({ data }) => {
  return (
    <div className="grid grid-cols-3 text-left gap-5 mt-5">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="col-span-1">
            {item.tasks.map((task) => (
              <Task item={task} key={task.id} />
            ))}
          </div>
        ))
      ) : (
        <>
          <div key="rand1" className="col-span-1">
            <LoadingTask />
          </div>
          <div key="rand11" className="col-span-1">
            <LoadingTask />
          </div>
          <div key="rand111" className="col-span-1">
            <LoadingTask />
          </div>
        </>
      )}
    </div>
  );
};

export default DataList;
