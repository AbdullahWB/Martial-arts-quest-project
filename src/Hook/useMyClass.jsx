import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useMyClass = () => {
    const { user } = useAuth()
    
    const { isLoading, data: myClasses = [], refetch } = useQuery({
        queryKey: ['myClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myClasses?email=${user?.email}`)
            return res.json()
        }
    })
    return [isLoading , myClasses , refetch]
}

export default useMyClass;