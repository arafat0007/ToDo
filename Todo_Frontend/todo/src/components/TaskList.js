import React from "react";

const TaskList = () => {
    return (

        <div className="modal modal-tour position-static d-block py-1" tabIndex="-1" role="dialog"
             id="modalTour">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-6 shadow">
                    <div className="modal-body p-5">
                        <h2 className="fw-bold mb-0">What's new</h2>

                        <ul className="d-grid gap-4 my-5 list-unstyled">
                            <li className="d-flex gap-4">
                                <svg className="bi text-muted flex-shrink-0" width="48" height="48">
                                    <use href="#grid-fill"/>
                                </svg>
                                <div>
                                    <h5 className="mb-0">Grid view</h5>
                                    Not into lists? Try the new grid view.
                                </div>
                            </li>
                            <li className="d-flex gap-4">
                                <svg className="bi text-warning flex-shrink-0" width="48" height="48">
                                    <use href="#bookmark-star"/>
                                </svg>
                                <div>
                                    <h5 className="mb-0">Bookmarks</h5>
                                    Save items you love for easy access later.
                                </div>
                            </li>
                            <li className="d-flex gap-4">
                                <svg className="bi text-primary flex-shrink-0" width="48" height="48">
                                    <use href="#film"/>
                                </svg>
                                <div>
                                    <h5 className="mb-0">Video embeds</h5>
                                    Share videos wherever you go.
                                </div>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-primary mt-5 w-100"
                                data-bs-dismiss="modal">Great, thanks!
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TaskList;