import React from "react";
import Button from "./Button";
import Li from "./Li";
import Input from "./Input";
import { useDispatch } from "./Context";
import List from "./List";
import { ADD } from "./actions";

function App() {
  const [state, dispatch] = useDispatch();
  return (
    <div className="App">
      <List title={"Todo"}>
        {state.todos.map((item) => (
          <Li key={item.id} item={item} dispatch={dispatch} />
        ))}
      </List>
      <List title={state.complete.length === 0 && "Complete"}>
        {state.complete.map((item) => (
          <Li key={item.id} item={item} dispatch={dispatch} />
        ))}
      </List>
      <Input
        placeholder="할일을 적자"
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            dispatch({ type: ADD, todo: e.target.value });
          }
        }}
      />
    </div>
  );
}

export default App;
