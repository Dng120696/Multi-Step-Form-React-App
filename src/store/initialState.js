export const initialState = {
  full_name: "",
  email_address: "",
  phone_number: "",
  bill_term: "monthy_bill",
  bill_value: 9,
  active_bill: "Arcade",
  isYearly: false,
  isCompleted: false,
  isConfirm: false,
  add_ons: [
    {
      id: 1,
      name: "Online service",
      info: "Access to multiplayer games",
      price: 1,
      isChecked: true,
    },
    {
      id: 2,
      name: "Large storage",
      info: "Extra 1TB of cloud save",
      price: 2,
      isChecked: true,
    },
    {
      id: 3,
      name: "Customizable profile",
      info: "Custom theme on your profile",
      price: 2,
      isChecked: false,
    },
  ],
};
