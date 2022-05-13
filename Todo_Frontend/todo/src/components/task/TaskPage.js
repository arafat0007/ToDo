import React from "react";
import { useNavigate } from "react-router-dom";

const TaskPage = () => {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="px-4 pt-5 my-5 text-center">

                <div className="container m-5 p-5 rounded mx-auto bg-light shadow" style={{ width : 800}}>

                    <div className="row">

                        <div className="list-group">
                            <div className="list-group-item list-group-item-action" aria-current="true">
                                <div className="d-flex w-100 justify-content-between pt-3">
                                    <h5 className="mb-1">Task name</h5>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button className="btn btn-primary" type="button">All Task</button>
                                        <button className="btn btn-warning" type="button">Edit</button>
                                        <button className="btn btn-danger" type="button">Delete</button>
                                    </div>
                                </div>
                                <div className="d-flex pt-3 pb-2">
                                    <small className="p-2 border border-3 rounded-pill">#TaskStatus</small>
                                    <small className="p-2 mx-2 border border-3 rounded-pill">#TaskPriority</small>
                                    <small className="p-2 border border-3 rounded-pill">#CreateTime</small>
                                    <small className="p-2 ms-2 border border-3 rounded-pill">#TaskTag</small>
                                </div>
                            </div>

                            <div className="list-group-item list-group-item-action">
                                <p className="m-3 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default TaskPage;