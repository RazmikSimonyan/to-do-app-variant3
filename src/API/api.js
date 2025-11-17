import axios from "axios";

export const API = {
  getTodos(dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=8")
      .then((res) =>
        dispatch({
          type: "async-todos",
          payload: res.data.map(todo => ({
            id: todo.id,
            text: todo.title,
            completed: todo.completed
          }))
        })
      );
  },
};