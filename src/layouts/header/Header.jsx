import { useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="NavigationWrapper h-screen  bg-stone-500 max-w-1/6  ">
      <nav>
        <ul className="flex flex-col">
          <NavLink to={"/"} className="group hover:bg-gray-50 px-3 py-2 ">
            <a className="group-hover:text-black text-gray-300" href="">
              میزکار
            </a>
          </NavLink>
          <NavLink
            to={"/products"}
            className="group hover:bg-gray-50 px-3 py-2 "
          >
            <a className="group-hover:text-black text-gray-300" href="">
              فروشگاه
            </a>
          </NavLink>
          <NavLink to={"/users"} className="group hover:bg-gray-50 px-3 py-2  ">
            <a className="group-hover:text-black text-gray-300" href="">
              کاربران
            </a>
          </NavLink>
          <NavLink to={"/blog"} className="group hover:bg-gray-50 px-3 py-2 ">
            <a className="group-hover:text-black text-gray-300" href="">
              وبلاگ
            </a>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
