import { Link, useNavigate } from "react-router-dom";
import { Info } from "../components/Info";
import { Title } from "../components/Title";
import { useFormContext } from "../context/MultiFormContext";
import thankYouLogo from "../assets/images/icon-thank-you.svg";

function Summary() {
  const {
    state: {
      isYearly,
      active_bill,
      bill_value,
      add_ons,
      isCompleted,
      isConfirm,
    },
    dispatch,
  } = useFormContext();

  const filteredOns = add_ons.filter((ons) => ons.isChecked);
  const totalOns = filteredOns.reduce((acc, curr) => acc + curr.price, 0);
  const navigate = useNavigate();
  return !isConfirm ? (
    <div className="md:flex md:flex-col md:justify-between h-full">
      <section className="px-10 pt-12 pb-6 md:pt-16 md:pl-12 md:pr-28 md:pb-10 absolute z-50 md:z-10 md:relative top-1/2 md:top-0   left-1/2 md:left-0 w-[90%] md:w-full md:h-full translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 bg-white shadow-[0_0_1rem_rgba(0,0,0,0.1)] md:shadow-none rounded-xl md:rounded-none">
        <Title>Finishing up</Title>
        <Info>Double-check everything looks OK before confirming.</Info>
        <div className="bg-slate-100 p-8 rounded-xl mb-4">
          <div className="mb-6 flex items-center justify-between">
            <p>
              <span className="block text-marine-blue text-2xl md:text-3xl font-bold mb-2">
                {active_bill} ({isYearly ? "Yearly" : "Monthy"})
              </span>
              <Link
                to="/select_plan"
                className="underline cursor-pointer text-cool-gray text-xl"
              >
                Change
              </Link>
            </p>
            <span className="text-xl md:text-2xl text-marine-blue font-bold">
              ${bill_value}/${isYearly ? "yr" : "mo"}
            </span>
          </div>
          <hr className="border-light-gray" />
          <div className="mt-6">
            {filteredOns.map(({ id, name, price }) => (
              <div
                key={id}
                className="py-4 flex items-center justify-between text-xl"
              >
                <span className=" text-cool-gray ">{name}</span>
                <span className="text-marine-blue">
                  +${isYearly ? price * 10 : price}/{isYearly ? "yr" : "mo"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="flex items-center justify-between text-xl md:text-2xl p-8">
            <span className="text-cool-gray">
              Total(per {isYearly ? "year" : "month"})
            </span>
            <span className="text-purplish-blue text-3xl md:text-4xl font-bold">
              +$
              {isYearly
                ? +totalOns * 10 + +bill_value
                : +totalOns + +bill_value}
              /{isYearly ? "yr" : "mo"}
            </span>
          </p>
        </div>
      </section>
      <div className="absolute md:relative bottom-0 right-0 w-full  p-6  md:pl-12 md:pr-28 flex justify-between items-center bg-white ">
        <button className="text-cool-gray rounded-lg text-xl font-medium">
          <Link to="/add_ons">Go Back</Link>
        </button>
        <button
          className="bg-purplish-blue text-magnolia rounded-lg text-xl font-medium py-4 px-10"
          onClick={() => {
            if (!isCompleted) {
              navigate("/");
            } else {
              dispatch({ type: "SET_CONFIRM", payload: true });
            }
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  ) : (
    <section className="flex items-center justify-center flex-col gap-6 px-12 md:px-24 absolute z-50 md:z-10 md:relative top-1/2 md:top-0   left-1/2 md:left-0 w-[90%] md:w-full md:h-full translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 bg-white shadow-[0_0_1rem_rgba(0,0,0,0.1)] md:shadow-none rounded-xl md:rounded-none h-[60vh] ">
      <img src={thankYouLogo} alt="" className="" />
      <h1 className="text-5xl font-bold text-marine-blue">Thank You!</h1>
      <p className="text-2xl md:text text-cool-gray text-center leading-[3rem]">
        Thanks for confirmiing your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
}

export default Summary;
