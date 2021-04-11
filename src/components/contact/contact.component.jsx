import React from 'react';
import profileImg from '../../assets/profile.jpeg';
import "./contact.styles.css";
import Resume from '../../assets/Resume.pdf';
import download from "../../assets/download-solid.svg";
import linkedIn from '../../assets/linkedin-in-brands.svg';

const Contact = () => {
    return(
        <div className="contact-body">
           <h1>I'd love to hear from you!</h1>
                <img src={profileImg}
                    alt="profile"
                    height = "300" 
                    style={{borderRadius:"40%"}}
                />
            <div className= "contact-icons">
                {/* <div> */}
                <a style={{color:"black"}} target="_blank" rel="noreferrer" href="mailto:kumgauri15@gmail.com">
                    <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
                </a>
                {/* </div> */}
                {/* <div> */}
                <a href="https://www.linkedin.com/in/gauri-kumbhar-32205b17a" target="_blank" rel="noreferrer" >
                    <img src={linkedIn} alt="linkedIn" height="50px" width="50px"/>
                 </a>
                {/* </div> */}
                {/* <div> */}
                <a style={{ textDecoration:"none", fontSize: "40px"}} href= {Resume} download="GauriKumbharCV.pdf">        
                <img src={download} height ="50px" widht="50px" alt="download svg"/>    
                </a>
                <h3>Click to Email</h3>
                <h3>LinkedIn</h3>
                <h3>Click to Download Resume</h3>
                {/* </div> */}
                
            </div>
        </div>
    );
}

export default Contact;