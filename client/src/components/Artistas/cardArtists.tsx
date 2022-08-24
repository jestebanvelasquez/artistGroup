//@ts-nocheck

import { Link, useNavigate } from 'react-router-dom';
import { ArtistArgs } from "../../redux/reducer/artistSlice";
import Swal from 'sweetalert2';

interface ArtistProps {
    artists: ArtistArgs[]
}

export const CardArtists: React.FC<ArtistProps> = ({ artists }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('auth-token')

    const validateToken = (id:string):void=>{
        if(!token){
            Swal.fire('debes iniciar sesion para contratar')
            return navigate('/login')
        }else{
            return navigate(`/contract/artist/${id}`)
        }
    }

    return (
        <div className="flex flex-row flex-wrap bg-gray-100" style={{zIndex: '0'}}>
            {artists && artists.length > 0 ? artists.map((ele, i) => {
                return (
                    <div key={i} className="flex flex-row flex-wrap w-1/3" style={{zIndex: '8'}}>
                        <div className="flex flex-col items-center w-full m-9 bg-white rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="w-full h-80">
                                <img src={ele.img} className="w-full h-full object-cover object-top rounded-full p-7" alt="" />
                            </div>
                            <div className="flex flex-col items-center w-full h-full p-7">
                                <p className="text-3xl text-gray-900 m-2 font-bold">{ele.name}</p>
                                <Link to={`/artists/detail/${ele.id}`} className="px-10 py-2 mt-3 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 active:scale-95 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200">Ver detalles</Link>
                            </div>
                            <div className="flex flex-col items-center w-full h-full p-7">
                                <button onClick={()=>validateToken(ele.id)} className="px-10 py-2 mt-3 text-sm font-medium text-white bg-yellow-400 rounded-lg border border-yellow-300 active:scale-95 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 disabled:cursor-not-allowed transition-colors duration-200">
                                Contratar
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }) : ''}

        </div>
    )
}