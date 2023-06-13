import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const useAllClasses = () => {
    const { loading } = useAuth();
    const [axiosSecure] = UseAxiosSecure()

    const { isLoading, data: allClass = {}, refetch } = useQuery({
        queryKey: ["allClass"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure("/classes");
            console.log("response", res);
            return res.data
        },
    });

    return [ isLoading, allClass, refetch ];
}

export default useAllClasses;