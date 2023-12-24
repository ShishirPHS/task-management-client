import useAllTasks from "../../../hooks/useAllTasks/useAllTasks";

const AllTasks = () => {
  const [allTasks, refetch] = useAllTasks();

  return (
    <div>
      <h4 className="text-3xl font-bold text-center mt-5 mb-12">All tasks</h4>
      <div>
        {/* to-do */}
        <div>
          <h3 className="text-2xl font-bold mt-5 mb-6">To-Do</h3>
          <div className="mb-5"></div>
        </div>
        {/* on-going */}
        <div>
          <h3 className="text-2xl font-bold mt-5 mb-6">Ongoing</h3>
          <div className="mb-5"></div>
        </div>
        {/* completed */}
        <div>
          <h3 className="text-2xl font-bold mt-5 mb-6">Completed</h3>
          <div className="mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
