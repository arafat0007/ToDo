import React from "react";

const SignInPage = () => {

    return (


        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <h1 className="display-4 fw-bold">Welcome to ToDo App</h1>
            <div className=" text-center py-5" style={{ width : 500 }}>
                <form className="container">

                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating py-3">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>

            </div>
        </div>
    );
};

export default SignInPage;