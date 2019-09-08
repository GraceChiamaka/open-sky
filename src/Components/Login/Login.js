import React, { useState } from 'react';

import history from '../common/index';
import Aux from '../../hoc/hoc';
import  Header from '../common/header';

import './Login.css';

const Login = (props) => {
    const [error, setError] = useState(false);

   
    const loginUser = (ev) => {
        ev.preventDefault();
        setError(false);
        const loginData = {
            username: ev.target.elements.username.value.trim().toLowerCase(),
            password: ev.target.elements.password.value.trim().toLowerCase(),
        };
        if(loginData.username !== 'demo' && loginData.password !== "demo"){
            setError(true);
            return ;
        }
        setError(false);
        history.push('/dashboard');
    };
    return(
        <Aux>
            <Header />
            <div className="Login">
                <h3 className="text-center">Login to get started</h3>
                {error &&
                    (<h3 className="text-danger text-center">Incorrect login details</h3>)
                }
                <form onSubmit={loginUser}>
                    <div className="form-group mt-5">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="form-control" required />
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" required />
                    </div>
                    <div className="form-group text-center mt-5">
                        <button type="submit" className="btn btn-md btn-white px-5">Login</button>
                    </div>
                </form>
            </div>
            
        </Aux>
    );
}
export default Login;