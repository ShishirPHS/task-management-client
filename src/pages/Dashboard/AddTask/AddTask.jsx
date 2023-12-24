import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";

const AddTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;

    const task = {
      title,
      description,
      deadline,
      priority,
      user: user.email,
      status: "to-do",
    };

    axiosPublic
      .post("/api/user/task/create", task)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Task added Successfully",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="container mx-auto mt-5">
        <h2 className="text-center font-bold text-3xl">Add task</h2>
        <form
          onSubmit={handleAddTask}
          className="card-body w-full mx-auto border rounded-lg mt-12"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              name="priority"
              required
              className="select select-bordered w-full"
            >
              <option value="">Select task priority</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
