import React from "react";
import Applogo from '../images/Applogo.png'
import { Link } from "react-router-dom";
export default function Navbar()
{
    return(
        
            <nav className=" w-full  py-4 px-12 flex justify-center text-white items-center flex-col gap-6 md:flex-row md:justify-between mb-10 z-50"> 
            <img src={Applogo} alt="Applogo" className="h-10 w-10 rounded-md md:h-16 md:w-16" />
                <ul className="text-black flex gap-6 text-lg font-normal">
                   <Link to={"/"} className="text-slate-900 hover:text-slate-600" >Home </Link>
                   <Link to={"/leaderboard"}className="text-slate-900 hover:text-slate-600" > Leaderboard </Link>
                   <Link to={"/creators"}className="text-slate-900 hover:text-slate-600" >Creators </Link>
                </ul>
            </nav>
        
    )
}