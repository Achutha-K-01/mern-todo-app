function TaskDashboard({ totalTask, completedTask, pendingTask }) {
    return (
        <>
            <div style={{ display: "flex", gap: "14px", margin: "16px 0px"}}>
                <div style={{ padding: "8px", backgroundColor: "#34495E", color: "white",  flex: 1, borderRadius: "4px" }}>
                    <h2 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>{totalTask}</h2>
                    <h6 style={{ textAlign: "center", margin: "0px", fontWeight: 500  }}>Total Task</h6>
                </div>
                <div  style={{ padding: "8px", backgroundColor: "#2E7D32", color: "white",  flex: 1, borderRadius: "4px"  }}>
                    <h2 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>{completedTask}</h2>
                    <h6 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>Completed Task</h6>
                </div>
                <div  style={{padding: "8px", backgroundColor: "#F39C12", color: "white",  flex: 1 , borderRadius: "4px" }}>
                    <h2 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>{pendingTask}</h2>
                    <h6 style={{ textAlign: "center", margin: "0px", fontWeight: 500 }}>Pending Task</h6>
                </div>
            </div>
        </>
    )
}

export default TaskDashboard;