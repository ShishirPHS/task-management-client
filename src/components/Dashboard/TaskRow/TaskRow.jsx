import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";

const TaskRow = ({ task, idx, refetchAllTasks }) => {
  const { _id, title, description, deadline, priority } = task;
  const axiosPublic = useAxiosPublic();

  const handleTaskDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/api/user/task/delete/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            text: "Task has been deleted.",
          });
          refetchAllTasks();
        }
      }
    });
  };

  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>{deadline}</td>
      <td>{priority}</td>
      <td>
        <button onClick={() => handleTaskDelete(_id)}>
          <MdDeleteForever className="text-2xl hover:cursor-pointer hover:text-[26px]"></MdDeleteForever>
        </button>
      </td>
    </tr>
  );
};

TaskRow.propTypes = {
  task: PropTypes.object,
  idx: PropTypes.number,
  refetchAllTasks: PropTypes.func,
};

export default TaskRow;
