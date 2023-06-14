import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useUser = () => {
    const { loading } = useAuth();
    const [axiosSecure] = UseAxiosSecure()

    const { isLoading, data: users = {}, refetch } = useQuery({
        queryKey: ["users"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure("/users");
            console.log("response", res);
            return res.data
        },
    });

    return [isLoading, users, refetch];
};

export default useUser;
