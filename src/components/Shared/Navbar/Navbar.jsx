import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        userSignOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              text: "Sign Out Successful",
            });

            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/addTask">Add Task</NavLink>
          </li>
          <button onClick={handleSignOut} className="sign-out-btn ml-4">
            Sign Out
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/signIn">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/signUp">Sign Up</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="nav container mx-auto">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-3xl font-bold">PriorityPulse</a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
