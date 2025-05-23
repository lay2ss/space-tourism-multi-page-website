import { Link } from "react-router-dom"
import { useContext } from "react";
import { BackgroundContext } from "../components/BackgroundContext";

function Home(){
    const { changeBg } = useContext(BackgroundContext);
const width = window.innerWidth;
    function handleStyle(index){
        const list = document.querySelectorAll("li");
        list.forEach((e, i) => {
        if(width > 768){
            if(i === index){
                e.style.color = "white";
                e.style.textDecoration = "underline";
                e.style.textUnderlineOffset = "40px";
            } else {
                e.style.color = "";
                e.style.textDecoration = "";
                e.style.textUnderlineOffset = "";
            }
        } else {
            if(i === index){
                e.style.color = "white";
                e.style.borderRight = "3px solid white";
            } else {
                e.style.color = "";
                e.style.borderRight = "";
                }
            }
        } 
      )
        }
    return(
            <div className="div-home">
                <div className="div-text"><h1>SO, YOU WANT TO TRAVEL TO
                <span>SPACE</span></h1>

                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p></div>
        
                <div onClick={() => {changeBg(1), handleStyle(1)}} className="div-button"><button><Link to={"/destination"}>EXPLORE</Link></button></div>
            </div>
    )
}
export default Home