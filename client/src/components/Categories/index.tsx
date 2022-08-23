import { useEffect } from "react";
import { getAllCategories } from "../../redux/actions/Categories";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { RootState } from "../../redux/store/store";
import Navbar from "../Navbar";
import CardCategories from "./cardCategories";

export default function Categories() {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state: RootState) => state.categories.data);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    console.log(categories);
    return (
        <>
            <Navbar />
            <div className="container bg-gray-100">
                <CardCategories categories={categories} />
            </div>
        </>
    )
}