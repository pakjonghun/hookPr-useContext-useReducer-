import React from "react";

function List({ title, children }) {
  return (
    <section className="List">
      <h1>{title}</h1>
      <ul>{children}</ul>
    </section>
  );
}
export default List;
