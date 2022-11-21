import React, {useContext} from 'react';
import {useAuth} from '../context/authContext'


export function Home () {

    //const authContext =useContext(authContext)
    const {user, logout, loading} = useAuth();
    
    const handlerLogout = () =>  {
        logout();
       
    }
    if (loading) <h1>loading...</h1>

    console.log(user)
    
    return (
        <div className='w-full max-w-xs m-auto text-black'>
            <div className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'>

            <h1 className='text-x1 mb-4'>Welcome {user.displayName || user.email}</h1>
            <h2><img src={user.photoURL} /></h2>
              <button onClick={handlerLogout} className='bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black'>Logout  </button>
            </div>
        </div>
    )
}