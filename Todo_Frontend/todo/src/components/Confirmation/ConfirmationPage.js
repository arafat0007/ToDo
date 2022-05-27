import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="px-4 pt-5 my-5 text-center">
                <h1 className="display-4 fw-bold text-success">Congratulations! Registration is Completed.</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Please confirm you email by the link sent and sign in.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" onClick={() => navigate("/signin")}>Sign in</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ConfirmationPage;