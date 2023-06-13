import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const useUserType = () => {
    const { user } = useAuth();
    const [axiosSecure] = UseAxiosSecure();
    const { data: userType } = useQuery({
        queryKey: ['userType', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/${user?.email}`);
            console.log('user type res', res);
            return res.data;
        }
    });

    return userType;
};

export default useUserType;
