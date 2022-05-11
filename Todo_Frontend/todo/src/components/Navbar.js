import React, { useEffect, useState } from "react";



const Navbar = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ToDoApp</a>
                {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                {/*        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                {/*        aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}


                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <ul className="navbar-nav mb-2 mb-lg-0 ">

                        {!isUserLoggedIn &&(
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Sign Up</a>
                            </li>
                        )}

                        {!isUserLoggedIn &&(
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Login</a>
                            </li>
                        )}

                        {isUserLoggedIn && (
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                UserName
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;