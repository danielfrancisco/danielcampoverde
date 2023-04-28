import "./styless/drop.scss"
import {FaBars, FaBorderStyler} from "react-icons/fa";
import { useState,useEffect} from "react";
import { GrClose } from "react-icons/gr"
import Home from "./home";
import Skills from "./skills";
import Portfolio from "./portfolio";
import About from "./about";
import Contact from "./contact";
import { Link } from "react-router-dom";

export default function Drop(props){
    const [conte,sconte] = useState(props.cont)
    const [press,spress] = useState(parseInt( props.pre))

   function ispress(){
        if(press===0){
            spress(1)
        }
        else{
            spress(0)
        }
    }

    if(conte==="skills"){
        return <Skills con={conte}/>
    }

    if(conte==="contact"){
        return <Contact cont={conte}/>
      }

    if(conte==="home"){
        return <Home con={conte}/>
    }

    if(conte==="portfolio"){
        return <Portfolio cont={conte}/>
    }

    if(conte==="about"){
        return <About con={conte}/>
    }
        

    return(
        <>
          <GrClose id="barspres" onClick={
              ()=>{
                ispress()
                if(press===1){
                    sconte(props.page)
                }
              }
            }/>
          <div id="dropcon">
            <Link id="link" to={"/"}><p onClick={()=>{
                sconte("home")
            }}>Home</p></Link> 

            <Link id="link" to={"/skills"}><p onClick={()=>{
                sconte("skills")
            }}>Skills</p> </Link>
            <Link id="link" to={"/portfolio"}><p onClick={()=>{
                sconte("portfolio")
                
            }}>Work</p></Link>
            <Link id="link" to={"/about"}><p onClick={()=>{
                sconte("about")
            }}>About</p></Link>
          </div>
        </>
    )
}