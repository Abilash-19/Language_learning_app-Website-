import React from "react";
import Navbar from "./Navbar";
import Maintext from "./Maintext";
// import Features from "./Features";
// import FeaturesProps from "./Featuresprops";
export default function Homepage()
{
    return(
        <>
        <section>
    <Navbar/>
    <Maintext/>
        </section>

        {/* <section>
            <FeaturesProps/>
        </section> */}
     
        </>
    )
}