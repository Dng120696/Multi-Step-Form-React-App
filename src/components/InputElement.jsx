import { useFormContext } from "../context/MultiFormContext";

export function InputElement({
  type,
  field,
  pHolder,
  isFocused,
  onFocus,
  onBlur,
  isError,
}) {
  const { handleInput, state } = useFormContext();

  return (
    <input
      type={type}
      name={field}
      id={field}
      value={state[field]}
      className={`p-4 border-[1px] w-full rounded-lg text-xl hover:border-purplish-blue hover:transition-all hover:cursor-pointer ${
        isFocused ? "outline-pastel-blue" : ""
      } ${isError ? "border-strawberry-red" : ""}`}
      placeholder={pHolder}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={handleInput}
    />
  );
}
