import Home from "./home"
import { useEffect, useState } from "react";
import Skills from "./skills";
import martysi from "./images/martysi.png";
import resorti from "./images/resorti.png";
import franki from "./images/franki.png";
import About from "./about";
import {FaBars} from "react-icons/fa";
import Drop from "./drop";
import { Link } from "react-router-dom";

export default function Portfolio(props){
    const[cont,scont] = useState(props.cont)
    const[page,spage] = useState("portfolio")

   useEffect(()=>{
    document.getElementById("nav").style.paddingTop = "20vh";
    document.getElementById("nav").style.paddingTop = "20vh";
    document.getElementById("nav").style.top = "-6vh";
    document.getElementById("imle").style.left = "10vw";
    document.getElementById("imre").style.left = "47vw";
   },[])
  
   useEffect(()=>{
    if(String(window.location.href).includes("portfolio")){
      document.getElementById("body").style.backgroundColor= "white"; 
    }
   },[])
   
    window.onscroll = function(e) {
      
      
      if(this.scrollY>this.oldScroll){
        document.getElementById("nav").style.top = "-60vh";
      }

      if(this.scrollY<this.oldScroll){
        document.getElementById("nav").style.top = "-6vh";
      }
      this.oldScroll = this.scrollY;
      
    }


    if(window.innerWidth<=600){
      window.onscroll = function(e) {
      
        
        if(this.scrollY>this.oldScroll){
          document.getElementById("danielpa").style.top = "-60vh";
        }
  
        if(this.scrollY<this.oldScroll){
          document.getElementById("danielpa").style.top = "-3vh";
        }
        this.oldScroll = this.scrollY;
        
      }

  }

  else{
    window.onscroll = function(e) {
      
      
      if(this.scrollY>this.oldScroll){
        document.getElementById("nav").style.top = "-60vh";
      }

      if(this.scrollY<this.oldScroll){
        document.getElementById("nav").style.top = "-6vh";
      }
      this.oldScroll = this.scrollY;
      
    }
  }  
    
    
   if(cont==="home"){
      if(window.innerWidth<=600){
        document.getElementById("body").style.backgroundColor= "white";
        return <Home cont={cont}/>
      }
      else{
        document.getElementById("body").style.backgroundColor= "#E7E7E7";
        document.getElementById("nav").style.top = "-6vh";
        return <Home cont={cont}/>
      }
    }
    
      if(cont==="skills"){
        
        if(window.innerWidth<=600){
          document.getElementById("body").style.backgroundColor= "white";
          return <Skills cont={cont}/>
        }
        else{
          document.getElementById("body").style.backgroundColor= "#E7E7E7";
          return <Skills cont={cont}/>
        }
        
      }

      if(cont==="drop"){
        return <Drop cont={cont} page={page} pre = "1"/>
        
      }

      if(cont==="about"){
        if(window.innerWidth<=600){
          document.getElementById("body").style.backgroundColor= "white";
          return <About cont={cont}/>
        }
        else{
          document.getElementById("body").style.backgroundColor= "#E7E7E7";
          
          return <About cont={cont}/>
        
      }
    }

    return(
          <>
      <div id="fondo">
      <div id="nav">
                <Link to="/" id="home" onClick={()=>{
                 
                 document.getElementById("body").style.backgroundColor= "#E7E7E7";
                }}>
                 
                Home</Link>

                <Link to={"/skills"} className="links" onClick={()=>{
                 
                 document.getElementById("body").style.backgroundColor= "#E7E7E7";
                }}>Skills</Link>

               <Link to={"/portfolio"} className="links" onClick={()=>{
                 if(String(window.location.href).includes("portfolio")){
                   document.getElementById("body").style.backgroundColor= "white"; 
                 }
                 else{
                  document.getElementById("body").style.backgroundColor= "#E7E7E7";
                 }
                 
                 
                }}> 
                Projects</Link>

                <Link to="/about" className="links" onClick={()=>{
                 
                 document.getElementById("body").style.backgroundColor= "#E7E7E7";
                }}>About</Link>

              </div>
              
                
               
              <div id="danielpa">
              <Link to={"/"}><div id="daniel">
                Home
              </div></Link>
              <FaBars id="bars" onClick={
                ()=>{
                  scont("drop")
                }
              }/>
            </div>
             
                  
                <div id="imacon">
               <div id="imlepa">
                  <div id="imle">
                    <div>
                    <div id="coloroverMa">
                      <a href="" target="_blank" href="https://danielfrancisco.github.io/martys/">
                        <img src={martysi}/>
                      </a>
                  </div>
                        <a href="https://danielfrancisco.github.io/martys/" target="_blank"><button>view project </button></a>
                        
                   </div>
                    
                   <div>
                   <div id="coloroverFr">
                    <a href="https://danielfrancisco.github.io/Franks/" target="_blank">
                      <img src={franki}/>
                    </a>
                  </div>
                  <a href="https://danielfrancisco.github.io/Franks/" target="_blank"><button>view project </button></a>
                   </div>

                  </div>
               </div>
              
               <div id="imrepa"> 
                <div id="imre">
                  <div>
                  <div id="coloroverRe">
                    <a href="https://danielfrancisco.github.io/Resort/" target="_blank">
                      <img src={resorti}/>
                    </a>
                  </div>
                  <a href="https://danielfrancisco.github.io/Resort/" target="_blank"><button>view project </button></a>
                  </div>
                </div>
              </div>
              </div>

            </div>
          </>
      )

    }
  