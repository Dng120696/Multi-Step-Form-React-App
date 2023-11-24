import { Info } from "../components/Info";
import { Title } from "../components/Title";
import { useFormContext } from "../context/MultiFormContext";
import checkMark from "../assets/images/icon-checkmark.svg";
import { Link } from "react-router-dom";

function AddOns() {
  const {
    state: { add_ons, isYearly },
    dispatch,
  } = useFormContext();

  return (
    <div className="md:flex md:flex-col md:justify-between h-full">
      <section className="p-10 md:pt-16 md:pl-12 md:pr-28 md:pb-10 absolute z-50 md:z-10 md:relative top-1/2 md:top-0   left-1/2 md:left-0 w-[90%] md:w-full md:h-full translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 bg-white shadow-[0_0_1rem_rgba(0,0,0,0.1)] md:shadow-none rounded-xl md:rounded-none">
        <Title>Pick add-ons</Title>
        <Info>Add-ons help enhance your gaming experience.</Info>
        <div className="flex gap-6 flex-col  text-2xl">
          {add_ons.map(({ id, name, info, price, isChecked }) => (
            <div
              key={id}
              className={`p-6 rounded-xl flex items-center justify-between ${
                isChecked
                  ? "border border-purplish-blue"
                  : "border border-light-gray"
              }`}
              onClick={() =>
                dispatch({ type: "SET_ACTIVE_ADD_ONS", payload: id })
              }
            >
              <div className="flex items-center gap-6">
                <p
                  className={`w-8 h-8 flex items-center justify-center rounded-md border border-light-gray ${
                    isChecked ? "bg-purplish-blue" : ""
                  }`}
                >
                  {isChecked && <img src={checkMark} alt="" className="" />}
                </p>
                <p>
                  <span className="block text-marine-blue font-bold">
                    {name}
                  </span>
                  <span className=" text-cool-gray text-xl md:text-2xl">
                    {info}
                  </span>
                </p>
              </div>
              <p className="text-purplish-blue  text-xl">
                +${isYearly ? price * 10 : price}/{isYearly ? "yr" : "mo"}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="absolute md:relative bottom-0 right-0 w-full  p-6  md:pl-12 md:pr-28 flex justify-between items-center bg-white ">
        <button className="text-cool-gray rounded-lg text-xl font-medium">
          <Link to="/select_plan">Go Back</Link>
        </button>
        <button className="bg-marine-blue text-magnolia rounded-lg text-xl font-medium py-4 px-10">
          <Link to="/summary">Next Step</Link>
        </button>
      </div>
    </div>
  );
}

export default AddOns;
