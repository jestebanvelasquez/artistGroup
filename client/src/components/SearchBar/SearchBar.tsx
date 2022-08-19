import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { getAllArtists } from "../../redux/actions/Artists";

export default function SearchBar() {
    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>("");
    const navigate = useNavigate();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const searchByName = () => {
        navigate(`/artists?name=${name}`);
    }

    const resetByName = () => {
        setName("");
        navigate(`/artists`);
        dispatch(getAllArtists());
    }

    return (
        <>
            <div className="flex items-center">
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" onChange={onChangeHandler} placeholder="Search ..." />
                    <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                    </button>
                </div>
                <button type="button" className="flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300" onClick={searchByName}>
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
                <button type="button" className="flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-red-500 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300" onClick={resetByName}>
                    Reset
                </button>
            </div>
        </>
    )
}