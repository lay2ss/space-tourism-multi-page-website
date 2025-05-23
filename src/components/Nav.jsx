import { Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { BackgroundContext } from "./BackgroundContext";

function Nav() {

    const { changeBg } = useContext(BackgroundContext);
    const elementRefNav = useRef(null);
    const elementRefIcon = useRef(null);
    let [aria, setAria] = useState("false");

    function changeAria(){
        const attribute = elementRefNav.current.getAttribute("aria-expanded");
        aria = attribute === "false" ? "true" : "false";
        attribute === "false" ? elementRefNav.current.style.display = "flex" : setTimeout( () => {elementRefNav.current.style.display = ""}, 500);
        setAria(aria)
    }
    useEffect(()=> { 
        const attribute = elementRefNav.current.getAttribute("aria-expanded");
        attribute === "false" ?  setTimeout(() => {elementRefIcon.current.style.display = ""}, 350) : elementRefIcon.current.style.display = "none";
    }
    , [changeAria])

    const styleNav = (style, i) => {
        if(style === "style"){
            i.style.color = "white";
            i.style.textDecoration = "underline";
            i.style.textUnderlineOffset = "40px";
        } else {
            i.style.color = "";
            i.style.textDecoration = "";
            i.style.textUnderlineOffset = "";
        }
    }      

    const styleToggleNav = (style, i) => { 
        if(style === "style"){
            i.style.color = "white";
            i.style.borderRight = "5px solid white";
        } else {
            i.style.color = "";
            i.style.borderRight = "";
        }  
    }
    const width = window.innerWidth;
    function handleStyle(index) {
      const nodeList = document.querySelectorAll("li");
      const arrayList = Array.from(nodeList);
      const list = arrayList.filter((_, i) => i <= 3);
      list.forEach((e, i) => {
        if(width > 768){
            if(i === index){
                styleNav("style", e);
            } else {
                styleNav("", e);
            }
        } else {
            if(i === index){
                styleToggleNav("style", e);
            } else {
                styleToggleNav("", e);
                }
            }
        } 
      )
    }

    const handleOnloadStyle = (i) => {
            const list = document.querySelectorAll("li")[i];
            if(width > 768){
                styleNav("style", list);
            } else {
                styleToggleNav("style", list);       
            }
        }
    const url = window.location.pathname;
        const onload = () => {switch(url){
                case "/":
                    handleOnloadStyle(0);
                    changeBg(0);
                    break;
                case "/destination":
                    handleOnloadStyle(1);
                    changeBg(1);
                    break;
                case "/crew":
                    handleOnloadStyle(2);
                    changeBg(2);
                    break;
                case "/technology":
                    handleOnloadStyle(3);
                    changeBg(3);
            }}
    useEffect(() => onload, []) 
    window.addEventListener("resize", () => handleStyle());

    (function removeListener() {
        window.removeEventListener("resize", () => handleStyle());
    })();

    return (
        <>
            <div className="div-home-nav">
                    <div className="div-logo"><img src="/src/assets/shared/logo.svg" alt="logo image" /></div> 
                    <div className="horizontal-row" ><hr /></div>
                    <div ref={elementRefNav} aria-expanded={aria} className="div-list-home">
                        <ul>
                            <li onClick={() => {changeBg(0), changeAria(), handleStyle(0)}}><Link to="/"><span>00</span> HOME</Link></li>
                            <li onClick={() => {changeBg(1), changeAria(), handleStyle(1)}}><Link to="/destination"><span>01</span> DESTINATION</Link></li>
                            <li onClick={() => {changeBg(2), changeAria(), handleStyle(2)}}><Link to="/crew"><span>02</span> CREW</Link></li>
                            <li onClick={() => {changeBg(3), changeAria(), handleStyle(3)}}><Link to="/technology"><span>03</span> TECHNOLOGY</Link></li>
                        </ul>
                            <img className="icon" id="closeIcon" onClick={changeAria} src="src/assets/shared/icon-close.svg" alt="close icon" />
                    </div>
                    <img ref={elementRefIcon} className="icon" onClick={() => {changeAria()}} src="src/assets/shared/icon-hamburger.svg" alt="hamburger icon" />
            </div>
        </>
    );
}


export default Nav;