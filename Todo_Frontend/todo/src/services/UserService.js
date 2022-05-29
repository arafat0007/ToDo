import axios from "axios";

const USER_REGIS_URL = "http://localhost:8080/registration";
const USER_LOGIN_URL = "http://localhost:8080/login";
const USER_LOGOUT_URL = "http://localhost:8080/logout";
const USER_LOGOUT_CHECK_URL = "http://localhost:8080/IsUserLoggedin";
const USER_NAME_URL = "http://localhost:8080/username";

class UserService {
    registerUser(user){
        return axios.post(USER_REGIS_URL, user
            ,   {
            headers: {
                "Content-Type" : "application/json"
            }
        }
        );
    }

    signinUser(user){
        return axios.post(USER_LOGIN_URL, user
            ,   {
                headers: {
                    "Content-Type" : "application/json"
                }
            }
        );
    }

    logout(){
        return axios.post(USER_LOGOUT_URL
            ,   {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : localStorage.getItem("Authorization")
                }
            }
        );
    }

    isUserLoggedIn(){
        return axios.get(USER_LOGOUT_CHECK_URL
            ,   {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : localStorage.getItem("Authorization")
                }
            }
        );
    }

    getUserName(){
        return axios.get(USER_NAME_URL
            ,   {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : localStorage.getItem("Authorization")
                }
            }
        );
    }
}

export default new UserService();
