import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";
import { useState, useEffect } from "react";
import axios from "axios";
import TaskDashboard from "./components/TaskDashboard";
import PopupModal from "./components/popupModal";

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

  const [popupModal, setPopupModal] = useState({
    showHide: false,
    status: "",
    message: "",
    id: "",
    taskStatus: false
  });

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
        setPopupModal({showHide: true, status: "success", message: "Task Added Successfully"});
        console.log(res.data.data);
        setTaskData({
          description: "",
          createdDate: "",
          status: false,
          priority: ""
        });
      })
      .catch(err => {
        console.log(err);
        setPopupModal({showHide: true, status: "warning", message: "Task & Priority shold not be empty"});
      })
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
          if(res.data.data.status){
            setPopupModal({showHide: true, status: "success", message: "Congratulations, Task Completed Successfully"});
          }
          else{
            setPopupModal({showHide: true, status: "success", message: "Task marked as incompleted"});
          }
        }
      })
      .catch(err => console.log(err))
  }

  const confirmCheck = (id, status) => {
    if(!status){
      setPopupModal({showHide: true, status: "confirmTask",id: id, taskStatus: status, message: "Task is completed?"});
    }
    else{
      setPopupModal({showHide: true, status: "confirmTask",id: id, taskStatus: status, message: "Still Task is not completed?"});
    }
    
  }

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/api/tasks/${id}`)
      .then(res => {
        console.log(res)
        const updatedUserList = todoList.filter(task => task._id !== id);
        setTodoList(updatedUserList);
        setPopupModal({showHide: true, status: "delete", message: "Task Deleted Successfully"});
      })
      .catch(err => {
        console.log(err)
      })
  }

  const confirmDelete = (id) => {
    setPopupModal({showHide: true, id: id, status: "confirmDelete", message: "Do you want to delete the task?"});
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
          setPopupModal({showHide: true, status: "success", message: "Task Updated Successfully"});
          setEditTaskTrue(false)
        }
      })
      .catch(err => {
        console.log(err);
        setPopupModal({showHide: true, status: "warning", message: "Not able to update"});
      })
  }

  const handleFilter = (filterValue) => {
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
    <div style={{ width: "580px", backgroundColor: "rgb(4 78 152 / 8%)", padding: "10px 30px", borderRadius: "4px", margin: "8px 8px", height: "88vh" }}>
      <h3 style={{ textAlign: "center", color: "#0a3663", fontSize: "20px", marginTop: "6px" }}>ADTL - TODO APP</h3>
      <PopupModal handleCheck={handleCheck} handleDelete={handleDelete} setPopupModal={setPopupModal} popupModal={popupModal}/>
      <AddTodo taskData={taskData} handlePriority={handlePriority} handleCancel={handleCancel} editTaskTrue={editTaskTrue} setTaskData={setTaskData} handleChange={handleChange} handleSubmit={handleSubmit} filterType={filterType} setFilterType={setFilterType} handleUpdate={handleUpdate} />
      <TaskDashboard handleFilter={handleFilter} totalTask={totalTask} completedTask={completedTask.length} pendingTask={pendingTask.length} />
      <TodoList handleSort={handleSort} prioritySort={prioritySort} todoList={todoList} setEditTaskTrue={setEditTaskTrue} setTodoList={setTodoList} confirmCheck={confirmCheck} filterType={filterType} confirmDelete={confirmDelete} handleEdit={handleEdit} />
    </div>
  )
}

export default App;