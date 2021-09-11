import React from "react";

function Input({ callBack, ...rest }) {
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;

    if (typeof callBack === "function") {
      callBack(value, name);
    }
  };

  return <input onChange={onChange} {...rest} />;
}

export default Input;
