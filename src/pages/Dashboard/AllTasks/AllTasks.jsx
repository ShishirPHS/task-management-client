import TaskRow from "../../../components/Dashboard/TaskRow/TaskRow";
import useAllTasks from "../../../hooks/useAllTasks/useAllTasks";
import "./AllTasks.css";

const AllTasks = () => {
  const [allTasks, refetch] = useAllTasks();
  const toDo = allTasks.filter((task) => task.status === "to-do");
  const onGoing = allTasks.filter((task) => task.status === "on-going");
  const completed = allTasks.filter((task) => task.status === "completed");

  return (
    <div>
      <h4 className="text-3xl font-bold text-center mt-5 mb-12">All tasks</h4>
      <div className="all-tasks">
        {/* to-do */}
        <div>
          <h3 className="text-2xl font-bold mt-5 mb-6">To-Do</h3>
          <div className="mb-10">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Task Title</th>
                    <th>Description</th>
                    <th>Deadline</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {toDo?.map((task, idx) => (
                    <TaskRow
                      key={idx}
                      idx={idx}
                      task={task}
                      refetchAllTasks={refetch}
                    ></TaskRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* on-going */}
        <div>
          <h3 className="text-2xl font-bold mt-5 mb-6">Ongoing</h3>
          <div className="mb-10">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Task Title</th>
                    <th>Description</th>
                    <th>Deadline</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* body */}
                <tbody>
                  {onGoing?.map((task, idx) => (
                    <TaskRow
                      key={idx}
                      idx={idx}
                      task={task}
                      refetchAllTasks={refetch}
                    ></TaskRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* completed */}
        <div>
          <h3 className="text-2xl font-bold mt-5 mb-6">Completed</h3>
          <div className="mb-10">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Task Title</th>
                    <th>Description</th>
                    <th>Deadline</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {completed?.map((task, idx) => (
                    <TaskRow
                      key={idx}
                      idx={idx}
                      task={task}
                      refetchAllTasks={refetch}
                    ></TaskRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
