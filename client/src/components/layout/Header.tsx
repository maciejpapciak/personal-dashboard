import logo from "@/assets/cetus-whale.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import React from "react";
import clsx from "clsx";

export function Header() {


    const [isMenuClicked, setIsMenuClicked] = React.useState(false)


    function showMobileMenu(){
      setIsMenuClicked(prev => !prev)
    }


    function hideMenu(){
        setIsMenuClicked(false)
    }


    return (
      <div className="bg-neutral-800 text-slate-100">
          <div className="flex h-16 items-center justify-between pr-10 px-4 gap-2">
              <div className="flex gap-2">
                  <img src={logo} alt={"cetuspro whale"} className={"h-6 block z-[102]"} />
                  <h1 className={"font-bold z-[102]"}>Cetus Dashboard</h1>
              </div>
              <div className="flex items-center z-[100] gap-3">
                  <ul className="default-menu flex gap-8">
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/weather">Weather</Link>
                      </li>
                      <li>
                          <Link to="/todo">To-do App</Link>
                      </li>
                      <li>
                          <Link to="/notes">Notez</Link>
                      </li>
                      <li>
                        <Link to="/chat">Chat App</Link>
                      </li>
                  </ul>
                  <div className="hamburger z-[102] text-2xl text-slate-100 cursor-pointer" 
                  onClick={showMobileMenu}>
                    {isMenuClicked ? <IoClose /> : <GiHamburgerMenu />}
                  </div>
              </div>
              <ul className={clsx("mobile-menu flex flex-col gap-4", isMenuClicked && "is-active")}>
                    <li>
                        <Link to="/" onClick={hideMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/weather" onClick={hideMenu}>Weather</Link>
                    </li>
                    <li>
                        <Link to="/todo" onClick={hideMenu}>To-do App</Link>
                    </li>
                    <li>
                        <Link to="/notes" onClick={hideMenu}>Notez</Link>
                    </li>
                    <li>
                        <Link to="/chat" onClick={hideMenu}>Chat App</Link>
                    </li>
              </ul>
          </div>
      </div>
    );
}
