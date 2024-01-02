import Swal from "sweetalert2";
import TaskRow from "../../../components/Dashboard/TaskRow/TaskRow";
import useAllTasks from "../../../hooks/useAllTasks/useAllTasks";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import "./AllTasks.css";
import { useDrop } from "react-dnd";

const AllTasks = () => {
  const [allTasks, refetch, isLoading] = useAllTasks();
  const toDo = allTasks.filter((task) => task.status === "to-do");
  const onGoing = allTasks.filter((task) => task.status === "on-going");
  const completed = allTasks.filter((task) => task.status === "completed");
  const axiosPublic = useAxiosPublic();

  const [, dropToDo] = useDrop(() => ({
    accept: "TABLE_ROW",
    drop: (item) => changeStatus(item.id, "to-do"),
  }));

  const [, dropOngoing] = useDrop(() => ({
    accept: "TABLE_ROW",
    drop: (item) => changeStatus(item.id, "on-going"),
  }));

  const [, dropCompleted] = useDrop(() => ({
    accept: "TABLE_ROW",
    drop: (item) => changeStatus(item.id, "completed"),
  }));

  const changeStatus = (id, table) => {
    console.log(`dropped ${id} to ${table} table.`);
    const changedTask = { status: table };
    axiosPublic
      .patch(`/api/user/task/update/status/${id}`, changedTask)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            text: "Status Updated Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1200,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <h4 className="text-3xl font-bold text-center mt-5 mb-12">All tasks</h4>
      <div className="all-tasks">
        {/* to-do */}
        <div>
          <h3 className="text-2xl font-bold mt-5 mb-6">To-Do</h3>
          <div className="mb-10">
            <div className="overflow-x-auto">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <span className="text-center loading loading-spinner loading-sm"></span>
                </div>
              ) : (
                <table ref={dropToDo} className="table table-zebra">
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
              )}
            </div>
          </div>
        </div>
        {/* on-going */}
        <div>
          <h3 className="text-2xl font-bold mt-5 mb-6">Ongoing</h3>
          <div className="mb-10">
            <div className="overflow-x-auto">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <span className="text-center loading loading-spinner loading-sm"></span>
                </div>
              ) : (
                <table ref={dropOngoing} className="table table-zebra">
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
              )}
            </div>
          </div>
        </div>
        {/* completed */}
        <div>
          <h3 className="text-2xl font-bold mt-5 mb-6">Completed</h3>
          <div className="mb-10">
            <div className="overflow-x-auto">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <span className="text-center loading loading-spinner loading-sm"></span>
                </div>
              ) : (
                <table ref={dropCompleted} className="table table-zebra">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
