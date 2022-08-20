//@ts-nocheck
import { Link } from "react-router-dom";
import { useAppSelector } from '../../../redux/hooks/hooks';
import { useState } from 'react';

export default function TableUsers() {

    const users = useAppSelector(state => state.users.data)


    const [avaliable, setAvaliable] = useState()


    // console.log(users.map(el => el.persona.isAvaliable));
const handleChange = (e) => {
    setAvaliable()
}
    

        const head =  [
            'Image', 'Names', 'email' , 'Rol' , 'Ubication', 'Available'  
        ]

    
    // max-w-1xl 
    return (
        <>
            <div className=" h-screen mx-auto">
                <div className=" flex flex-col">
                                <h1>Table Users</h1>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block m-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            {
                                                head.map((e, i) => {
                                                    return (
                                                        <th key={i} scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 capitalize dark:text-gray-400">
                                                            {e}
                                                        </th>
                                                    )
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y  divide-gray-800 dark:bg-gray-800 dark:divide-gray-00">
                                        {
                                            users.map((e, i) => {
                                                return (
                                                    <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><img className="h-12 rounded-full" src={e.image} alt="LLO" /></td>
                                                        <Link to=':id'> 
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.persona.name} {e.persona.lastname}</td>
                                                        </Link>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.email}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.rol}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{e.persona.city} {e.persona.country}</td>
                                                        { e.persona.isAvaliable ? <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">true</td> : <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">false</td> }
                                                        {/* <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{avaliable}</td> */}
                                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                            {/* <Link to=':id' className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer whitespace-nowrap">Edit</Link> */}
                                                        </td>
                                                        <td className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer whitespace-nowrap">
                                                            { e.persona.isAvaliable ?  <td onChange={(e) =>handleChange(e)}>Deshabilitar</td> : <td onClick={() =>setAvaliable(true)}>Habilitar</td>}
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





