import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const TaskRow = ({ task, idx }) => {
  const { _id, title, description, deadline, priority } = task;

  const handleTaskDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
        console.log("delete btn clicked", id);
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
};

export default TaskRow;
