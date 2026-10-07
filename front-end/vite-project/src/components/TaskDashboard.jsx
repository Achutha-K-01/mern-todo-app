function TaskDashboard({ totalTask, completedTask, pendingTask, handleFilter }) {
    return (
        <>
            <div style={{ display: "flex", gap: "14px", margin: "16px 0px"}}>
                <div id="totalTaskCard" onClick={()=>handleFilter("All")} style={{ padding: "8px", backgroundColor: "#15487a", color: "white",  flex: 1, borderRadius: "4px" }}>
                    <h2 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>{totalTask}</h2>
                    <h6 style={{ textAlign: "center", margin: "0px", fontWeight: 500  }}>Total Task</h6>
                </div>
                <div id="completedTaskCard" onClick={()=>handleFilter("Completed")} style={{ padding: "8px", backgroundColor: "#2E7D32", color: "white",  flex: 1, borderRadius: "4px"  }}>
                    <h2 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>{completedTask}</h2>
                    <h6 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>Completed Task</h6>
                </div>
                <div id="pendingTaskCard" onClick={()=>handleFilter("Pending")} style={{padding: "8px", backgroundColor: "#F39C12", color: "white",  flex: 1 , borderRadius: "4px" }}>
                    <h2 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>{pendingTask}</h2>
                    <h6 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>Pending Task</h6>
                </div>
            </div>
        </>
    )
}

export default TaskDashboard;