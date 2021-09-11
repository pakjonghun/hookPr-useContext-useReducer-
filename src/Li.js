import { COMPLETE, EDIT, REMOVE, UNCOMPLETE } from "./actions";
import Input from "./Input";

function Li({ item: { id, todo, done }, dispatch }) {
  function getDoto(id) {
    const value = prompt("수정할 내용을 입력하세요");
    dispatch({ done, type: EDIT, value, id });
  }

  return (
    <li key={id}>
      <label>
        <Input callBack={getDoto} type="checkBox" name={id} value={id} />
        {todo}
      </label>
      <span onClick={() => dispatch({ done, type: REMOVE, id })}>-</span>
      <span
        onClick={() =>
          dispatch({ done, type: !done ? COMPLETE : UNCOMPLETE, id })
        }
      >
        🖍
      </span>
    </li>
  );
}

export default Li;
