import React, { useState } from "react";
import { FaFaceLaughBeam, FaFaceLaughSquint } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router";

export function NavBar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <header className="w-full h-15 md:h-20 bg-[#77A5A2] text-[#F6E8CD] font-serif md:flex md:justify-center md:items-center z-500">
        <nav className="w-full h-15 md:h-20 fixed bg-[#77A5A2]/70 flex items-center justify-center px-5 md:justify-between md:px-25 z-500">
          {/* LOGO */}
          <h2 className="font-bold text-2xl md:text-4xl">MONMAT</h2>
          {/* Drop Down */}
          <div className="fixed top-0 right-0 w-15 h-15 flex items-center justify-center md:hidden">
            <div className="p-1 border-[0.1px] rounded">
              <HiBars3 onClick={toggleMenu} className="text-xl" />
              {/* Toggle */}
              {menu && (
                <div className="fixed inset-0 bg-black/70 flex justify-end" onClick={toggleMenu}>
                  {/* Modal */}
                  <div
                    className="w-full h-100 flex flex-col justify-between shadow-2xl/50 bg-[#77A5A2] border border-[#567773] relative"
                    onClick={(e) => e.stopPropagation()}>
                    <div className="w-full flex flex-col items-center justify-center">
                      <div className="w-full flex items-center justify-end p-3">
                        <IoIosCloseCircle
                          onClick={toggleMenu}
                          className="text-4xl text-black/50 cursor-pointer"
                        />
                      </div>
                      <FaFaceLaughBeam className="text-7xl" />
                      {/* <div className="w-20 h-20 rounded-full border overflow-hidden">
                        <img src="" alt="" />
                      </div> */}
                      <p className="text-xl font-bold mt-2">Perfil</p>
                      <button className="text-md px-3 py-1 bg-black/10 border border-black/20 rounded mt-3">
                        Ver Perfil
                      </button>
                    </div>
                    <div className="w-full">
                      <p className="py-3 px-5 bg-[#5f8482]">Home</p>
                      <p className="py-3 px-5 bg-[#577a78]">Favorites</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Links */}
          <div className="hidden fixed top-0 left-0 w-full h-20 md:flex items-center justify-center">
            <ul className="flex gap-8 text-2xl font-serif mt-2">
              <Link to="/home" className="hover:scale-110 hover:drop-shadow-[0_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300">
                Home
              </Link>
              <Link to="/favorites" className="hover:scale-110 hover:drop-shadow-[0_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300">
                Favoritos
              </Link>
            </ul>
          </div>
          {/* Perfil */}
          <div onClick={() => {navigate("/login");}} className="hidden md:flex flex-col items-center justify-center h-full pt-2 hover:scale-115 group transition-transform duration-300 cursor-pointer z-10">
            <FaFaceLaughBeam className="text-4xl mt-1 group-hover:hidden" />
            <FaFaceLaughSquint className="hidden text-4xl mt-1 group-hover:flex" />
            <p className="bg-[#F6E8CD] text-[#77A5A2] px-2 pb-1 mt-1 rounded-t-xl">Log In</p>
          </div>
        </nav>
      </header>
    </>
  );
}
