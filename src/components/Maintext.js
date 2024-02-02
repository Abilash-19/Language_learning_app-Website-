import React , {useEffect}from "react";
import homemock from '../images/homemock.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from "aos";
export default function Maintext()
{

    useEffect(()=>{
        AOS.init()
    },[])
    return(
       <div className="flex flex-col md:flex-row-reverse  justify-between items-start px-6 w-full h-screen ">
         <div className="  h-full w-52" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
         <img src={homemock}  className="object-cover " /    >
         </div>
        <div className="md:w-[50%] md:mt-20 flex flex-col " data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
            <h1  className="  font-bold text-3xl md:text-5xl mb-4" >To have another language is to possess a second soul..</h1>
            <p  className="text-medium text-slate-800 text-base md:text-base mb-4" >Download Lingual app and master any languages across the 🌍</p>
            <a href='www.google.com ' className="border md:w-[30%] text-center p-4 hover:bg-green-500 transition-all">Download now</a>
        </div>
       
       </div>
    )
}