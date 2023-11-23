import { Link } from "react-router-dom";
import { Info } from "../components/Info";
import { Title } from "../components/Title";
import { useFormContext } from "../context/MultiFormContext";
import { useState } from "react";
import thankYouLogo from "../assets/images/icon-thank-you.svg";

function Summary() {
  const {
    state: { isYearly, active_bill, bill_value, add_ons },
  } = useFormContext();
  const [isConfirm, setIsConfirm] = useState(false);

  const filteredOns = add_ons.filter((ons) => ons.isChecked);
  const totalOns = filteredOns.reduce((acc, curr) => acc + curr.price, 0);

  return !isConfirm ? (
    <section className="p-8 md:pt-16 md:px-12 md:pb-10  relative">
      <Title>Pick add-ons</Title>
      <Info>Add-ons help enhance your gaming experience.</Info>
      <div className="bg-slate-100 p-8 rounded-xl mb-4">
        <div className="mb-6 flex items-center justify-between">
          <p>
            <span className="block text-marine-blue text-3xl font-bold mb-2">
              {active_bill} ({isYearly ? "Yearly" : "Monthy"})
            </span>
            <Link
              to="/select_plan"
              className="underline cursor-pointer text-cool-gray text-xl"
            >
              Change
            </Link>
          </p>
          <span className="text-2xl text-marine-blue font-bold">
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
        <p className="flex items-center justify-between text-2xl p-8">
          <span className="text-cool-gray">
            Total(per {isYearly ? "year" : "month"})
          </span>
          <span className="text-purplish-blue text-4xl font-bold">
            +${isYearly ? totalOns * 10 + bill_value : totalOns + bill_value}/
            {isYearly ? "yr" : "mo"}
          </span>
        </p>
      </div>
      <div className=" absolute bottom-10 w-[87%] flex items-center justify-between mb-auto">
        <button className="text-cool-gray rounded-lg text-xl font-medium">
          <Link to="/add_ons">Go Back</Link>
        </button>
        <button
          className="bg-marine-blue text-magnolia rounded-lg text-xl font-medium py-4 px-10"
          onClick={() => setIsConfirm(true)}
        >
          Confirm
        </button>
      </div>
    </section>
  ) : (
    <section className="flex items-center justify-center flex-col gap-6 px-24">
      <img src={thankYouLogo} alt="" className="" />
      <h1 className="text-5xl font-bold text-marine-blue">Thank You!</h1>
      <p className="text-xl text-cool-gray text-center leading-[1.8]">
        Thanks for confirmiing your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
}

export default Summary;
