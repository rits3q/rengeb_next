import Navbar from "./Navbar"
import Head from "next/dist/shared/lib/head"
import Footer from "./Footer"
const layout = ({children}) =>{
    return(
        <div>
            <Head>
            <link rel = "stylesheet"  
         href = "https://fonts.googleapis.com/icon?family=Material+Icons"/>  
            <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
        
            </Head>
            <Navbar/>
            
            {children}
            
            <Footer/>

        </div>
    )
}
export default layout