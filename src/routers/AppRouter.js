import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RoutineApp from '../components/RoutineApp'
import SignUp from '../components/SingUp'
import SignIn from '../components/SignIn'
import SummaryRenderPage from '../components/SummaryRenderPage'
import WelcomePage from '../components/WelcomePage'
import SummaryForm from '../components/SummaryForm'
import SummaryDetail from '../components/SummaryDetail'
const routes = (
    <BrowserRouter>
        <Route path="/" component={RoutineApp} exact={true} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/summary/:username" component={SummaryRenderPage} exact={true} />
        <Route path="/summary/:username/:id" component={SummaryDetail} />
        <Route path="/welcome/:username" component={WelcomePage} />
        <Route path="/summary/:username/create-summary" component={SummaryForm} />
    </BrowserRouter>
);

export default routes
