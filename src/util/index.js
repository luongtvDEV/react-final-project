import { useNavigate } from 'react-router-dom'; 

export const CheckLogin = () => {
    const navigator= useNavigate();
    if (sessionStorage.getItem('data')===null) {
        navigator("/login",{ replace: true });
    }
}