import { Link } from "react-router-dom";

import { Info } from "../components/Info";
import { Title } from "../components/Title";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useFormContext } from "../context/MultiFormContext";

function SelectPlan() {
  const {
    state: { isYearly, active_bill },
    dispatch,
  } = useFormContext();

  const bill = [
    {
      id: 1,
      name: "Arcade",
      bills: 9,
      img: arcade,
    },
    {
      id: 2,
      name: "Advanced",
      bills: 12,
      img: advanced,
    },
    {
      id: 3,
      name: "Pro",
      bills: 15,
      img: pro,
    },
  ];

  return (
    <section className="p-8 md:pt-16 md:px-12 md:pb-10  relative">
      <Title>Select your plan</Title>
      <Info>You have the option of monthly or yearly billing.</Info>
      <div>
        <div className={`grid grid-cols-3 gap-6 mb-20`}>
          {bill.map(({ id, name, bills, img }) => {
            return (
              <div
                key={id}
                className={`border  rounded-xl p-6 flex flex-col items-start gap-20 cursor-pointer  ${
                  active_bill === name ? "border-purplish-blue" : ""
                }`}
                onClick={() =>
                  dispatch({
                    type: "ACTIVE_BILL",
                    payload: {
                      name,
                      value: `${isYearly ? bills * 10 : bills}`,
                    },
                  })
                }
              >
                <img src={img} alt="arcade" className="" />
                <p>
                  <span className="block text-3xl font-bold text-marine-blue mb-4">
                    {name}
                  </span>
                  <span className="text-xl font-medium text-cool-gray ">{`$${
                    isYearly ? bills * 10 : bills
                  }/${isYearly ? "yr" : "mo"}`}</span>
                  {isYearly ? (
                    <small className="block text-marine-blue font-medium text-xl pt-2">
                      2 months free
                    </small>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <div className="col-span-4 w-full bg-slate-100 py-6 flex  items-center justify-center gap-10 text-2xl rounded-md font-bold">
          <span className="text-cool-gray">Monthly</span>
          <div
            className="w-20 h-10 bg-marine-blue rounded-full p-2 relative cursor-pointer"
            onClick={() => dispatch({ type: "SET_BILL" })}
          >
            <span
              className={`absolute w-6 h-6 bg-white rounded-full ${
                isYearly
                  ? "left-12 transition-all duration-500"
                  : "left-2 transition-all duration-500"
              }`}
            ></span>
          </div>
          <span className="text-marine-blue">Yearly</span>
        </div>
      </div>
      <div className=" absolute bottom-10 w-[87%] flex items-center justify-between mb-auto">
        <button className="text-cool-gray rounded-lg text-xl font-medium ">
          <Link to="/">Go Back</Link>
        </button>
        <button className="bg-marine-blue text-magnolia rounded-lg text-xl font-medium py-4 px-10">
          <Link to="/add_ons">Next Step</Link>
        </button>
      </div>
    </section>
  );
}

export default SelectPlan;
