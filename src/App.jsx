import { useEffect, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./Store/Store";
import { ToDo } from "./components/ToDo/ToDo";
import { AddToDo } from "./components/AddToDo/AddToDo";
import { API } from "./Api/api";

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    API.getTodos(dispatch);
  }, []);

  const toDoText = (e) =>
    dispatch({ type: "changeText", payload: e.target.value });

  const add = () => dispatch({ type: "add" });

  const deleteToDo = (id) => dispatch({ type: "delete", id });

  const checked = (id) => dispatch({ type: "checked", id });
  const fetchTodos = () => API.getTodos(dispatch);

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#000308ff",
        }}
      >
        Գրանցիր ինչ ուզում ես
      </h1>

      <ToDo
        state={state}
        toDoText={toDoText}
        add={add}
        fetchTodos={fetchTodos}
      />

      <AddToDo deleteToDo={deleteToDo} toDo={state.todos} checked={checked} />
    </div>
  );
}

export default App;
