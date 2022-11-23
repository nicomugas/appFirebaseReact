import { async } from '@firebase/util';
import React, {useState} from 'react';
import {useAuth} from '../context/authContext'
import NavBar from './NavBar';


export function Home () {

    //const authContext =useContext(authContext)
    const {user, logout, loading} = useAuth();
  
    const handlerLogout = () =>  {
        logout();
       
    }
    if (loading) <h1>loading...</h1>
    





    
    return (
        <div className='w-full '>
                <NavBar/>
        <div className='w-full max-w-xs m-auto text-black px-8 pt-6 pb-8 mb-4'>
           
            <div className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'>

            <h1 className='text-x1 mb-4'>Welcome {user.displayName || user.email}</h1>
           
              
            </div>
        </div>
        </div>
    )
}