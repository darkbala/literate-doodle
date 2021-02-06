import React, { useState, useEffect } from 'react'

export default function Home(props) {
    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token == null){
           props.history.push('/login')
        }
    },[])

    const logOut=()=>{
        localStorage.removeItem('token','')
        this.props.history.push('/login')
    }
    return (
        <div>
            <button onClick={logOut}>lOG OUT</button>
        </div>
    )
}