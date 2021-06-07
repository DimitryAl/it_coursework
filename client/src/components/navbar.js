import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <div class="nav-wrapper pink darken-2 ">
            {/* <a href="#!" class="brand-logo center">  <i class="large material-icons">library_books</i></a> */}
            <div class="brand-logo center"><NavLink to="/books"><i class="material-icons">book</i></NavLink></div>
            <ul class="left hide-on-med-and-down">
                <li><NavLink to="/books">Книги</NavLink></li>
                <li><NavLink to="/addbook">Добавить</NavLink></li>
                <li><NavLink to="/myinfo">Информация о разработчике</NavLink></li>
            </ul>
        </div>
        </nav>
    )
}