// eslint-disable-next-line react/prop-types
function Button({ myClick, children }) {
  return (
    <button onClick={myClick} className="button">
      {children}
    </button>
  );
}

export default Button;
