import React, {useState} from "react";
import UserService from "../../services/UserService";
import {useNavigate} from "react-router-dom";

const SignUpPage = () => {
    const [hasError, setHasError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const [user, setUser] = useState(
        {
            "firstName" : "",
            "lastName" : "",
            "email" : "",
            "password" : ""
        }
    );

    const OnValueChange = (e) => {
      const value = e.target.value;
      setUser({...user, [e.target.name]: value});
    };

    const registerUser = (e) => {
      e.preventDefault();
      UserService.registerUser(user)
          .then(
              (response) => {

                  if (response.data.status === "OK"){
                      navigate("/confirmation");

                  }
                  else {
                      setHasError(true);
                      setErrorMsg(response.data.msg);
                  }
                  //console.log(response);
              }
          )
    }


    return (


        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <h1 className="display-4 fw-bold">Welcome to ToDo App</h1>
            <div className=" text-center py-5" style={{ width : 500 }}>
                <form className="container">

                    {hasError && (
                        <h1 className="h3 mb-3 fw-normal text-danger">{errorMsg}</h1>
                        )}

                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                    <div className="form-floating">
                        <input type="text" value={user.firstName} onChange={(e) => OnValueChange(e)} name="firstName" className="form-control" id="floatingInput"
                               placeholder="john"/>
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating py-1">
                        <input type="text" value={user.lastName} onChange={(e) => OnValueChange(e)} name="lastName" className="form-control" id="floatingInput"
                               placeholder="doe"/>
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>
                        <div className="form-floating py-1">
                            <input type="email" value={user.email} onChange={(e) => OnValueChange(e)} name="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" value={user.password} onChange={(e) => OnValueChange(e)} name="password" className="form-control" id="floatingPassword"
                                   placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={registerUser}>Sign in</button>
                </form>

            </div>
        </div>
    );
};

export default SignUpPage;