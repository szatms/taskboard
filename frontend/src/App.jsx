import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  // 1️⃣ Betöltjük a backendről
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:8081/api/tasks");
    setTasks(response.data);
  };

  // 2️⃣ Új task hozzáadása
  const addTask = async (newTask) => {
    await axios.post("http://localhost:8081/api/tasks", newTask);
    fetchTasks(); // <-- újra lekérjük a friss listát
  };

  // 3️⃣ Task törlése
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8081/api/tasks/${id}`);
    fetchTasks(); // <-- újra lekérjük a friss listát
  };

  return (
    <div>
      <h1>Task Board</h1>
      <TaskForm addTask={addTask} />  {/* <--- addTask prop név megegyezik */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
