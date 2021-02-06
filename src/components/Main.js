import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'

export default function Main() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path ="/login" component={Login} />
                <Route exact path ="/" component={Home} />
            </Switch>
        </div>
    )
}
