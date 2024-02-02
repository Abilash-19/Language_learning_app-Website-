import React from 'react'
import Navbar from './Navbar'
import Creatorprops from './Creatorprops'
import Tamizh from '../images/Tamizhiniyan.jpg'
import Vetri from '../images/vetri.jpg'
import Thejas from '../images/thejas.jpg' 
import Abilash from '../images/abilash.png'
import Vimal from '../images/Vimal.png'
import Bibin from '../images/bibin.jpg'
export default function Creators()
{
    return (
        <section>
            <Navbar/>
            <h1 className='text-center font-semibold text-3xl my-6'>Meet our Creators...</h1>
            <Creatorprops img={Tamizh} name="Tamizh iniyan G" linkedin="https://www.linkedin.com/in/tamizh-iniyan-g-8779051a5/" instagram="https://www.instagram.com/iniyan2003/"  />
            <Creatorprops img={Vimal} name="Vimal Kumar S" linkedin="https://www.linkedin.com/in/vimal-kumar-13b985225/" instagram=" https://www.instagram.com/_vimal.kumar__/" github="https://github.com/vimal-kumar-6463" portfolio="https://vimal-kumar-6463.github.io/vimalkumar/"  />
            <Creatorprops img={Abilash} name="Abilash S" linkedin="https://www.linkedin.com/in/abilash-s-84608a23a/" instagram="https://www.instagram.com/lash.dev/" portfolio="https://abilash-portfolio.web.app/" github="https://github.com/Abilash-19"/>
            <Creatorprops img={Bibin} name="Bibin Roy BJ" linkedin="https://www.linkedin.com/in/bibin-roy-0866b5212/" instagram="https://www.instagram.com/bibinroy_offl/" github="https://github.com/BIBINROYBJ"  />
            <Creatorprops img={Thejas} name="ThejasJayasingh" linkedin="https://www.linkedin.com/in/thejas-jayasingh-787121233/" instagram="https://www.instagram.com/_.teejay_06._/" github="https://github.com/TEEJAY06" />
            <Creatorprops img={Vetri} name="Vetri Vel SB" linkedin="https://www.linkedin.com/in/vetrivel-s-b-508388268/" instagram="https://www.instagram.com/vetri__10/" />
           
        </section>
    )
}   <h1>jbsswbd</h1>