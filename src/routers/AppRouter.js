import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RoutineApp from '../components/RoutineApp'
import SignUp from '../components/SingUp'
import SignIn from '../components/SignIn'

const routes = (
    <BrowserRouter>
        <Route path="/" component={RoutineApp} exact={true} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
    </BrowserRouter>
);

export default routes
