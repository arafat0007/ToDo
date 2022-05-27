import axios from "axios";

const Task_Base_URL = "http://localhost:8080/task";
//const USER_LOGIN_URL = "http://localhost:8080/login";

class TaskService {
    getTasks() {
        return axios.get(Task_Base_URL,
                   {
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : sessionStorage.getItem("Authorization")
                    }
                }
            );
    }

    deleteTask(id) {
        return axios.delete(Task_Base_URL + "/" + id,
            {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : sessionStorage.getItem("Authorization")
                }
            });
    }

    getTaskById(id) {
        return axios.get(Task_Base_URL + "/" + id,
            {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : sessionStorage.getItem("Authorization")
                }
            });
    }

    createTask(task){
        return axios.post(Task_Base_URL+"/create", task,
            {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : sessionStorage.getItem("Authorization")
                }
            });
    }

    editTask(id, task){
        return axios.put(Task_Base_URL+"/"+ id, task,
            {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : sessionStorage.getItem("Authorization")
                }
            });
    }

    //
    // updateEmployee(employee, id) {
    //     return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    // }
}

export default new TaskService();
