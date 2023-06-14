import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import UseAxiosSecure from "./UseAxiosSecure"

const useMyClass = () => {
    const { user } = useAuth()
    // const token = localStorage.getItem('assess-token')
    // const [axiosSecure] = UseAxiosSecure()
    const { isLoading, data: myClasses = [], refetch } = useQuery({
        queryKey: ['myClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-ochre.vercel.app/myClasses?email=${user?.email}`)
            return res.json()
        }
        // queryFn: async () => {
        //     const res = await axiosSecure(`/myClasses?email=${user?.email}`)
        //     console.log("response", res);
        //     return res.data()
        // }
    })
    return [isLoading, myClasses, refetch]
}

export default useMyClass;