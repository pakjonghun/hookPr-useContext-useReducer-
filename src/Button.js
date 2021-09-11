function Button({ value, ...attrs }) {
  return <button {...attrs}>{value}</button>;
}

export default Button;
