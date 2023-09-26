export default function Button({ style, onClick, text }) {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}
