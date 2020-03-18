import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RoutineApp from '../components/RoutineApp'
import SignUp from '../components/SingUp'
import SignIn from '../components/SignIn'
import SummaryRenderPage from '../components/SummaryRenderPage'
import WelcomePage from '../components/WelcomePage'

const routes = (
    <BrowserRouter>
        <Route path="/" component={RoutineApp} exact={true} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/summary/:username" component={SummaryRenderPage} />
        <Route path="/welcome/:username" component={WelcomePage} />
    </BrowserRouter>
);

export default routes
