import { NavLink, Outlet } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 container mx-auto">
      <div className="min-h-screen col-span-1 bg-[#c0bbbb] p-5">
        <div className="dashboard">
          <ul>
            <li>
              <NavLink to="/dashboard/profile">Profile</NavLink>
            </li>
            <div className="h-[1px] w-full bg-white my-4"></div>
            <li>
              <NavLink className="flex items-center justify-start" to="/">
                <IoIosArrowBack className="mr-2"></IoIosArrowBack>
                <span>Back to Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen bg-[#F2F2F2] col-span-4 p-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
