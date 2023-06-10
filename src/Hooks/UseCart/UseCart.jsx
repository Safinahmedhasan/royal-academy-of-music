import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const UseCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');



    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, { headers: {
                authorization: `bearer ${token}`
            }})
            return res.json();
        },
        // queryFn: async () => {
        //     const response = await axiosSecure(`/carts?email=${user?.email}`)
        //     console.log('res from axios', response);
        //     return response.data;
        // },
    })
    return [cart, refetch]

};

export default UseCart;