import "./ToDo.css";

export const ToDo = ({ state, toDoText, add, fetchTodos }) => {
  return (
    <div className="todo-container">
      <input
        type="text"
        value={state.text}
        onChange={toDoText}
        placeholder="Մի լավ բան ..."
      />
      <button onClick={add}>Գրանցիր</button>
      <button onClick={fetchTodos}>API-ից բերել</button>
    </div>
  );
};
