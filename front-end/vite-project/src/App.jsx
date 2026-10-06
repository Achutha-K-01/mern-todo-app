import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";
import { useState, useEffect } from "react";
import axios from "axios";
import TaskDashboard from "./components/TaskDashboard";

function App() {
  const [taskData, setTaskData] = useState({
    description: "",
    createdDate: "",
    status: false,
    priority: ""
  });

  const [prioritySort, setPrioritySort] = useState("Low")

  const [editTaskTrue, setEditTaskTrue] = useState(false);
  const [todoList, setTodoList] = useState([]);

  let totalTask = todoList.length;
  let completedTask = todoList.filter(task => task.status == true);
  let pendingTask = todoList.filter(task => task.status == false)

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
          status: false,
          priority: ""
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
    console.log(editTask[0])
    setTaskData(editTask[0]);
    setEditTaskTrue(true);
  }

  const handleUpdate = () => {
    let { _id, description, priority } = taskData;
    console.log(taskData)
    axios.patch(`http://localhost:3000/api/tasks/${_id}`, { description: description, priority })
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
            status: false,
            priority: ""
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
      status: false,
      priority: ""
    });
    setEditTaskTrue(false);
  }

  const handlePriority = (e) => {
    setTaskData({ ...taskData, priority: e.target.value });
  }

  const handleSort = () => {
    const newSort = prioritySort === "Low" ? "High" : "Low";
    setPrioritySort(newSort);
    const priorityOrder = {
      High: 1,
      Medium: 2,
      Low: 3
    };

    const sortedPriorityList = [...todoList].sort((a, b) =>
      newSort === "High"
        ? priorityOrder[b.priority] - priorityOrder[a.priority]
        : priorityOrder[a.priority] - priorityOrder[b.priority]
    );

    setTodoList(sortedPriorityList);
  }

  return (
    <div style={{ width: "580px", backgroundColor: "#e6eef5", padding: "10px 30px", borderRadius: "4px", margin: "8px 8px", height: "88vh" }}>
      <h3 style={{ textAlign: "center", color: "#0a3663", fontSize: "20px", marginTop: "6px" }}>ADTL - TODO APP</h3>
      <AddTodo taskData={taskData} handlePriority={handlePriority} handleCancel={handleCancel} editTaskTrue={editTaskTrue} setTaskData={setTaskData} handleChange={handleChange} handleSubmit={handleSubmit} filterType={filterType} handleFilter={handleFilter} setFilterType={setFilterType} handleUpdate={handleUpdate} />
      <TaskDashboard totalTask={totalTask} completedTask={completedTask.length} pendingTask={pendingTask.length} />
      <TodoList handleSort={handleSort} prioritySort={prioritySort} todoList={todoList} setEditTaskTrue={setEditTaskTrue} setTodoList={setTodoList} handleCheck={handleCheck} filterType={filterType} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  )
}

export default App;