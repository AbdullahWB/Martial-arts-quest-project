import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import UseAxiosSecure from "./UseAxiosSecure"

const useClasses = () => {
    const { user } = useAuth()
    const [axiosSecure] = UseAxiosSecure()
    
    const { isLoading, data: AddClasses = [], refetch } = useQuery({
        queryKey: ['addClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/addClasses?email=${user?.email}`)
            console.log("response", res);
            return res.data
        }
    })
    return [isLoading , AddClasses , refetch]
}

export default useClasses;