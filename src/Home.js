import React from 'react' ;
import "./Home.css"
function Home(){
return(
    <>
   <nav    style={{
    textAlign:'red',
    backgroundColor: '#EEE',
          padding: '10px',
         

        }}>
  <div class="container-fluid">
    <div class="navbar-header" style={{color:'red'}}>
      <a class="navbar-brand"  style={{color:'red',borderBlock:'red'}} href="#">Gujrat Maharashtra  Transport Service</a>
    </div>
    <ul class="nav navbar-nav">
      <li style={{color:'yellowgreen'}}><a href="#">Home</a></li>
      
      <li><a href="#">Products</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Our Branches</a></li>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#"> Our Service</a></li>
    </ul>
   <br/>
    <img style={{    
         width: "1000px", margin: "0 auto", display: "block"
      }} src="https://wallpapercave.com/wp/wp2053036.jpg" alt="Example Image"/>
    
  </div>
</nav>
 
    </>
)

}

export default Home;