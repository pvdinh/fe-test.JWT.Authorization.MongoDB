import {useHistory} from "react-router-dom";
import {Button, Input} from "antd";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import login from "../../redux/actions/loginActions";

function LoginComponent(props) {
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    let history = useHistory()

    useEffect(()=>{
        props.isLogin ? history.replace('/students') : history.replace('/login')
    })

    const login = () =>{
        props.login(user,pass)
    }
    const onChangeUser =(e) =>{
        setUser(e.target.value)
    }
    const onChangePass =(e) =>{
        setPass(e.target.value)
    }
    return (
        <>
            <h1>Login</h1>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                <div>
                    <Input placeholder={"username"} name='username' onChange={(e)=>{onChangeUser(e)}} style={{marginBottom:'20px'}}></Input>
                    <Input placeholder={"password"} name='password' onChange={(e)=>{onChangePass(e)}}></Input>
                </div>
            </div>
            <Button onClick={()=>{login()}}>Login</Button>
        </>
    )
}
function mapStateToProps(state) {
    return{
        isLogin:state.login.isLogin,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        login:(username,password) =>{
            dispatch(login.action.login(username,password))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)