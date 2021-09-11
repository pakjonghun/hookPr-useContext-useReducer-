import { v4 as uuidv4 } from "uuid";
import { ADD, COMPLETE, EDIT, REMOVE, UNCOMPLETE } from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case EDIT:
      const key = !action.done ? "todos" : "complete";
      return {
        ...state,
        [key]: state[key].map((item) => {
          if (item.id === action.id) {
            item.todo = action.value;
          }
          return item;
        }),
      };

    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuidv4(), todo: action.todo, done: false },
        ],
      };
    case REMOVE:
      return {
        ...state,
        ...(action.done && {
          complete: state.complete.filter((item) => item.id !== action.id),
        }),
        todos: state.todos.filter((item) => item.id !== action.id),
      };

    case COMPLETE:
      const complete = state.todos.find((item) => item.id === action.id);
      complete.done = true;
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
        complete: [...state.complete, complete],
      };

    case UNCOMPLETE:
      const todo = state.complete.find((item) => item.id === action.id);
      return {
        ...state,
        todos: [...state.todos, todo],
        complete: state.complete.filter((item) => item.id !== todo.id),
      };
    default:
      return;
  }
}

export default reducer;
