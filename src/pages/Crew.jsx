import {useState, useEffect} from "react";

function Crew(){
    const arrayCrew = [
        {
          "name": "Douglas Hurley",
          "images": {
            "png": "src/assets/crew/image-douglas-hurley.png",
            "webp": "src/assets/crew/image-douglas-hurley.webp"
          },
          "role": "Commander",
          "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
          "name": "Mark Shuttleworth",
          "images": {
            "png": "src/assets/crew/image-mark-shuttleworth.png",
            "webp": "src/assets/crew/image-mark-shuttleworth.webp"
          },
          "role": "Mission Specialist",
          "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
          "name": "Victor Glover",
          "images": {
            "png": "src/assets/crew/image-victor-glover.png",
            "webp": "src/assets/crew/image-victor-glover.webp"
          },
          "role": "Pilot",
          "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
          "name": "Anousheh Ansari",
          "images": {
            "png": "src/assets/crew/image-anousheh-ansari.png",
            "webp": "src/assets/crew/image-anousheh-ansari.webp"
          },
          "role": "Flight Engineer",
          "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
      ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const[isTransitioning, setIsTransitioning] = useState(true);

    function changeCrew(index){
      setIsTransitioning(false);

        setTimeout(() => {
          setCurrentIndex(index);
          setIsTransitioning(true);
        }, 500)
    }

    useEffect(() => {
      const btn = document.querySelectorAll("button")[0];
      btn.style.opacity = "1"
    }, [])

    function handleStyle(index) {
      const btn = document.querySelectorAll("button");
      btn.forEach((e, i) => {
        i === index ? e.style.opacity = "1" : e.style.opacity = ""; 
        } 
      )
    }

    return(<>
        <div className={`div-crew ${isTransitioning ? "fade-in" : "fade-out"}`}>
          <div>
            <h2 className="section-title"><span>02</span>MEET YOUR CREW</h2>
            <div className="div-inf-and-nav">
              <div className="div-inf-crew">
                <h3 className="role">{arrayCrew[currentIndex].role.toUpperCase()}</h3>
                <h1 className="name">{arrayCrew[currentIndex].name.toUpperCase()}</h1>
                <p className="paragraph">{arrayCrew[currentIndex].bio}</p>
                 </div>
                 <div className="div-nav-crew">
                  {arrayCrew.map((_, index) => (
                <button key={index} onClick={() => {changeCrew(index); handleStyle(index)}}>
                </button>
              ))}
            </div>   
        </div> 
        </div>
             <div className="div-img-crew"><img src={arrayCrew[currentIndex].images.png} alt={`${arrayCrew[currentIndex].name} picture`} /></div> 
        </div>
    </>)
}
export default Crew