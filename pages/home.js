import pic from "../public/images/front.jpg"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Cards from "../components/Cards"
import Cards2 from "../components/Cards2"
import ServiceTiles from "../components/ServiceTiles"
const Home =()=>{
    return(
        <div>
           
        <div >
            <Image  
            src={pic}
            className={styles.image}
            width={600}
            height={400}
            layout="responsive"
        priority
                  
        />
       
       <div class="topleft">
           <h1>Hello,I'm 
           <h1 className={styles.logo}>Rengeb</h1>
           </h1>
           <h4 id="stext">PROFESSIONAL RENOVATOR</h4>
           <h7 id="ltext">Hey guys,have a lookat my work and 
               designes on my website<br/> 
               Don't forget to look into my previous project.
           </h7>
           <ul>
               <a class="btn #ff5722 deep-orange">Contact Us</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
               <button class="btn" id="btn">Portfolio</button>
               </ul>
      </div>
      
        </div>
        <h2 class="title">ABOUT US</h2>
        <div class="rowc">       
           <Cards/>
           <Cards2/>
        </div>
        <div className={styles.ourservices}>
        <h2 class="title2">OUR SERVICES</h2>
           <h5 style={{textAlign:'center'}}>WHAT WE CAN DO FOR YOU</h5>
           <ServiceTiles/>
        </div>
        </div>
    )
}
export default Home