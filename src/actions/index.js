import axios from 'axios'
import {API} from '../config'

// export const LOGIN = 'LOGIN'

export async function authOrReg (props, url, data){
    const req = axios.post(API + url, data)
    .then((response) => {
        console.log(response)
        localStorage.setItem('token', response.data.key)
        localStorage.setItem('id', response.data.user.id)
        props.history.push('/')
        }, (error) => {
            console.log(error)
        
    });
}