import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import{bindActionCreators} from 'redux'
import {authOrReg} from '../../actions'

function Login(props) {
    const [h, setH] = useState('Войти')
    const [authOrReg, setauthOrReg] = useState('/login/')
    const [p, setP] = useState('Зарегистрироваться')
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    
    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token != null){
           props.history.push('/')
        }
    })
    const setParametrs=()=>{
        if(authOrReg == '/login/'){
            setH('Регистрация')
            setauthOrReg('/registration/')
            setP('Войти')
        }else{
            setH('Войти')
            setauthOrReg('/login/')
            setP('Зарегистрироваться')
        } 
    }

    const registration= (e)=>{
        let val = e.target.value
        let data = {}
        
        if(val == '/login/'){
            data['username'] = login
            data['password'] = pass 
        }else{
            data['username'] = login
            data['password1'] = pass
            data['password2'] = pass 
        }
        let url='dj-rest-auth'+val
        props.authOrReg(props, url, data)
    }
    return (
        <div>
            <div className='wrapper'>
                <div className="card">
                    <h3>{h}</h3>
                    <input
                        type="text" 
                        placeholder='name' 
                        value={login}
                        onChange={(event)=>{
                            setLogin(event.target.value)
                        }}
                        />
                    <br/>
                    <input 
                        type="password" 
                        placeholder='password'
                        value={pass}
                        onChange={(event)=>{
                            setPass(event.target.value)
                        }}
                        />
                    <br/>
                    
                    <button 
                        value={authOrReg} 
                        onClick={(event)=>{
                            registration(event)
                        }}
                    >Войти</button>
                    <p onClick={setParametrs}>{p}</p>
                </div>
            </div>
        </div>
    )
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({authOrReg}, dispatch)
}
export default connect(null, mapDispatchToProps)(Login)