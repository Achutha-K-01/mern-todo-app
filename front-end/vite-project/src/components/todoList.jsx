function TodoList({ todoList, handleCheck, handleDelete, filterType, handleEdit }) {
    return (
        <>
            <div style={{ fontSize: "8px", fontWeight: 600, textAlign: "center", display: "flex", alignItems: "center", margin: "20px 0px 8px 0px", padding: "6px 0px", backgroundColor: "#15487a", color: "white", boxShadow: "0px 0px 2px 0px #9b9b9b", borderRadius: "2px" }}>
                <div style={{ width: "10%" }}>
                    <p>Status</p>
                </div>
                <div style={{ display: "flex", width: "46%", justifyContent: "space-around" }}>
                    <p>Description</p>
                </div>
                <div style={{ display: "flex", width: "28%", justifyContent: "space-around" }}>
                    <p>Created Date</p>
                </div>
                <div style={{ width: "3%" }}>
                </div>
                <div style={{ display: "flex", width: "11%", justifyContent: "space-evenly" }}>
                    <p>Action</p>
                </div>
            </div>
            <div className="container" style={{ marginTop: "-8px", maxHeight: "260px", overflowY: "auto", scrollbarWidth: "thin" }}>
                {
                    filterType == "All" ?
                        todoList.map((task, idx) => (
                            <div className="taskList" key={idx} style={{ display: "flex", alignItems: "center", margin: "8px 0px", padding: "2px 0px", backgroundColor: "white", boxShadow: "0px 0px 2px 0px #e7f3ff", borderRadius: "2px" }}>
                                <div style={{ width: "8%" }}>
                                    <input style={{ margin: "0px 10px", height: "8px" }} type="checkbox" checked={task.status} onChange={() => handleCheck(task._id, task.status)} />
                                </div>
                                <div style={{ display: "flex", width: "48%", justifyContent: "space-around" }}>
                                    <p style={{ fontSize: "8px", fontWeight: 400, textDecorationLine: task.status ? "line-through" : "none", textDecorationThickness: "0.8px", textDecorationColor: "black" }}>{task.description}</p>
                                </div>
                                <div style={{ display: "flex", width: "28%", justifyContent: "space-around" }}>
                                    <p style={{ fontSize: "8px", fontWeight: 500 }}>{new Date(task.createdDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
                                </div>
                                <div style={{ width: "3%" }}>
                                </div>
                                <div style={{ display: "flex", width: "11%", justifyContent: "space-evenly" }}>
                                    <button onClick={() => handleEdit(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-edit" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                    <button onClick={() => handleDelete(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-trash-o" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                </div>
                            </div>
                        ))
                        : filterType == "Completed" ?
                            todoList.filter((task) => task.status == true).map((task, idx) => (
                                <div className="taskList" key={idx} style={{ display: "flex", alignItems: "center", margin: "8px 0px", padding: "2px 0px", backgroundColor: "white", boxShadow: "0px 0px 2px 0px #e7f3ff", borderRadius: "2px" }}>
                                    <div style={{ width: "8%" }}>
                                        <input style={{ margin: "0px 10px", height: "8px" }} type="checkbox" checked={task.status} onChange={() => handleCheck(task._id, task.status)} />
                                    </div>
                                    <div style={{ display: "flex", width: "48%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 400, textDecorationLine: task.status ? "line-through" : "none", textDecorationThickness: "0.8px", textDecorationColor: "black" }}>{task.description}</p>
                                    </div>
                                    <div style={{ display: "flex", width: "28%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 500 }}>{task.createdDate}</p>
                                    </div>
                                    <div style={{ width: "3%" }}>
                                    </div>
                                    <div style={{ display: "flex", width: "11%", justifyContent: "space-evenly" }}>
                                        <button onClick={() => handleEdit(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-edit" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                        <button onClick={() => handleDelete(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-trash-o" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                    </div>
                                </div>
                            ))
                            :
                            todoList.filter((task) => task.status == false).map((task, idx) => (
                                <div className="taskList" key={idx} style={{ display: "flex", alignItems: "center", margin: "8px 0px", padding: "2px 0px", backgroundColor: "white", boxShadow: "0px 0px 2px 0px #e7f3ff", borderRadius: "2px" }}>
                                    <div style={{ width: "8%" }}>
                                        <input style={{ margin: "0px 10px", height: "8px" }} type="checkbox" checked={task.status} onChange={() => handleCheck(task._id, task.status)} />
                                    </div>
                                    <div style={{ display: "flex", width: "48%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 400, textDecorationLine: task.status ? "line-through" : "none", textDecorationThickness: "0.8px", textDecorationColor: "black" }}>{task.description}</p>
                                    </div>
                                    <div style={{ display: "flex", width: "28%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 500 }}>{task.createdDate}</p>
                                    </div>
                                    <div style={{ width: "3%" }}>
                                    </div>
                                    <div style={{ display: "flex", width: "11%", justifyContent: "space-evenly" }}>
                                        <button onClick={() => handleEdit(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-edit" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                        <button onClick={() => handleDelete(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-trash-o" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                    </div>
                                </div>
                            ))
                }

            </div>
        </>
    )
}

export default TodoList;