import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks"
import { RootState } from "../../redux/store/store";
import { getAllArtists, getArtistByName } from "../../redux/actions/Artists";

import { CardArtists } from "./cardArtists";
import Navbar from "../Navbar";

export default function AllArtists() {

    const dispatch = useAppDispatch();
    const artistState = useAppSelector((state: RootState) => state.artists.artists);
    //const loginRole = useAppSelector((state:RootState)=> state.users.role.rol)
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get("name") !== null) {
            //Get Artists By Name
            dispatch(getArtistByName(searchParams.get("name")!));
        }
        return () => { };
    }, [dispatch, searchParams]);

    useEffect(() => {
        if (artistState && artistState.length === 0) {
            dispatch(getAllArtists())
        }
    }, [dispatch, artistState]);


    return (
        <>
            <Navbar />
            {/* <div>
                {loginRole  ? <div className="container">
                <CardShows shows={shows} />
            </div> : <div><h1>no tienes permisos</h1></div>}
            </div> */}
            <div className="container">
                <CardArtists artists={artistState} />
            </div>
        </>
    )
}