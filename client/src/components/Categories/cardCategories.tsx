import { Link } from "react-router-dom";
import { Categories } from "../../redux/reducer/categorySlice";

interface cardCategoriesProps {
    categories: Categories[];
}

export default function cardCategories({ categories }: cardCategoriesProps) {
    return (
        <>
            <div className="flex flex-col flex-wrap">
                <div className="flex flex-row justify-center">
                    {categories && categories.length > 0 ? categories.map((c, i) =>
                        <div key={i} className="flex flex-col items-center w-full m-9 p-5 text-center bg-white rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                            <p className="text-3xl text-gray-900 m-2 font-bold">{c.name}</p>
                            <Link to={`/artists?category=${c.id}`} className="px-10 py-2 mt-3 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 active:scale-95 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200">Explorar artistas</Link>
                        </div>
                    ) : <div className="flex flex-col items-center my-10">
                        <p className="text-4xl font-light">No se encontraron categorías</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-36 w-36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>}
                </div>
            </div>
        </>
    )
}