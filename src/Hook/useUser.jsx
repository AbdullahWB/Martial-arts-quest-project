import useAuth from "./useAuth"

const useUser = () => {
    const { user } = useAuth()
    const { isLoading, data : users = {}} = useUser({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user.email}`)
            return res.json()
        }
    })

    return [users, isLoading]
}

export default useUser;