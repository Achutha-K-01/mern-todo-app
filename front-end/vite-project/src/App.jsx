import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";
import { useState, useEffect } from "react";
import axios from "axios";
import TaskDashboard from "./components/TaskDashboard";

function App() {
  const [taskData, setTaskData] = useState({
    description: "",
    createdDate: "",
    status: false
  });

  const [editTaskTrue, setEditTaskTrue] = useState(false);
  const [todoList, setTodoList] = useState([]);

  let  totalTask = todoList.length;
  let  completedTask = todoList.filter(task => task.status == true);
  let  pendingTask = todoList.filter(task => task.status == false)

  const [filterType, setFilterType] = useState("All");

  const handleChange = (e) => {
    let tadskDes = e.target.value;
    setTaskData({ ...taskData, description: tadskDes, createdDate: new Date().toISOString() });
  }

  const handleSubmit = () => {
    setTaskData(taskData)
    axios.post("http://localhost:3000/api/tasks", taskData)
      .then(res => {
        setTodoList([...todoList, res.data.data]);
        console.log(res.data.data);
        setTaskData({
          description: "",
          createdDate: "",
          status: false
        })
      })
      .catch(err => console.log(err))
  }

  //todoList Component States

  useEffect(() => {
    axios.get("http://localhost:3000/api/tasks")
      .then(res => setTodoList(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleCheck = (id, status) => {
    axios.patch(`http://localhost:3000/api/tasks/${id}`, { status: !status })
      .then(res => {
        console.log(res)
        if (res.status == 200) {
          console.log(res.data.data);
          setTodoList(tasks =>
            tasks.map(task =>
              task._id == id ? res.data.data : task
            )
          )
        }
      })
      .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3000/api/tasks/${id}`)
      .then(res => {
        console.log(res)
        const updatedUserList = todoList.filter(task => task._id !== id);
        setTodoList(updatedUserList);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleEdit = (id) => {
    let editTask = todoList.filter(item => item._id == id);
    setTaskData(editTask[0]);
    setEditTaskTrue(true);
  }

  const handleUpdate = () => {
    let { _id, description } = taskData;
    console.log(description);
    axios.patch(`http://localhost:3000/api/tasks/${_id}`, { description: description })
      .then(res => {
        if (res.status == 200) {
          setTodoList(tasks =>
            tasks.map(task =>
              task._id == _id ? res.data.data : task
            )
          )
          setTaskData({
            description: "",
            createdDate: "",
            status: false
          });
          setEditTaskTrue(false)
        }
      })
      .catch(err => console.log(err))
  }

  const handleFilter = (e) => {
    // console.log(e.target.value);
    let filterValue = e.target.value;
    setFilterType(filterValue)
  }

  const handleCancel = () => {
    setTaskData({
      description: "",
      createdDate: "",
      status: false
    });
    setEditTaskTrue(false);
  }

  return (
    <div style={{ width: "380px", backgroundColor: "#e7f3ff", padding: "10px 30px", borderRadius: "4px", margin: "30px 10px", minHeight: "80vh" }}>
      <h3 style={{ textAlign: "center", color: "#15487a" }}>TODO APP</h3>
      <AddTodo taskData={taskData} handleCancel={handleCancel} editTaskTrue={editTaskTrue} setTaskData={setTaskData} handleChange={handleChange} handleSubmit={handleSubmit} filterType={filterType} handleFilter={handleFilter} setFilterType={setFilterType} handleUpdate={handleUpdate} />
      <TaskDashboard totalTask ={totalTask} completedTask={completedTask.length} pendingTask={pendingTask.length}/>
      <TodoList todoList={todoList} setEditTaskTrue={setEditTaskTrue} setTodoList={setTodoList} handleCheck={handleCheck} filterType={filterType} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  )
}

export default App;