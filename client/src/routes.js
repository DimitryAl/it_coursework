import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Booklist} from './pages/Booklist'
import {Addbook} from './pages/Addbook'
import {Myinfo} from './pages/Info'
import {Edit} from './pages/Editbook'


export const useRoutes = () => {
    return (
        <Switch>
            <Route path='/books' exact>
                <Booklist />
            </Route>
            <Route path='/addbook' exact>
                <Addbook />
            </Route>
            <Route path='/myinfo' exact>
                <Myinfo />
            </Route>
            <Route path='/edit' render={props => (<Edit {...props}/>)} exact> 
            </Route>
            <Redirect to="/books"/>
        </Switch>
    )
}
