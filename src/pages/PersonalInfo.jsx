import { InputElement } from "../components/InputElement";
import { Label } from "../components/Label";
import { useState } from "react";
import { useFormContext } from "../context/MultiFormContext";
import { InputError } from "../components/InputError";
import { useNavigate } from "react-router-dom";
import { regexEmail, regexInput, regexNotNegative } from "../utils/regex";
import { Title } from "../components/Title";
import { Info } from "../components/Info";

function PersonalInfo() {
  const [focusedInput, setFocusedInput] = useState(null);
  const { state, validateInput, dispatch } = useFormContext();
  const navigate = useNavigate();
  const {
    isfull_nameError,
    full_nameError,
    isemail_addressError,
    email_addressError,
    isphone_numberError,
    phone_numberError,
    full_name,
    email_address,
    phone_number,
  } = state;

  function handleInputFocus(fieldName) {
    setFocusedInput(fieldName);
  }

  function handleInputBlur() {
    setFocusedInput(null);
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    const validations = {
      full_name: [
        { condition: !full_name, message: "This field is required" },
        {
          condition: full_name.length < 6,
          message: "Must be at least 6 characters",
        },
        {
          condition: !regexInput.test(full_name),
          message: "Only letters allowed",
        },
      ],
      email_address: [
        { condition: !email_address, message: "This field is required" },
        {
          condition: !regexEmail.test(email_address),
          message: "Invalid email",
        },
      ],
      phone_number: [
        { condition: !phone_number, message: "This field is required" },
        {
          condition: !regexNotNegative.test(phone_number),
          message: "Invalid input",
        },
      ],
    };

    for (const [field, fieldValidations] of Object.entries(validations)) {
      for (const { condition, message } of fieldValidations) {
        if (condition) {
          validateInput(field, message);
          return;
        }
      }
    }

    dispatch({ type: "SUBMIT_FORM" });
    navigate("/select_plan");
  }

  return (
    <form
      className="md:flex md:flex-col md:justify-between h-full"
      onSubmit={handleSubmitForm}
    >
      <section className="px-12 py-16 md:pt-16 md:pl-12 md:pr-28 md:pb-10 absolute z-50 md:z-10 md:relative top-1/2 md:top-0  left-1/2 md:left-0 w-[90%] md:w-full md:h-full translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 bg-white shadow-[0_0_1rem_rgba(0,0,0,0.1)] md:shadow-none rounded-xl md:rounded-none">
        <Title>Personal Info</Title>
        <Info>Please provide your name, email address, and phone number</Info>
        <div className="my-10 relative">
          <Label name="full_name"> Name</Label>
          <InputElement
            type="text"
            field="full_name"
            pHolder="e.g. Stephen King"
            isFocused={focusedInput === "full_name"}
            onFocus={() => handleInputFocus("full_name")}
            onBlur={handleInputBlur}
            isError={isfull_nameError}
          />
          {isfull_nameError && <InputError>{full_nameError}</InputError>}
        </div>
        <div className="mb-8 relative">
          <Label name="email_address"> Email Address</Label>
          <InputElement
            type="email"
            field="email_address"
            pHolder="e.g. stephenking@lorem.com"
            isFocused={focusedInput === "email_address"}
            onFocus={() => handleInputFocus("email_address")}
            onBlur={handleInputBlur}
            isError={isemail_addressError}
          />
          {isemail_addressError && (
            <InputError>{email_addressError}</InputError>
          )}
        </div>
        <div className="md:mb-8 relative">
          <Label name="phone_number">Phone Number</Label>
          <InputElement
            type="number"
            field="phone_number"
            pHolder="e.g. 0912 3231 313"
            isFocused={focusedInput === "phone_number"}
            onFocus={() => handleInputFocus("phone_number")}
            onBlur={handleInputBlur}
            isError={isphone_numberError}
          />
          {isphone_numberError && <InputError>{phone_numberError}</InputError>}
        </div>
      </section>
      <div className="absolute md:relative bottom-0 right-0 w-full p-6 md:px-28 flex justify-end items-center bg-white ">
        <button className="px-10 py-4 bg-marine-blue text-magnolia rounded-lg text-xl font-medium overflow-hidden">
          Next Step
        </button>
      </div>
    </form>
  );
}

export default PersonalInfo;
