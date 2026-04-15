function TodoList({ todoList, handleCheck, handleDelete, filterType, handleEdit }) {
    return (
        <>
            <div style={{ marginTop: "20px", height: "260px" }}>
                {
                    filterType == "All" ?
                        todoList.map((task, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "center", margin: "8px 0px", padding: "2px 0px", backgroundColor: "white", boxShadow: "0px 0px 2px 0px #9b9b9b", borderRadius: "2px" }}>
                                <div style={{ width: "8%" }}>
                                    <input style={{ margin: "0px 10px", height: "8px" }} type="checkbox" checked={task.status} onChange={() => handleCheck(task._id, task.status)} />
                                </div>
                                <div style={{ display: "flex", width: "48%", justifyContent: "space-around" }}>
                                    <p style={{ fontSize: "8px", fontWeight: 400, textDecorationLine: task.status ? "line-through" : "none", textDecorationThickness: "1px", textDecorationColor: "red" }}>{task.description}</p>
                                </div>
                                 <div style={{ display: "flex", width: "28%", justifyContent: "space-around" }}>
                                    <p style={{ fontSize: "8px", fontWeight: 500 }}>{task.createdDate}</p>
                                </div>
                                <div style={{ display: "flex", width: "12%", justifyContent: "space-around" }}>
                                    <button onClick={() => handleEdit(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-edit" style={{ color: "#08353b", fontSize: "10px" }}></i></button>
                                    <button onClick={() => handleDelete(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-trash-o" style={{ color: "#08353b", fontSize: "10px" }}></i></button>
                                </div>
                            </div>
                        ))
                        : filterType == "Completed" ?
                            todoList.filter((task) => task.status == true).map((task, idx) => (
                                <div key={idx} style={{ display: "flex", alignItems: "center", margin: "8px 0px", padding: "2px 0px", backgroundColor: "white", boxShadow: "0px 0px 2px 0px #9b9b9b", borderRadius: "2px" }}>
                                    <div style={{ width: "10%" }}>
                                        <input style={{ margin: "0px 10px", height: "8px" }} type="checkbox" checked={task.status} onChange={() => handleCheck(task._id, task.status)} />
                                    </div>
                                    <div style={{ display: "flex", width: "75%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 500, textDecorationLine: task.status ? "line-through" : "none", textDecorationThickness: "1px", textDecorationColor: "red" }}>{task.description}</p>
                                        <p style={{ fontSize: "8px", fontWeight: 500 }}>{task.createdDate}</p>
                                    </div>
                                    <div style={{ display: "flex", width: "15%", justifyContent: "space-around" }}>
                                        <button style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-edit" style={{ color: "#08353b", fontSize: "10px" }}></i></button>
                                        <button onClick={() => handleDelete(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-trash-o" style={{ color: "#08353b", fontSize: "10px" }}></i></button>
                                    </div>
                                </div>
                            ))
                            :
                            todoList.filter((task) => task.status == false).map((task, idx) => (
                                <div key={idx} style={{ display: "flex", alignItems: "center", margin: "8px 0px", padding: "2px 0px", backgroundColor: "white", boxShadow: "0px 0px 2px 0px #9b9b9b", borderRadius: "2px" }}>
                                    <div style={{ width: "10%" }}>
                                        <input style={{ margin: "0px 10px", height: "8px" }} type="checkbox" checked={task.status} onChange={() => handleCheck(task._id, task.status)} />
                                    </div>
                                    <div style={{ display: "flex", width: "75%", justifyContent: "space-around" }}>
                                        <p style={{ fontSize: "8px", fontWeight: 500, textDecorationLine: task.status ? "line-through" : "none", textDecorationThickness: "1px", textDecorationColor: "red" }}>{task.description}</p>
                                        <p style={{ fontSize: "8px", fontWeight: 500 }}>{task.createdDate}</p>
                                    </div>
                                    <div style={{ display: "flex", width: "15%", justifyContent: "space-around" }}>
                                        <button style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-edit" style={{ color: "#08353b", fontSize: "10px" }}></i></button>
                                        <button onClick={() => handleDelete(task._id)} style={{ border: "none", backgroundColor: "white" }}><i className="fa fa-trash-o" style={{ color: "#08353b", fontSize: "10px" }}></i></button>
                                    </div>
                                </div>
                            ))
                }

            </div>
        </>
    )
}

export default TodoList;