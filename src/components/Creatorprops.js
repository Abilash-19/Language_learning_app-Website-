import React , {useEffect} from "react";
import {BsLinkedin , BsInstagram , BsGithub} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Creatorprops({name , img , linkedin , instagram , github, portfolio})

{
    useEffect(() => {
        AOS.init();
      }, [])
  return(
    <div className="border-b-4 flex justify-between items-center p-4 mb-6" data-aos="zoom-up" data-aos-easing="linear"
    data-aos-duration="800" >
        <div className="h-28  w-28">
            <img src={img} className="h-full w-full object-cover rounded-xl" />
        </div>
        <a href={portfolio}target="_blank">  <h4 className="md:text-xl">{name}</h4> </a>
        <div className="flex flex-col gap-4 text-3xl md:text-4xl">
            <a href={linkedin}className="text-blue-800 hover:text-blue-500"target="_blank" >  <BsLinkedin/> </a>
            <a href={instagram}className="text-pink-500 hover:text-pink-300"target="_blank"> <BsInstagram/> </a>
            <a href={github}className="text-slate-800 hover:text-slate-500"target="_blank"> <BsGithub/> </a>
        </div>

    </div>
  )
}