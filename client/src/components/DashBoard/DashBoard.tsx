//@ts-nocheck
import React from 'react'
import NavAdmin from './NavAdmin'
import { useDispatch } from 'react-redux';
import { getAllEvents } from '../../redux/actions/Events';
import { getAllUsers } from '../../redux/actions/Users';
// import { useAppSelector } from '../../redux/hooks/hooks';
import { useState } from 'react';
import TableEvents from './Tables/TableEvents';
import TableUsers from './Tables/TableUsers';



export default function DashBoard() {

    // const events = useAppSelector(state => state.events.events)
    // const users = useAppSelector(state => state.users.data)

    const [searchName , setSearchName] = useState('')

    const [view, setView] = useState({
        tableUser: true,
        tableEvent: false
        // tableUser: false

    })

    // console.log(events);
    // console.log(users);
    // console.log(searchName);


    const dispatch = useDispatch()

    
    const allEvents = () => {
        dispatch(getAllEvents())
        setView({
            tableUser : false,
            tableEvent: true
        })
    }
    const allUsers = () => {
        dispatch(getAllUsers())
        setView({
            tableUser : true,
            tableEvent: false
        })
    }
    console.log(view);

    return (
        <div className='flex flex-row flex-wrap bg-gray-100'>
            <NavAdmin
                searchName= { searchName }
                setSearchName = { setSearchName }
                allEvents = { allEvents }
                allUsers  = { allUsers }
            />
            { 
                view.tableEvent? <TableEvents/> : view.tableUser? <TableUsers/> : 'no hay nada'
                
            }   

        </div>
    )
}
