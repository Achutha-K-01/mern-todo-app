function AddTodo({taskData, handleChange, handleSubmit, handleFilter, handleUpdate, editTaskTrue}){

    return(
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <input value={taskData.description} onChange={handleChange} type="text" placeholder="Entet your task" style={{width: "56%", border: "none", borderRadius: "4px", outline: "none", padding: "4px 6px", boxShadow: "0px 0px 2px 0px #9b9b9b", fontSize: "10px"}}/>
            {!editTaskTrue ? (<button onClick={handleSubmit} style={{ cursor: "pointer",border: "none", borderRadius: "4px", padding: "2px 6px",fontSize: "10px", backgroundColor: "#366066", color: "white"}}>Add Todo</button>) : (<button onClick={handleUpdate} style={{ cursor: "pointer",border: "none", borderRadius: "4px", padding: "2px 6px",fontSize: "10px", backgroundColor: "#366066", color: "white"}}>Update</button>)}
            <select onChange={handleFilter} style={{ border: "none", borderRadius: "4px", padding: "2px 6px",fontSize: "10px",backgroundColor: "#366066",color: "white", outline: "none"}}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    )
}

export default AddTodo;