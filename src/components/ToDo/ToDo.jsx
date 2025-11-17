import "./ToDo.css";

export const ToDo = ({ state, toDoText, add, fetchTodos }) => {
  return (
    <div className="todo-container">
      <input
        type="text"
        value={state.text}
        onChange={toDoText}
        placeholder="i.e. watch a movie, be a lover of a married woman"
      />
      <br />
      <button onClick={add}>Add a Task</button>
      <button onClick={fetchTodos}>Generate Dummy Values from API</button>
    </div>
  );
};
