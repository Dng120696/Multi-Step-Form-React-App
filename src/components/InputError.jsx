export function InputError({ children }) {
  return (
    <small className="text-strawberry-red text-lg absolute right-0 top-0 ">
      {children}
    </small>
  );
}
