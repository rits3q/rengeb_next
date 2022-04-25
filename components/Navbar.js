import Link from "next/link"
import styles from '../styles/Home.module.css'

//WE can add Es7 as for shortcut 
const Navbar =() =>{
  
    return(
      // document.addEventListener('DOMContentLoaded', function() {
      //   var elems = document.querySelectorAll('.sidenav');
      //   var instances = M.Sidenav.init(elems, options);
      // })
        <nav>
          
        <div className="nav-wrapper #212121 grey darken-4">
          

           <Link href="/"><a  class={styles.logo}>RENGEB</a></Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link href="/home"><a >Home</a></Link></li>
            <li><Link href="/about"><a >About</a></Link></li>
            {/* <li><Link href="/"><a class="dropdown-trigger">Services<i class="material-icons right"></i></a></Link></li>  */}
            <li><a class="dropdown-button" href="/services" data-activates="dropdown1">Services<i class="material-icons right"></i></a></li>
          
            <li><a class="btn #e64a19 deep-orange darken-2">Contact Us</a></li>

          </ul>
        </div>
      </nav>
     
    )
   }


export default Navbar;