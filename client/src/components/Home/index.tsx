import auriculares from '../../media/auriculares.png';
import wave8 from '../../media/wave8.svg';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex h-screen flex-col">
                <div className="flex flex-row h-full items-center w-full">
                    <div className="w-1/2 flex flex-row items-center justify-center">
                        <img src={auriculares} className="w-2/3 animate-[floating_3s_ease-in-out_infinite]" alt="" />
                    </div>
                    <div className="w-1/2 px-7">
                        <h1 className="text-end text-gray-500 font-extrabold text-6xl mb-6">Artist App</h1>
                        <p className="my-4 text-lg text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt, quia et qui aut quo eaque molestias itaque placeat! Nihil molestiae eligendi nemo tenetur quia ratione aut maiores aspernatur recusandae.</p>
                        <Link to="/artists">
                            <button className="inline-block px-10 py-2 ml-2 text-sm font-medium text-white bg-red-500 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 float-right">Descubrir artistas 🙌</button>
                        </Link>
                    </div>
                </div>

                <div className="absolute w-full h-full flex items-end -z-50">
                    <img src={wave8} className="w-full" alt="" />
                </div>
            </div>
        </>
    )
}