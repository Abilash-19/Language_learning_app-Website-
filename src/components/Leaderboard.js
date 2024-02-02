import React , {useState , useEffect} from 'react'
import axios from "axios";
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Leaderboard(){
    
const [data,setdata] = useState([])
    useEffect(()=>{
        
         (async() => {
            
            const data = await axios.get('https://lingoapp-49792-default-rtdb.firebaseio.com/User.json')
            const arr = [];
            for (const key in data.data){
                // console.log("keys : ", key);
                arr.push(data.data[key])
            }
            setdata(arr)
            console.log(arr)
            console.log(arr.length);
         })()

         AOS.init()
        
    },[])

    return(
        
        <section>
            <Navbar/>
            <h1 className='text-center mt-8 bg-slate-800 p-6 text-white font-medium text-2xl'>Here are our top Achivers 🏆</h1>
            <ul className='flex flex-col mt-8 gap-6' >
                {
                    data.map((item , i) =>(
                        <div  data-aos="zoom-up" data-aos-easing="linear"
                        data-aos-duration="800"   key={i} className=' border p-6 border-slate-950 rounded-md'> 
                            <h4 className=' font-bold text-2xl'> {i+1} . {item.name} </h4> 
                            <span className="md:text-base text-sm mt-2 text-slate-600 "> {item.email} </span>
                        </div>
                    ))
                }
            </ul>
        </section>
    )

   
}