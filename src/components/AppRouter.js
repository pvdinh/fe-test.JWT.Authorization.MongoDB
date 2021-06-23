import React from "react";
import {BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch, useHistory} from "react-router-dom";
import StudentComponent from "./StudentComponent";
import LoginComponent from "./auth/LoginComponent";


function AppRouter() {
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    <Route path={'/students'} exact render={()=>{
                        return  localStorage.getItem("sessionToken") ? <StudentComponent /> : <Redirect to={'/login'} />
                    }}></Route>
                    <Route path={'/'} exact render={()=>{
                        return  localStorage.getItem("sessionToken") ? <StudentComponent /> : <Redirect to={'/login'} />
                    }}></Route>
                    <Route path={'/login'} exact render={()=>{
                        return  localStorage.getItem("sessionToken") ? <Redirect to={'/students'} /> : <LoginComponent />
                    }}></Route>
                </Switch>
            </Router>
        </BrowserRouter>
    )
}

export default AppRouter