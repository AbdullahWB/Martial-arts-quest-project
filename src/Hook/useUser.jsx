import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useUser = () => {
    const { user } = useAuth();
    const { isLoading, data: users = {}, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            return res.json();
        },
    });

    return { users, isLoading, refetch };
};

export default useUser;
