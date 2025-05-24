import {useState, useEffect}  from "react";

function Technology(){
    const arrayTechnology = [
        {
          "name": "Launch vehicle",
          "images": {
            "portrait": "assets/technology/image-launch-vehicle-portrait.jpg",
            "landscape": "assets/technology/image-launch-vehicle-landscape.jpg"
          },
          "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
          "name": "Spaceport",
          "images": {
            "portrait": "assets/technology/image-spaceport-portrait.jpg",
            "landscape": "assets/technology/image-spaceport-landscape.jpg"
          },
          "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
          "name": "Space capsule",
          "images": {
            "portrait": "assets/technology/image-space-capsule-portrait.jpg",
            "landscape": "assets/technology/image-space-capsule-landscape.jpg"
          },
          "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
      ];

      const [currentIndex, setCurrentIndex] = useState(0);
      const[isTransitioning, setIsTransitioning] = useState(true);

      function changeTechnology(index){
        setIsTransitioning(false);

        setTimeout(() => {
          setCurrentIndex(index);
          setIsTransitioning(true);
        }, 500)
    }

    useEffect(() => {
      const btn = document.querySelectorAll("button")[0];
      btn.style.backgroundColor = "white"
      btn.style.color = "#0b0d17";
    }, [])

    function handleStyle(index) {
      const btn = document.querySelectorAll("button");
      btn.forEach((e, i) => {
        i === index ? e.style.backgroundColor = "white" : e.style.backgroundColor = ""; 
        i === index ? e.style.color = "#0b0d17" : e.style.color = "";
        } 
      )
    }

      return(<>
        <div className={`div-technology ${isTransitioning ? "fade-in" : "fade-out"}`}>
          <h2 className="section-title"><span>03</span>SPACE LAUNCH 101</h2>
            <div className="div-all-technology">
            <div>
            <div className="div-nav-technology">
                    {arrayTechnology.map((_, index) => (
                <button key={index} onClick={() => {changeTechnology(index); handleStyle(index)}}>
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="div-inf-technology">
                <h3 className="role">THE TERMINOLOGY...</h3>
                <h1 className="name">{arrayTechnology[currentIndex].name.toUpperCase()}</h1>
                <p className="paragraph">
                    {arrayTechnology[currentIndex].description}
                </p>
            </div>
            </div>
             <div className="div-img-technology"><img src={arrayTechnology[currentIndex].images.portrait} alt={`${arrayTechnology[currentIndex].name} image`} /></div>
            </div>
        </div>
    
      </>)
}
export default Technology