import { useNavigate } from 'react-router-dom'; 

export const CheckLogin = () => {
    const navigator= useNavigate();

    if (!sessionStorage.getItem('data')) {
        navigator('login', { replace: true })

    }
}