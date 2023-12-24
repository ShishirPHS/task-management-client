import PropTypes from "prop-types";

const TaskRow = ({ task, idx }) => {
  const { title, description, deadline, priority } = task;

  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>{deadline}</td>
      <td>{priority}</td>
    </tr>
  );
};

TaskRow.propTypes = {
  task: PropTypes.object,
  idx: PropTypes.number,
};

export default TaskRow;
