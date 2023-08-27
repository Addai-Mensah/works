import { useState } from "react";
import { Link } from "react-router-dom";
import img  from "../../assets/techy.gif"
import control  from "../../assets/control.png"
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex h-full">
      <div
        className={`  ${open ? "w-72" : "w-20 "
          } bg-dark-purple  p-5 h-auto  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={img}
            className={`cursor-pointer duration-500 w-[5rem] ${open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-white origin-left font-bold text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-6 flex flex-col gap-[1rem]">
          <Link to="/dashboard"><li className={`text-white active:bg-blue-gray-300 hover:bg-blue-gray-600 w-full h-[2.5rem] pt-[0.5rem] pl-[0.5rem] rounded-lg  ${!open && "scale-0"
              }`}>
            Dashboard
          </li>
          </Link>

          <Link to="/ledger">
            <li className={`text-white active:bg-blue-gray-300 hover:bg-blue-gray-600 w-full h-[2.5rem] pt-[0.5rem] pl-[0.5rem] rounded-lg  ${!open && "scale-0"
              }`}>
              Link Wallet
            </li>
          </Link>

          <Link to="/settings"> <li className={`text-white active:bg-blue-gray-300 hover:bg-blue-gray-600 w-full h-[2.5rem] pt-[0.5rem] pl-[0.5rem] rounded-lg  ${!open && "scale-0"
              }`}>
            Settings
          </li></Link>

          <li className={`text-white active:bg-blue-gray-300 hover:bg-blue-gray-600 w-full h-[2.5rem] pt-[0.5rem] pl-[0.5rem] rounded-lg  ${!open && "scale-0"
              }`} onClick={() => {
            if (window.confirm("Are you sure you want to logout?")) {
              localStorage.clear()
              sessionStorage.clear()
              window.location.href = "/"
            }
          }}>
            Logout
          </li>
        </ul>
      </div>

    </div>
  );
};
export default Sidebar;