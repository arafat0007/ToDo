import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import TaskService from "../../services/TaskService";
import UserService from "../../services/UserService";

const TaskListPage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState(null);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await TaskService.getTasks();
                setTasks(response.data);
                console.log(response.data);
                UserService.getUserName().then((res) => {
                    setUserName(res.headers.username);
                    console.log(res);
                })
            }catch (error){
                navigate("/signin");
                console.log(error)
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const createTask = (e) => {
        e.preventDefault();
        navigate("/task/create/");
    };

    const showTask = (e, id) => {
        e.preventDefault();
        navigate("/task/"+id);
    };

    const editTask = (e, id) => {
        e.preventDefault();
        navigate("/task/edit/"+id);
    };

    const deleteTask = (e, id) => {
        e.preventDefault();
        TaskService.deleteTask(id).then((res) => {
            if (tasks){
                setTasks((prevElement) => {
                    return prevElement.filter((task) => task.id !== id);
                });
            }
        })
    };

    const Logout = (e) => {
        e.preventDefault();
            UserService.logout().then((response) => {
                //console.log(response);
                localStorage.clear();
                navigate("/signin");
                }
            )
                .catch((error) =>{
                    navigate("/error");
                    //console.log(error);
                });
    };

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="px-4 pt-5 my-5 text-center">

                {loading && (
                    <div>
                    <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                    <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                    <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-info" role="status">
                    <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-light" role="status">
                    <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"></span>
                    </div>
                    </div>
                    )}

                {!loading && (
                    <div className="container m-5 p-5 rounded mx-auto bg-light shadow" style={{ width : 800}}>

                        <div className="row">
                            <div className="list-group">
                                <div className="list-group-item list-group-item-action" aria-current="true">
                                    <div className="d-flex w-100 justify-content-between pt-3 pb-2">
                                        <h5 className="mb-1">{userName}'s To-Dos</h5>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-success " type="button" onClick={(e) => createTask(e)}>Create a task!</button>
                                            <button className="btn btn-outline-danger" type="button" onClick={(e) => Logout(e)}>Logout</button>

                                        </div>
                                    </div>
                                </div>

                                {!loading && tasks.length ? (
                                    tasks.map(
                                        (task) =>(
                                            <div className="list-group-item list-group-item-action" aria-current="true">
                                                <div className="d-flex w-100 justify-content-between pt-2">
                                                    <h5 className="mb-1">{task.title}</h5>
                                                </div>
                                                <div className="d-flex pt-2 pb-2">
                                                    <small className="p-2 border border-3 rounded-pill">{task.taskPriority}</small>
                                                    <small className="p-2 mx-2 border border-3 rounded-pill">{task.taskStatus}</small>
                                                    <small className="p-2 border border-3 rounded-pill">{task.createTime}</small>
                                                    <small className="p-2 ms-2 border border-3 rounded-pill">{task.tag}</small>
                                                    <button className="btn btn-primary p-2 ms-2" onClick={(e, id) => showTask(e, task.id)} type="button">Details</button>
                                                    <button className="btn btn-warning p-2 ms-2" onClick={(e, id) => editTask(e, task.id)} type="button">Edit</button>
                                                    <button className="btn btn-danger p-2 ms-2" onClick={(e, id) => deleteTask(e, task.id)} type="button">Delete</button>
                                                </div>
                                            </div>
                                        )
                                    )
                                ) : (
                                    <div className="list-group-item list-group-item-action" aria-current="true">
                                    <div className="d-flex w-100 justify-content-between pt-2">
                                        <h5 className="mb-1">There is no task.</h5>
                                    </div>
                                </div>
                                )}

                            </div>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};

export default TaskListPage;