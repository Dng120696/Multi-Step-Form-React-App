import { createContext, useCallback, useContext, useReducer } from "react";
import { initialState } from "../store/initialState";
import reducer from "../store/reducer";

const FormContext = createContext();

function FormProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInput(e) {
    const { name, value } = e.target;

    dispatch({ type: "SET_INPUT", payload: { name, value } });
  }

  function validateInput(field, message) {
    dispatch({ type: "VALIDATE_INPUT", payload: { field, message } });
  }

  const checkError = (error) =>
    error ? "border-1 border-rose-500" : "border-[1px_solid_rgba(0,0,0,0.1)]";

  const inputStyle = useCallback(
    (error) => `border p-4 rounded-sm text-xl w-full ${checkError(error)}`,
    []
  );

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
        checkError,
        inputStyle,
        validateInput,
        handleInput,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) throw new Error("context is outside the Provider");
  return context;
}

export { FormProvider, useFormContext };
