export const initialState = {
  text: "",
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changeText":
      return { ...state, text: action.payload };

    case "add":
      if (!state.text.trim()) return state;
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: state.text, completed: false },
        ],
        text: "",
      };

    case "delete":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.id),
      };

    case "checked":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.id ? { ...t, completed: !t.completed } : t
        ),
      };

    case "async-todos":
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
