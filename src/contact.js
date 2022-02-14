import Skills from "./skills"
import Home from "./home"
import { useState,useEffect } from "react"
import Portfolio from "./portfolio";
import About from "./about";

export default function Contact(props){
    const [conte,sconte] = useState(props.cont)
    
    useEffect(()=>{
      if(window.innerWidth<=600){
        document.getElementById("body").style.backgroundColor= "white";
      }
      else{
        document.getElementById("body").style.backgroundColor= "#E7E7E7";
      }
     },[window.innerWidth])

     if(conte==="about"){
      
      return <About cont={conte}/>
    }
    if(conte==="portfolio"){
         
     return <Portfolio cont={conte}/>
   }

   if(conte==="home"){
         
    return <Home cont={conte}/>
  }

  if(conte==="skills"){
         
    return <Skills cont={conte}/>
  }

    return(
        
         <>
         <div id="fondo">
          <div id="nav">
            <p onClick={()=>{
              sconte("home")
            }}>Home</p>

            <p className="rnav" onClick={()=>{
              sconte("skills")
            }}>Skills</p>

            <p className="rnav" onClick={()=>{
                 sconte("portfolio")
                 document.getElementById("body").style.backgroundColor= "white";
                }}
            >Projects</p>
            <p className="rnav" onClick={()=>{
              sconte("about")
            }}>About</p>
          </div>

          <div id="condata">
            <div>
              <p>Call me</p>
              <p id="number">393493485</p><br/>
            </div>

            <div>
             <p>Email</p>
             <p  id="email">danielfrancisco99@outlook.com</p><br/>
            </div>

            <div>
             <p>Location</p>
             <p  id="loc">Ecuador-Guayaquil</p>
            </div>

          </div>

          </div>

          </>
        );
}