import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import UserService from "../../services/UserService";
import TaskService from "../../services/TaskService";

const SignInPage = () => {
    const navigate = useNavigate();

    const [hasError, setHasError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Incorrect email or password.");

    const [user, setUser] = useState(
        {
            "email" : "",
            "password" : "",
            "remember_me" : false
        }
    );

    const OnValueChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
    };

    const signinUser = async (e) => {
        e.preventDefault();

        UserService.signinUser(user)
            .then(
                (response) => {
                    if (response.status === 200){
                        console.log(response);
                        setHasError(false);
                        //as session storage is cleared when browser close, we store jwt token in local storage
                        //so that when we close browser and try with new browser, we dont have to login
                        localStorage.setItem("Authorization", response.headers.authorization);
                        //sessionStorage.setItem("Authorization", response.headers.authorization)
                        navigate("/");

                    }
                }
            )
            .catch((error) => {
                setHasError(true);
            });
    }

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <h1 className="display-4 fw-bold">Welcome to ToDo App</h1>

            <div className=" text-center py-5" style={{ width : 500 }}>
                <form className="container">

                    {hasError && (
                        <h1 className="h3 mb-3 fw-normal text-danger">{errorMsg}</h1>
                    )}

                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input type="email" value={user.email} onChange={(e) => OnValueChange(e)} name="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating py-1">
                            <input type="password" value={user.password} onChange={(e) => OnValueChange(e)} name="password" className="form-control" id="floatingPassword"
                                   placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember_me" name="remember_me" onChange={(e) => OnValueChange(e)}/> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={(e) => signinUser(e)}>Sign in</button>
                </form>
            </div>

        </div>
    );
};

export default SignInPage;