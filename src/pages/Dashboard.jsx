import { Outlet } from "react-router-dom";
import { SideBar } from "../components/Sidebar/SideBar";

function Dashboard() {
  return (
    <div className=" flex items-center justify-center  min-h-screen ">
      <main className=" bg-white w-[clamp(30rem,90%,90rem)] h-[90vh]  md:h-[80vh]  p-6 gap-10   m-auto md:gap-20 shadow-[0_0_1rem_rgba(0,0,0,0.1)] grid grid-cols-1 md:grid-cols-[40%,auto] rounded-2xl overflow-hidden">
        <SideBar />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
