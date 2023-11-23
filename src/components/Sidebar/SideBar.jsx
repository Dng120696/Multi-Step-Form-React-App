import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
    <section className="bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-bottom bg-cover rounded-2xl overflow-hidden text-white p-16 text-2xl">
      <ul className="link flex gap-6 md:gap-10 flex-col">
        <li className="flex items-center gap-6 md:gap-10">
          <NavLink
            to="/"
            className="w-12 h-12 flex items-center justify-center border-[1px] font-bold border-white rounded-full"
          >
            1
          </NavLink>
          <span className="uppercase">
            <small className="block text-xl text-pastel-blue">Step 1</small>
            <small className="font-bold text-2xl text-alabaster">
              Your Info
            </small>
          </span>
        </li>

        <li className="flex items-center gap-6 md:gap-10">
          <NavLink
            to="select_plan"
            className="w-12 h-12 flex items-center justify-center border-[1px] font-bold border-white rounded-full"
          >
            2
          </NavLink>
          <span className="uppercase">
            <small className="block text-pastel-blue">Step 2</small>
            <small className="font-bold text-2xl text-alabaster">
              Select Plan
            </small>
          </span>
        </li>

        <li className="flex items-center gap-6 md:gap-10">
          <NavLink
            to="add_ons"
            className="w-12 h-12 flex items-center justify-center border-[1px] font-bold border-white rounded-full"
          >
            3
          </NavLink>
          <span className="uppercase">
            <small className="block text-pastel-blue">Step 3</small>
            <small className="font-bold text-2xl text-alabaster">Add-ons</small>
          </span>
        </li>

        <li className="flex items-center gap-6 md:gap-10">
          <NavLink
            to="summary"
            className="w-12 h-12 flex items-center justify-center border-[1px] font-bold border-white rounded-full"
          >
            4
          </NavLink>
          <span className="uppercase">
            <small className="block text-pastel-blue">Step 4</small>
            <small className="font-bold text-2xl text-alabaster">summary</small>
          </span>
        </li>
      </ul>
    </section>
  );
}
