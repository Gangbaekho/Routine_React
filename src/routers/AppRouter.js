import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RoutineApp from '../components/RoutineApp'
import SignUp from '../components/SingUp'

const routes = (
    <BrowserRouter>
        <Route path="/" component={RoutineApp} exact={true} />
        <Route path="/signup" component={SignUp} />
    </BrowserRouter>
);

export default routes
