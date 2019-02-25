import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <BrowserRouter >
        <Switch>
            <Route path='/' exact={true} component={Todo}/>
            <Route path='/about' component={About}/>
            <Redirect from='*' to='/'/>
        </Switch>
        
    </BrowserRouter>
)