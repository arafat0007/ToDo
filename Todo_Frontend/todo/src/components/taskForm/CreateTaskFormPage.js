import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskService from "../../services/TaskService";
import UserService from "../../services/UserService";

const CreateTaskFormPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState({
        title : "",
        description : "",
        taskStatus : "NEW",
        taskPriority : "LOW",
        tag : "",
        createTime : ""
    });

    const OnValueChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setTask({ ...task, [e.target.name]: value });
    };

    const Save = (e) => {
        e.preventDefault();
            //console.log(task);
            TaskService.createTask(task).then((response) => {
                //console.log(response.data.id);
                navigate("/task/"+response.data.id);
            })
                .catch((error) =>{
                    console.log(error);
                    navigate("/error");
                });
    };

    const Cancel = (e) => {
        e.preventDefault();
        navigate("/");
    };


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await UserService.isUserLoggedIn();
            } catch (error) {
                console.log(error);
                navigate("/error");
            }
            setLoading(false);
        };
        fetchData();
    }, []);

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
                    <div className="container m-5 p-5 rounded mx-auto bg-light shadow" style={{ width : 500}}>

                        <form className="container">

                            <h1 className="h3 mb-3 fw-normal">Create task</h1>

                            <div className="form-floating">
                                <input name="title" type="text" value={task.title} onChange={(e) => OnValueChange(e)} className="form-control" id="floatingInput"
                                       placeholder="john"/>
                                <label htmlFor="floatingInput">Title</label>
                            </div>
                            <div className="form-floating pt-2">
                                <textarea name="description" type="text" value={task.description} onChange={(e) => OnValueChange(e)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label htmlFor="floatingTextarea">Description</label>
                            </div>
                            <div className="form-floating pt-2">
                                <select className="form-select" id="floatingSelect"
                                        aria-label="Floating label select example" onChange={(e) => OnValueChange(e)} name="taskStatus" value={task.taskStatus}>
                                    <option value="NEW">NEW</option>
                                    <option value="PROCESSING">PROCESSING</option>
                                    <option value="HOLD">HOLD</option>
                                    <option value="DONE">DONE</option>
                                    <option value="CANCEL">CANCEL</option>
                                    <option value="CANCEL">CANCEL</option>
                                </select>
                                <label htmlFor="floatingSelect">Status</label>
                            </div>
                            <div className="form-floating pt-2">
                                <select className="form-select" id="floatingSelect"
                                        aria-label="Floating label select example" onChange={(e) => OnValueChange(e)} name="taskPriority" value={task.taskPriority}>
                                    <option value="LOW">LOW</option>
                                    <option value="MEDIUM">MEDIUM</option>
                                    <option value="HIGH">HIGH</option>
                                </select>
                                <label htmlFor="floatingSelect">Priority</label>
                            </div>

                            <div className="form-floating pt-2">
                                <input name="tag" type="text" value={task.tag} onChange={(e) => OnValueChange(e)} className="form-control" id="floatingInput"
                                       placeholder="tag"/>
                                <label htmlFor="floatingInput">Tag</label>
                            </div>

                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center pt-3">
                                <button className="w-100 btn btn-primary" type="submit" onClick={(e) => Save(e)}>Save</button>
                                <button className="w-100 btn btn-danger" type="submit" onClick={(e) => Cancel(e)} >Cancel</button>
                            </div>
                        </form>

                    </div>
                )}

            </div>
        </div>
    );
};

export default CreateTaskFormPage;