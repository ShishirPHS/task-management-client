import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import useAuth from "../useAuth";

const useAllTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  // load all tasks
  const { data: allTasks = [], refetch } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/api/user/task/get/${user.email}`);
      return result.data;
    },
  });

  return [allTasks, refetch];
};

export default useAllTasks;
