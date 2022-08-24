import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks"
import { RootState } from "../../redux/store/store";
import { getAllArtists, getArtistByIdCategory, getArtistByName } from "../../redux/actions/Artists";

import { CardArtists } from "./cardArtists";
import Navbar from "../Navbar";

export default function AllArtists() {

    const dispatch = useAppDispatch();
    const artist = useAppSelector((state: RootState) => state.artists.data);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get("name") !== null) {
            //Get Artists By Name
            dispatch(getArtistByName(searchParams.get("name")!));
        } else if(searchParams.get("category") !== null) {
            //Get Artist By Category
            dispatch(getArtistByIdCategory(searchParams.get("category")!));
        }
        return () => { };
    }, [dispatch, searchParams]);

    useEffect(() => {
        dispatch(getAllArtists());
    }, [dispatch]);


    return (
        <>
            <Navbar />

            <div className="container">
                <CardArtists artists={artist} />
            </div>
        </>
    )
}