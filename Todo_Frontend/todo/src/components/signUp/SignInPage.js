import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import UserService from "../../services/UserService";
import TaskService from "../../services/TaskService";

const SignInPage = () => {
    const navigate = useNavigate();

    const [hasError, setHasError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [user, setUser] = useState(
        {
            email : "",
            password : ""
        }
    );

    const OnValueChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
    };

    const signinUser = (e) => {
        e.preventDefault();

        UserService.signinUser(user)
            .then(
                (response) => {
                    console.log(user);
                    if (response.status === 200){
                        console.log(response);
                        console.log("responseasdasdasd");
                        sessionStorage.setItem("Authorization", response.headers.authorization)
                        navigate("/");

                    }
                    else if(response.status === 401) {
                        setHasError(true);
                        setErrorMsg("Incorrect email or password.");
                        console.log("respoasdasdnse");
                    }
                    //console.log(response.headers);
                }
            );

        // try {
        //     console.log(user);
        //     UserService.signinUser(user).then((response) => {
        //         console.log(response);
        //         navigate("/");
        //     });
        // }catch (error){
        //     //console.log(error);
        //     navigate("/error");
        // }

        // UserService.signinUser(user).then((response) => {
        //             console.log(response);
        //             navigate("/");
        //         });
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
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={(e) => signinUser(e)}>Sign in</button>
                </form>
            </div>

        </div>
    );
};

export default SignInPage;