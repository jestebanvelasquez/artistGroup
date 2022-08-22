import axios from 'axios';
import { isLogout } from '../reducer/loggedSlice';
import { AppThunk } from "../store/store";
import { getAll } from '../reducer/usersSlice';
import { FormRegisterProps } from '../../components/Register';
import Swal from 'sweetalert2';
import { createPerson, PersonCreateProps } from './Person';
import { ArtistCreateProps, createArtist } from './Artists';
import { asignarRol, getRoleByName } from './Roles';
import { RUTA_APP } from '../..';

interface UserPostProps {
    email: string;
    password: string;
    [key: string]: any;
}

export const createUser = async (arr: FormRegisterProps) => {
    const PersonData: PersonCreateProps = {
        name: arr.name,
        lastname: arr.lastname,
        city: arr.city,
        country: arr.country
    }
    const UserData: UserPostProps = {
        email: arr.email,
        password: arr.password
    }
    const ArtistData: ArtistCreateProps = {
        name: arr.nameArtist,
        img: arr.imgArtist,
        descripcion: arr.descriptionArtist === '' ? null : arr.descriptionArtist
    }
    //Create Person
    return await createPerson(PersonData)
        .then(person => {
            //Create User
            let idPerson = person.id;
            if (idPerson) {
                UserData.idPersona = idPerson;
                return axios.post(`${RUTA_APP}users/register`, UserData);
            }
        }).then(userData => {
            //Se crea el artista
            let idUser = userData!.data.user.id;
            if (idUser && arr.isArtist === 'true') {
                //Si es artista se le crea el rol de artista y de usuario también
                getRoleByName('USUARIO')
                    .then(roles => {
                        let idRol = roles[0].id;
                        if (idRol) {
                            return asignarRol({ idUsuario: idUser, idRol });
                        }
                    }).then(() => {
                        getRoleByName('ARTISTA')
                            .then(roles => {
                                let idRol = roles[0].id;
                                if (idRol) {
                                    return asignarRol({ idUsuario: idUser, idRol })
                                }
                            })
                    }).catch(error => {
                        console.log(error);
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: error.response.data.message,
                            showConfirmButton: true,
                            timer: 5000
                        });
                    })
                ArtistData.idUsuario = idUser;
                return createArtist(ArtistData);
            } else {
                //Sino es artista se crea el rol de usuario
                getRoleByName('USUARIO')
                    .then(roles => {
                        let idRol = roles[0].id;
                        if (idRol) {
                            return asignarRol({ idUsuario: idUser, idRol })
                        }
                    }).then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "Se ha creado un usuario exitosamente.",
                            showConfirmButton: true,
                            timer: 5000
                        });
                    }).catch((error) => {
                        console.log(error);
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: error.response.data.message,
                            showConfirmButton: true,
                            timer: 5000
                        });
                    });
            }
        }).then(artist => {
            if (artist) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Se ha creado un usuario vinculad@ a un artista.",
                    showConfirmButton: true,
                    timer: 5000
                });
            }
        });
}

export const LogoutUser = (): AppThunk => async () => {
    try {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('role');
    } catch (error) {
        console.log(error);
    }
}

export const ValidateToken = (): AppThunk => async (dispatch) => {
    try {
        const { data } = await axios.get(`${RUTA_APP}users/validateToken`, {
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

export const getAllUsers = (): AppThunk => async (dispatch) => {
    // dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}users`);
    dispatch(getAll(data));
    // dispatch(isLoading(false));
}