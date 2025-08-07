"use client";

import { useState } from "react";
import { MdAlternateEmail, MdEmail, MdLock } from "react-icons/md";
import Particles from "../components/reactBits/Particles";
import { Link } from "react-router";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="w-full h-screen absolute items-center justify-center">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 rounded-lg p-8 w-full max-w-md border-[0.2px] border-[#76a7a4] dark:border-fuchsia-800 md:border-slate-800 dark:md:border-slate-800 hover:border-[#638986] dark:hover:border-fuchsia-900 dark:hover:drop-shadow-[0_0_10px_rgba(170,0,180,0.2)] transition-all duration-300 z-10">
          <h1 className="text-white text-3xl font-bold text-center mb-8 drop-shadow-[0_0_8px_rgba(255,225,255,0.5)]">
            Log In
          </h1>

          <form className="space-y-6">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <MdAlternateEmail className="text-[#76a7a4] dark:text-fuchsia-700 text-xl" />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 text-white placeholder-gray-400 pl-12 pr-4 py-3 rounded-md border-none outline-none focus:ring-1 focus:ring-[#76a7a492] dark:focus:ring-fuchsia-900"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <MdLock className="text-[#76a7a4] dark:text-fuchsia-700 text-xl" />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800 text-white placeholder-gray-400 pl-12 pr-4 py-3 rounded-md border-none outline-none focus:ring-1 focus:ring-[#76a7a492] dark:focus:ring-fuchsia-900"
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#619591] dark:bg-fuchsia-700 text-white font-bold py-2 px-12 mt-4 rounded-md hover:bg-[#74a19d] dark:hover:bg-fuchsia-700 dark:hover:drop-shadow-[0_0_10px_rgba(170,0,180,0.7)] transition-all duration-300 cursor-pointer">
                LOGIN
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <Link
              to="/register"
              className="text-sm text-slate-300 underline hover:text-[#76a7a4] dark:hover:text-fuchsia-700 transition-colors duration-200">
              Aún no tienes una cuenta?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
