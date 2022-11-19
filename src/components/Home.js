import React, {useContext} from 'react';
import {useAuth} from '../context/authContext'


export function Home () {

    //const authContext =useContext(authContext)
    const {user, logout, loading} = useAuth();
    
    const handlerLogout = () =>  {
        logout();
       
    }
    if (loading) <h1>loading...</h1>
    
    return (
        <div>
            <h1>Welcome {user.email}</h1>
              <button onClick={handlerLogout}>Logout  </button>
        </div>
    )
}