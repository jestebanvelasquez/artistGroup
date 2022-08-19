import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
//import { getShowDetail } from '../../redux/actions/Shows';
//import { ShowArgs } from '../../redux/reducer/showSlice';

import Navbar from '../Navbar';

export default function ShowDetail() {
    const dispatch = useAppDispatch();
    //const showState = useAppSelector((state: RootState) => state.shows);
    const { id } = useParams();
    //const [showDetail, setShowDetail] = useState<ShowArgs[]>([]);

    /* useEffect(() => {
        if (showState.detail.length > 0) {
            setShowDetail(showState.detail);
        }
    }, [showState]);

    useEffect(() => {
        dispatch(getShowDetail(String(id)));
    }, [dispatch, id]); */

    return (
        {/* <div className="flex justify-center text-center my-20 h-auto">
            <Navbar />
            {
                (showDetail.length > 0) ? <ul className="bg-mikeBlack max-h-fit  w-3/4 mt-5 rounded-t-3xl rounded-b-2xl text-mikeWhite">
                    <div className=" rounded-t-sm shadow-md shadow-mikeWhite">
                        <h2 className="text-2xl font-bold capitalize mt-4 pt-5 px-4 ">
                            {'Artista ' + showDetail[0].nickName}
                        </h2>
                        <h3 className="text-xl font-semibold capitalize mt-5 mb-5 pb-2 px-4">
                            canciones de rap
                            {showDetail[0].eventName}
                        </h3>
                    </div>
                    <div className="">
                        <img className="mx-auto max-h-80 px-8" src={showDetail[0].imagesEvent[0]} alt='sasdfasdfasasdfasdfa' />
                        <p className="text-justify mx-auto mt-4 mb-4 max-w-5xl px-11 ">
                            {showDetail[0].description}
                        </p>
                    </div>
                    <div className="flex">
                        <p className="text-xl mb-3 items-center mx-auto">
                            {showDetail[0].duration + ' $' + showDetail[0].priceTime}
                        </p>
                        <button className="flex mx-auto my-3 items-center text-mikeBlack text-lg font-bold py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 bg-mikeWhite hover:bg-opacity-70">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                            Contratar
                        </button>
                    </div>
                </ul> : ''
            }
        </div> */}
    )
}