import Home from "./home"
import { useState } from "react"
import Skills from "./skills"
import martysi from "./images/martysi.png"
import "./styless/portfolio.scss"
import resorti from "./images/resorti.png"
import franki from "./images/franki.png"

export default function Portfolio(props){
    const[cont,scont] = useState(props.cont)

    if(cont==="home"){
      document.getElementById("body").style.backgroundColor= "#E7E7E7";
        return <Home cont={cont}/>
      }

      if(cont==="skills"){
        document.getElementById("body").style.backgroundColor= "#E7E7E7";
        return <Skills cont={cont}/>
      }

    return(
          <>
          <div id="fondo">
              <div id="nav">
                <p onClick={()=>{
                 scont("home")
                 
                }}>Home</p>

                <p className="rnav" onClick={()=>{
                   scont("skills")
                }}>Skills</p>

                <p className="rnav" onClick={()=>{
                 scont("porfolio")
                 
                }}
                >Projects</p>
                <p className="rnav">About</p>

                <div id="imacon">
               <div id="imlepa">
                  <div id="imle">
                    <div>
                        <a href="" target="_blank"
                        ><img src={martysi}/>
                        </a>
                        <a href="" target="_blank"><button>view project </button></a>
                        
                   </div>
                    
                   <div>
                        <img src={franki}/>
                        <button>view project </button>
                   </div>

                  </div>
               </div>

               <div id="imrepa"> 
                <div id="imre">
                  <div>
                    <img src={resorti}/>
                    <button>view project </button>
                  </div>
                </div>
              </div>
              </div>

            </div>
              </div>

              

          </>
      )

    }