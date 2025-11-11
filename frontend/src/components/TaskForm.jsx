import { useState } from "react";

function TaskForm({ addTask }) {   // <--- itt átnevezve onAdd -> addTask
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description, done: false }); // <--- itt is addTask
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Cím"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Leírás"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Hozzáadás</button>
    </form>
  );
}

export default TaskForm;
