import axios from 'axios';
import Swal from 'sweetalert2';
import { isLogged, isLogout } from '../reducer/loggedSlice';
import { AppThunk } from "../store/store";

interface LoginUserProps {
    email: string;
    password: string;
}

export const LoginUser = (arr: LoginUserProps): AppThunk => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:4000/users/login', arr);
        dispatch(isLogged());
        localStorage.setItem('auth-token', data.token);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Te has logeado correctamente.`,
            showConfirmButton: false,
            timer: 1500
        });
    } catch (error) {
        console.log(error);
    }
}

export const ValidateToken = (): AppThunk => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:4000/users/validateToken', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth-token')}`
            }
        });
        if (data.authorized === false) {
            dispatch(isLogout());
        }
    } catch (error) {

    }
}