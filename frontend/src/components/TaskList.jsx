function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>Nincsenek feladatok.</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              <b>{t.title}</b> – {t.description}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => deleteTask(t.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
