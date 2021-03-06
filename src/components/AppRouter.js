import React from "react";
import {BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch, useHistory} from "react-router-dom";
import StudentComponent from "./StudentComponent";
import LoginComponent from "./auth/LoginComponent";
import ListStudentInMajorClassComponent from "./majorsClass/ListStudentInMajorClassComponent";
import Component403 from "./403/Component403";


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
                    <Route path={'/class/:id'} exact render={(props)=>{
                        return  localStorage.getItem("sessionToken") ? <ListStudentInMajorClassComponent {...props} /> : <Redirect to={'/login'} />
                    }}></Route>
                    <Route path={'/login'} exact render={()=>{
                        return  localStorage.getItem("sessionToken") ? <Redirect to={'/students'} /> : <LoginComponent />
                    }}></Route>
                    <Route path={'/403'} exact render={()=>{
                        return  <Component403 />
                    }}></Route>
                </Switch>
            </Router>
        </BrowserRouter>
    )
}

export default AppRouter