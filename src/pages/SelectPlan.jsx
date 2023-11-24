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
    <div className="md:flex md:flex-col md:justify-between h-full">
      <section className="px-10 py-8 md:pt-16 md:pl-12 md:pr-28 md:pb-10 absolute z-50 md:z-10 md:relative top-1/2 md:top-0   left-1/2 md:left-0 w-[90%] md:w-full md:h-full translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 bg-white shadow-[0_0_1rem_rgba(0,0,0,0.1)] md:shadow-none rounded-xl md:rounded-none">
        <Title>Select your plan</Title>
        <Info>You have the option of monthly or yearly billing.</Info>
        <div>
          <div className={`grid md:grid-cols-3 gap-6 mb-10 md:mb-14`}>
            {bill.map(({ id, name, bills, img }) => {
              return (
                <div
                  key={id}
                  className={`border  rounded-xl p-4 md:p-6 flex md:flex-col items-start gap-10 md:gap-20 cursor-pointer  ${
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
                    <span className="block text-3xl font-bold text-marine-blue mb-2 md:mb-4">
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

          <div className="col-span-4 w-full bg-slate-100 py-4 md:py-6 flex  items-center justify-center gap-10 text-xl md:text-2xl rounded-md font-bold">
            <span className="text-cool-gray">Monthly</span>
            <div
              className="w-16 md:w-20 h-9 md:h-10 bg-marine-blue rounded-full p-2 relative cursor-pointer"
              onClick={() => dispatch({ type: "SET_BILL" })}
            >
              <span
                className={`absolute w-5 md:w-6 h-5 md:h-6 bg-white rounded-full ${
                  isYearly
                    ? "left-9 md:left-12 transition-all duration-500"
                    : "left-2 transition-all duration-500"
                }`}
              ></span>
            </div>
            <span className="text-marine-blue">Yearly</span>
          </div>
        </div>
      </section>
      <div className="absolute md:relative bottom-0 right-0 w-full  p-6 md:pl-12 md:pr-28 flex justify-between items-center bg-white ">
        <button className="text-cool-gray rounded-lg text-xl font-medium ">
          <Link to="/">Go Back</Link>
        </button>
        <button className="bg-marine-blue text-magnolia rounded-lg text-xl font-medium py-4 px-10">
          <Link to="/add_ons">Next Step</Link>
        </button>
      </div>
    </div>
  );
}

export default SelectPlan;
