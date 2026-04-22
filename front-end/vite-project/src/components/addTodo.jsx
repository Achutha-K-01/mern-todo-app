function AddTodo({taskData, handleChange, handleSubmit, handleFilter, handleUpdate, editTaskTrue, handleCancel}){

    return(
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <input value={taskData.description} onChange={handleChange} type="text" placeholder="Entet your task" style={{width: "54%",fontFamily: "Montserrat", border: "none", borderRadius: "4px", outline: "none", padding: "4px 6px", boxShadow: "0px 0px 2px 0px #e7f3ff", fontSize: "10px"}}/>
            {!editTaskTrue ? (<button onClick={handleSubmit} style={{ cursor: "pointer",border: "none", borderRadius: "4px",fontFamily: "Montserrat", padding: "2px 6px",fontSize: "10px", backgroundColor: "#15487a", color: "white"}}>Add Todo</button>) : (<><button onClick={handleUpdate} style={{ cursor: "pointer",border: "none",fontFamily: "Montserrat", borderRadius: "4px", padding: "2px 6px",fontSize: "10px", backgroundColor: "#366066", color: "white",  margin: "0px 2px"}}>Update</button> <button onClick={handleCancel} style={{ cursor: "pointer",border: "none",fontFamily: "Montserrat", borderRadius: "4px", padding: "2px 6px",fontSize: "10px", backgroundColor: "rgb(204, 13, 13)", color: "white", margin: "0px 2px 0px 0px"}}>x</button></>)}
            <select onChange={handleFilter} style={{ border: "none", borderRadius: "4px", padding: "2px 6px",fontSize: "10px",fontFamily: "Montserrat",backgroundColor: "#15487a",color: "white", outline: "none"}}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    )
}

export default AddTodo;