import "./AddToDo.css";

export const AddToDo = ({ toDo, deleteToDo, checked }) => {
  return (
    <div className="list">
      {toDo.map((item) => (
        <div key={item.id} className="todo-item">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => checked(item.id)}
          />

          <span className={item.completed ? "done" : ""}>{item.text}</span>

          {item.completed && <span className="marked-label">Լրացված է</span>}

          <button onClick={() => deleteToDo(item.id)} className="delete-btn">
            ✖
          </button>
          
        </div>
      ))}
    </div>
  );
};
