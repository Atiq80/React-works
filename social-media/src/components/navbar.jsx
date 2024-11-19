import { CgMediaLive } from "react-icons/cg";
import HandleSidebar from "./HandleSidebar";

const Navbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <span>
            <CgMediaLive />
          </span>
          Buzzly
        </a>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li onClick={() => setSelectedTab("Home")}>
            <a
              className={`${
                selectedTab === "Home" &&
                "bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-20   rounded-lg   shadow-md"
              }`}
            >
              Home
            </a>
          </li>
          <li onClick={() => setSelectedTab("Create Post")}>
            <a
              className={`${
                selectedTab === "Create Post" &&
                "bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-20   rounded-lg  shadow-md"
              }`}
            >
              Create Post
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control ">
          <HandleSidebar />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;