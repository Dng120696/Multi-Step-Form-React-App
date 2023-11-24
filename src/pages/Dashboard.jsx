import { Outlet } from "react-router-dom";
import { SideBar } from "../components/Sidebar/SideBar";

function Dashboard() {
  return (
    <div className=" flex items-center justify-center  min-h-screen ">
      <main className=" bg-white w-[min(100%,90rem)] h-screen  md:h-[80vh]  md:p-6    m-auto md:gap-20 shadow-[0_0_1rem_rgba(0,0,0,0.1)] md:grid md:grid-cols-[40%,auto] rounded-2xl overflow-hidden relative">
        <SideBar />
        <div className="bg-magnolia md:bg-white h-[70vh] md:h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
