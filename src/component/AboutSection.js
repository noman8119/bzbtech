import React from "react";
import about1 from '../images/about-left.png';
// import about2 from '../images/about-right.png';
const AboutSection = () => {
    return (
        <section className="about-sec" id="demo1">
<div className="row p-0 m-0">
<div className="col-lg-6 col-12 p-0">
<img className="about-left" src={about1} alt="left" />
</div>
<div className="col-lg-4 col-9 mx-auto about-right-bg">

              <div className="about-right">
<h5>About us</h5>
<h3>We provide Creative solutions<br/> 
to improve your business!
</h3>
<p>
Lorem ipsum dolor sit amet consectetur adipising elit sedin 
eiusmod tempor incididunt ut labore dolore magna aliqua
Ut enim ad minim veniam, quis nostrud exercitation ullam
com laboris nisi commodo consequat.
</p>

<ul>
  <li>Eiusmod Tempor Incididunt ut Labore Dolore</li>
  <li>Consequuntur Magni Dos Ratione Volup Tatem</li>
  <li>Minus Id Quod Maxime Placeat Facere Possimus</li>
  <li>Debitis Aut Rerum Necessitatibus Saepe Eveniet</li>
</ul> 
              </div>
               
           
            {/* modal */}
    
</div>
</div>

        
        </section>
    );
}
export default AboutSection;