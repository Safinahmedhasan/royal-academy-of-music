import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const UseCart = () => {
    const { user } = useContext(AuthContext);



    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://royel-music-academy-server-safinahmedhasan.vercel.app/carts?email=${user?.email}`)
            return res.json();
        }
    })
    return [cart, refetch]

};

export default UseCart;