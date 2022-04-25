import styles from "../styles/Home.module.css"

const Footer = () =>{
    return (
        <footer class="page-footer #212121 grey darken-4">
          <div class="container">
            <div class="row">
              <div class="col s5 pull-s2">
                <h4  class={styles.logo}>RENGEB</h4>
                <p class="grey-text text-lighten-4">Hey guys,have a look at my work and <br/>design on my website.</p>
              </div>
              <div class="col s3 push-s2">
                <h5 class="row">SERVICES</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Renovation</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Roofing</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Masonry</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Flooring</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Plastering</a></li>
                </ul>
              </div>
              <div class="col s2 push-s3">
                <h5 class="row">QUICK LINKS</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Portfolio</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">FAQ</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Terms of Services</a></li>
                  
                </ul>
              </div>
              <div class="col s2 push-s4">
                <h5 class="row">CONTACT</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">(+1)800-600-2323</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Info@rengebxweb.co.in</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">1508v North Street,Austin<br/>Texas,US</a></li>
                 
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright #e0e0e0 grey lighten-2">
            <div class={styles.footer} >
           
            <span class="Text"> Copyright©2022 Rengeb.All Rights Reserved.</span>
            
            </div>
          </div>
        </footer>
    )
}

export default Footer