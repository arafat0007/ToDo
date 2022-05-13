import React from "react";
import { useNavigate } from "react-router-dom";

const TaskListPage = () => {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="px-4 pt-5 my-5 text-center">

                <div className="container m-5 p-5 rounded mx-auto bg-light shadow" style={{ width : 800}}>

                    <div className="row">
                        <div className="list-group">
                            <div className="list-group-item list-group-item-action" aria-current="true">
                                <div className="d-flex w-100 justify-content-between pt-3 pb-2">
                                    <h5 className="mb-1">UserName's To-Dos</h5>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button className="btn btn-success " type="button">Create a task!</button>
                                        <button className="btn btn-outline-danger" type="button">Logout</button>

                                    </div>
                                </div>
                            </div>

                            <div className="list-group-item list-group-item-action" aria-current="true">
                                <div className="d-flex w-100 justify-content-between pt-2">
                                    <h5 className="mb-1">learn React JS</h5>
                                </div>
                                <div className="d-flex pt-2 pb-2">
                                    <small className="p-2 border border-3 rounded-pill">High</small>
                                    <small className="p-2 mx-2 border border-3 rounded-pill">Processing</small>
                                    <small className="p-2 border border-3 rounded-pill">2022/05/13</small>
                                    <small className="p-2 ms-2 border border-3 rounded-pill">React, Frontend, JS</small>
                                    <button className="btn btn-primary p-2 ms-2 " type="button">Details</button>
                                    <button className="btn btn-warning p-2 ms-2 " type="button">Edit</button>
                                    <button className="btn btn-danger p-2 ms-2 " type="button">Delete</button>
                                </div>
                            </div>


                            <div className="list-group-item list-group-item-action" aria-current="true">
                                <div className="d-flex w-100 justify-content-between pt-2">
                                    <h5 className="mb-1">learn React JS</h5>
                                </div>
                                <div className="d-flex pt-2 pb-2">
                                    <small className="p-2 border border-3 rounded-pill">High</small>
                                    <small className="p-2 mx-2 border border-3 rounded-pill">Processing</small>
                                    <small className="p-2 border border-3 rounded-pill">2022/05/13</small>
                                    <small className="p-2 ms-2 border border-3 rounded-pill">React, Frontend, JS</small>
                                    <button className="btn btn-primary p-2 ms-2 " type="button">Details</button>
                                    <button className="btn btn-warning p-2 ms-2 " type="button">Edit</button>
                                    <button className="btn btn-danger p-2 ms-2 " type="button">Delete</button>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>



            </div>
        </div>
    );
};

export default TaskListPage;