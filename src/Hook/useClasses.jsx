import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useClasses = () => {
    const { user } = useAuth()
    
    const { isLoading, data: AddClasses = [], refetch } = useQuery({
        queryKey: ['addClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addClasses?email=${user?.email}`)
            return res.json()
        }
    })
    return [isLoading , AddClasses , refetch]
}

export default useClasses;