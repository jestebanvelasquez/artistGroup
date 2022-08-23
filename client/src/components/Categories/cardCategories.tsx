import { Link } from "react-router-dom";

export default function cardCategories() {
    return (
        <>
            <div className="flex flex-row flex-wrap bg-gray-100" style={{ zIndex: '0' }}>
                <div className="flex flex-row flex-wrap w-1/3" style={{ zIndex: '8' }}>
                    <div className="flex flex-col items-center w-full m-9 bg-white rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="w-full h-80">
                            <img src="#" className="w-full h-full object-cover object-top rounded-full p-7" alt="Imagen" />
                        </div>
                        <div className="flex flex-col items-center w-full h-full p-7">
                            <p className="text-3xl text-gray-900 m-2 font-bold">Nombre de la categoría</p>
                            <Link to="#" className="px-10 py-2 mt-3 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 active:scale-95 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200">Ver detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}