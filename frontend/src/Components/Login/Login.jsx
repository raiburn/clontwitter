import React, { useState } from 'react';
import isAutenticaced from "../../services/IsAutenticated";
import './Login.css';
import Auth from '../../services/Auth';
import  { Redirect }  from "react-router-dom";

const Login = () => {
    
    const [data, setData] = useState({
        username:"",
        password:""
    });

    const onChange = ({target}) =>{
        setData((state) => {
            return { ...state, [target.name]: target.value}
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        Auth(data);
    }
    if(isAutenticaced()){
        return (
            <Redirect to="/inicio" />
        )
    }
        return (
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src="" id="icon" alt="User Icon" />
                        </div>

                    
                        <form onSubmit={onSubmit}>
                            <input type="text" className="fadeIn second" id="username" placeholder="user"
                             onChange={onChange} value={data.username}/>
                            <input type="password" className="fadeIn third" id="password" placeholder="password"
                             onChange={onChange} value={data.password}/>
                            <input type="submit" className="fadeIn fourth" value="Log In" />
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>

                    </div>
                </div>
        );
    }

export default Login;