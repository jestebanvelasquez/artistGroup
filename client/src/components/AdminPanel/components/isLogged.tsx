import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks"
import { RootState } from "../../../redux/store/store";
import { ValidateToken } from "../../../redux/actions/Users";
import { useEffect } from "react";

export default function IsLogged() {
    const validateLog = useAppSelector((state: RootState) => state.isLogged.status);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(ValidateToken());
    }, [dispatch])
    return (
        <>
            {
                validateLog && !validateLog ?
                    navigate('/login') : ''
            }
        </>
    )
}