function TodoList({ todoList, handleCheck, confirmDelete, filterType, handleEdit, prioritySort, handleSort }) {
    const lowPriorityStyle = {
        fontSize: "8px",
        fontWeight: 500,
        color: "#8f8f3e",
        backgroundColor: "#8f8f3e33",
        padding: "1px 4px",
        borderRadius: "10px",
        border: "1px solid #8f8f3e"
    }
    const mediumPriorityStyle = {
        fontSize: "8px",
        fontWeight: 500,
        color: "#d3791f",
        backgroundColor: "#ffb36652",
        padding: "1px 4px",
        borderRadius: "10px",
        border: "1px solid #ffb266"
    }
    const highPriorityStyle = {
        fontSize: "8px",
        fontWeight: 500,
        color: "#aa0404",
        backgroundColor: "#ff040428",
        padding: "1px 4px",
        borderRadius: "10px",
        border: "1px solid #aa0404"
    }
    return (
        <>
            <div style={{ fontSize: "8px", fontWeight: 600, textAlign: "center", display: "flex", alignItems: "center", margin: "20px 2px 8px 2px", padding: "6px 0px", backgroundColor: "#15487a", color: "white", boxShadow: "0px 0px 2px 0px #9b9b9b", borderRadius: "2px" }}>
                <div style={{ width: "8%" }}>
                    <p>Status</p>
                </div>
                <div style={{ display: "flex", width: "48%", justifyContent: "space-around" }}>
                    <p>Description</p>
                </div>
                <div onClick={handleSort} style={{ cursor: "pointer", display: "flex", width: "14%", justifyContent: "space-around" }}>
                    <p>Priority</p>
                    <p style={{marginLeft: "-40px",marginTop: "-4px",color: "white", border: "none", fontSize: "14px", fontWeight: 400}}>{prioritySort == "Low" ? "↑" :  "↓" }</p>
                </div>
                <div style={{ display: "flex", width: "18%", justifyContent: "space-around" }}>
                    <p>Created Date</p>
                </div>
                {/* <div style={{ width: "1%" }}>
                </div> */}
                <div style={{ display: "flex", width: "10%", justifyContent: "space-evenly" }}>
                    <p>Action</p>
                </div>
            </div>
            <div className="container" style={{ marginTop: "-8px", maxHeight: "220px", overflowY: "auto", scrollbarWidth: "thin" }}>
                {
                    filterType == "All" ?
                        todoList.map((task, idx) => (
                            <div className="taskList" key={idx} style={{ display: "flex", alignItems: "center", margin: "6px 2px", padding: "2px 0px", backgroundColor: "white", boxShadow: "0px 0px 2px 1px #c9d9e9", borderRadius: "2px" }}>
                                <div style={{ width: "8%" }}>
                                    <input style={{ margin: "0px 10px", height: "8px" }} type="checkbox" checked={task.status} onChange={() => handleCheck(task._id, task.status)} />
                                </div>
                                <div style={{ display: "flex", width: "48%", justifyContent: "space-around" }}>
                                    <p style={{ fontSize: "8px", fontWeight: 400, textDecorationLine: task.status ? "line-through" : "none", textDecorationThickness: "0.8px", textDecorationColor: "black" }}>{task.description}</p>
                                </div>
                                <div style={{ display: "flex", width: "14%", justifyContent: "space-around" }}>
                                    <p
                                            style={
                                                task.priority === "Low"
                                                    ? lowPriorityStyle
                                                    : task.priority === "Medium"
                                                        ? mediumPriorityStyle
                                                        : highPriorityStyle
                                            }
                                        >
                                            {task.priority}
                                        </p>
                                </div>
                                <div style={{ display: "flex", width: "18%", justifyContent: "space-around" }}>
                                    <p style={{ fontSize: "8px", fontWeight: 500 }}>{new Date(task.createdDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
                                </div>
                                <div style={{ display: "flex", width: "10%", justifyContent: "space-evenly" }}>
                                    <button onClick={() => handleEdit(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-edit" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                    <button onClick={() => confirmDelete(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-trash-o" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                </div>
                            </div>
                        ))
                        : filterType == "Completed" ?
                            todoList.filter((task) => task.status == true).map((task, idx) => (
                                <div className="taskList" key={idx} style={{ display: "flex", alignItems: "center", margin: "6px 2px", padding: "2px 0px", backgroundColor: "white", boxShadow: "0px 0px 2px 1px #c9d9e9", borderRadius: "2px" }}>
                                    <div style={{ width: "8%" }}>
                                        <input style={{ margin: "0px 10px", height: "8px" }} type="checkbox" checked={task.status} onChange={() => handleCheck(task._id, task.status)} />
                                    </div>
                                    <div style={{ display: "flex", width: "48%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 400, textDecorationLine: task.status ? "line-through" : "none", textDecorationThickness: "0.8px", textDecorationColor: "black" }}>{task.description}</p>
                                    </div>
                                    <div style={{ display: "flex", width: "14%", justifyContent: "space-around" }}>
                                        <p
                                            style={
                                                task.priority === "Low"
                                                    ? lowPriorityStyle
                                                    : task.priority === "Medium"
                                                        ? mediumPriorityStyle
                                                        : highPriorityStyle
                                            }
                                        >
                                            {task.priority}
                                        </p>
                                    </div>
                                    <div style={{ display: "flex", width: "18%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 500 }}>{new Date(task.createdDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
                                    </div>
                                    <div style={{ display: "flex", width: "10%", justifyContent: "space-evenly" }}>
                                        <button onClick={() => handleEdit(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-edit" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                        <button onClick={() => confirmDelete(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-trash-o" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                    </div>
                                </div>
                            ))
                            :
                            todoList.filter((task) => task.status == false).map((task, idx) => (
                                <div className="taskList" key={idx} style={{ display: "flex", alignItems: "center", margin: "6px 2px", padding: "2px 0px", backgroundColor: "white", boxShadow: "0px 0px 2px 1px #c9d9e9", borderRadius: "2px" }}>
                                    <div style={{ width: "8%" }}>
                                        <input style={{ margin: "0px 10px", height: "8px" }} type="checkbox" checked={task.status} onChange={() => handleCheck(task._id, task.status)} />
                                    </div>
                                    <div style={{ display: "flex", width: "48%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 400, textDecorationLine: task.status ? "line-through" : "none", textDecorationThickness: "0.8px", textDecorationColor: "black" }}>{task.description}</p>
                                    </div>
                                    <div style={{ display: "flex", width: "14%", justifyContent: "space-around" }}>
                                        <p
                                            style={
                                                task.priority === "Low"
                                                    ? lowPriorityStyle
                                                    : task.priority === "Medium"
                                                        ? mediumPriorityStyle
                                                        : highPriorityStyle
                                            }
                                        >
                                            {task.priority}
                                        </p>
                                    </div>
                                    <div style={{ display: "flex", width: "18%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 500 }}>{new Date(task.createdDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
                                    </div>
                                    <div style={{ display: "flex", width: "10%", justifyContent: "space-evenly" }}>
                                        <button onClick={() => handleEdit(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-edit" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                        <button onClick={() => confirmDelete(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-trash-o" style={{ color: "#15487a", fontSize: "10px" }}></i></button>
                                    </div>
                                </div>
                            ))
                }

            </div>
        </>
    )
}

export default TodoList;