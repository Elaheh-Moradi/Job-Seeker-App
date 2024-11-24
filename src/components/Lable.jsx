export default function Label(props) {
  return (
    <>
      <label className={props.className}>{props.title}</label>
    </>
  );
}
