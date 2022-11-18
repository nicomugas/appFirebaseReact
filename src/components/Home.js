import React, {useContext} from 'react';
import {useAuth} from '../context/authContext'

export function Home () {

    //const authContext =useContext(authContext)
    const authContext = useAuth();
    console.log(authContext);
    return (
        <h1>Estoy en home</h1>
    )
}