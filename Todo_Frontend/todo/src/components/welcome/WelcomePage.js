import React from "react";

const WelcomePage = () => {

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="px-4 pt-5 my-5 text-center">
                <h1 className="display-4 fw-bold">Welcome to ToDo App</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Join here by signing up or login!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">SignUp</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Login</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default WelcomePage;