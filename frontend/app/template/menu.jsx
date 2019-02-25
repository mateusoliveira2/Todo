import React from 'react'
import './menu-css.css'
import { Link } from 'react-router-dom'

export default props => (
    <nav className='navbar'>
        <div className='container-itens'>
            <div className='logo'>
                <a className='name-logo' href='#'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>
            </div>
            <div className='navbar-collapse collapse'>
                <ul className='menu-list'>
                    <li className='menu-item'><a href='/'>Tarefas</a></li>
                    <li className='menu-item'><a href='/about'>Sobre</a></li>
                </ul>
            </div>
        </div>

    </nav>
)