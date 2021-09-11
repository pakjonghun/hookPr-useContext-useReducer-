import React, { createContext, useReducer, useContext } from "react";
import reducer from "./Reducer";
export const UserContext = createContext();

function Context({ children }) {
  const init = { todos: [], complete: [] };
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useDispatch() {
  const { state, dispatch } = useContext(UserContext);
  return [state, dispatch];
}

export default Context;
