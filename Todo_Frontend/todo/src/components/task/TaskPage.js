import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import TaskService from "../../services/TaskService";

const TaskPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({
        title : "",
        description : "",
        taskStatus : "",
        taskPriority : "",
        tag : "",
        createTime : ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await TaskService.getTaskById(id);
                setTask(response.data);
            }catch (error){
                console.log(error);
                navigate("/error");
            }
        };
        fetchData();
    }, []);

    const deleteTask = (e, id) => {
        e.preventDefault();
        TaskService.deleteTask(id).then(navigate("/"));
    };

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="px-4 pt-5 my-5 text-center">

                <div className="container m-5 p-5 rounded mx-auto bg-light shadow" style={{ width : 800}}>

                    <div className="row">

                        <div className="list-group">
                            <div className="list-group-item list-group-item-action" aria-current="true">
                                <div className="d-flex w-100 justify-content-between pt-3">
                                    <h5 className="mb-1">{task.title}</h5>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button className="btn btn-primary" type="button" onClick={() => navigate("/")}>All Task</button>
                                        <button className="btn btn-warning" type="button" onClick={() => navigate("/task/edit/"+id)}>Edit</button>
                                        <button className="btn btn-danger" type="button" onClick={(e, id) => deleteTask(e, id)}>Delete</button>
                                    </div>
                                </div>
                                <div className="d-flex pt-3 pb-2">
                                    <small className="p-2 border border-3 rounded-pill">#{task.taskStatus}</small>
                                    <small className="p-2 mx-2 border border-3 rounded-pill">#{task.taskPriority}</small>
                                    <small className="p-2 border border-3 rounded-pill">#{task.createTime}</small>
                                    <small className="p-2 ms-2 border border-3 rounded-pill">#{task.tag}</small>
                                </div>
                            </div>

                            <div className="list-group-item list-group-item-action">
                                <p className="m-3 text-start">{task.description}</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default TaskPage;