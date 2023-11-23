function reducer(state, action) {
  switch (action.type) {
    case "SET_INPUT": {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
        [`${name}Error`]: "",
        [`is${name}Error`]: false,
        validError: "",
        isvalidError: false,
      };
    }
    case "VALIDATE_INPUT": {
      const { field, message } = action.payload;
      return {
        ...state,
        [`${field}Error`]: message,
        [`is${field}Error`]: true,
        validError: "",
      };
    }
    case "SUBMIT_FORM":
      return { ...state, full_name: "", email_address: "", phone_number: "" };
    case "SET_BILL":
      return {
        ...state,
        isYearly: !state.isYearly,
        bill_value: state.isYearly
          ? state.bill_value / 10
          : state.bill_value * 10,
      };
    case "ACTIVE_BILL": {
      const { name, value } = action.payload;
      return { ...state, active_bill: name, bill_value: value };
    }
    case "SET_ACTIVE_ADD_ONS": {
      const filterAddOns = state.add_ons.map((ons) =>
        ons.id == action.payload ? { ...ons, isChecked: !ons.isChecked } : ons
      );
      return { ...state, add_ons: filterAddOns };
    }
    default:
      throw new Error("Action Type not Found");
  }
}

export default reducer;
