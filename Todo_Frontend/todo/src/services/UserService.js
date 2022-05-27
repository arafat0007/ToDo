import axios from "axios";

const USER_REGIS_URL = "http://localhost:8080/registration";
const USER_LOGIN_URL = "http://localhost:8080/login";
const USER_LOGOUT_URL = "http://localhost:8080/bal";
const USER_LOGOUT_CHECK_URL = "http://localhost:8080/IsUserLoggedin";

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
                    "Authorization" : sessionStorage.getItem("Authorization")
                }
            }
        );
    }

    isUserLoggedIn(){
        return axios.get(USER_LOGOUT_CHECK_URL
            ,   {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : sessionStorage.getItem("Authorization")
                }
            }
        );
    }

    // saveEmployee(employee) {
    //     return axios.post(EMPLOYEE_API_BASE_URL, employee);
    // }
    //
    // getEmployees() {
    //     return axios.get(EMPLOYEE_API_BASE_URL);
    // }
    //
    // deleteEmployee(id) {
    //     return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    // }
    //
    // getEmployeeById(id) {
    //     return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    // }
    //
    // updateEmployee(employee, id) {
    //     return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    // }
}

export default new UserService();
