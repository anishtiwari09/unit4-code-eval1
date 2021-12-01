export default function Button({ onClick, title }) {
    return (
      <>
        <button onClick={onClick}>{title}</button>
      </>
    );
  }
  