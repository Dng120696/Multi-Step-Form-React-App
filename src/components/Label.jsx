export function Label({ name, children }) {
  return (
    <label
      htmlFor={name}
      className="text-marine-blue block text-xl font-medium mb-2"
    >
      {children}
    </label>
  );
}
