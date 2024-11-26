import Label from "./Lable";

export default function Input(props) {
  return (
    <>
      <input
        className={props.className}
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}