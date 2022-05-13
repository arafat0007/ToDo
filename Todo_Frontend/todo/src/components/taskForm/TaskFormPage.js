import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskFormPage = () => {
    const [createFlag, setCreateFlag] = useState(true);
    const [editFlag, setEditFlag] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="px-4 pt-5 my-5 text-center">

                <div className="container m-5 p-5 rounded mx-auto bg-light shadow" style={{ width : 500}}>

                    <form className="container">

                        {createFlag && (<h1 className="h3 mb-3 fw-normal">Create task</h1>)}
                        {editFlag && (<h1 className="h3 mb-3 fw-normal">Edit task</h1>)}

                        <div className="form-floating">
                            <input type="FirstName" className="form-control" id="floatingInput"
                                   placeholder="john"/>
                            <label htmlFor="floatingInput">Title</label>
                        </div>
                        <div className="form-floating pt-2">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Description</label>
                        </div>
                        <div className="form-floating pt-2">
                            <select className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                <option value="1">New</option>
                                <option value="2">Processing</option>
                                <option value="3">hold</option>
                                <option value="4">Complete</option>
                                <option value="5">Cancel</option>
                            </select>
                            <label htmlFor="floatingSelect">Status</label>
                        </div>
                        <div className="form-floating pt-2">
                            <select className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                            </select>
                            <label htmlFor="floatingSelect">Priority</label>
                        </div>

                        <div className="form-floating pt-2">
                            <input type="FirstName" className="form-control" id="floatingInput"
                                   placeholder="tag"/>
                            <label htmlFor="floatingInput">Tag</label>
                        </div>

                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center pt-3">
                            <button className="w-100 btn btn-primary" type="submit">Save</button>
                            <button className="w-100 btn btn-danger" type="submit">Cancel</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default TaskFormPage;