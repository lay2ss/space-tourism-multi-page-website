import { useState, useEffect } from "react"

function Destination(){
    const arrayDestination = [{
          "name": "Moon",
          "images": {
            "png": "assets/destination/image-moon.png",
            "webp": "assets/destination/image-moon.webp"
          },
          "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          "distance": "384,400 km",
          "travel": "3 days"
        },
        {
          "name": "Mars",
          "images": {
            "png": "assets/destination/image-mars.png",
            "webp": "assets/destination/image-mars.webp"
          },
          "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          "distance": "225 mil. km",
          "travel": "9 months"
        },
        {
          "name": "Europa",
          "images": {
            "png": "assets/destination/image-europa.png",
            "webp": "assets/destination/image-europa.webp"
          },
          "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          "distance": "628 mil. km",
          "travel": "3 years"
        },
        {
          "name": "Titan",
          "images": {
            "png": "assets/destination/image-titan.png",
            "webp": "assets/destination/image-titan.webp"
          },
          "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          "distance": "1.6 bil. km",
          "travel": "7 years"
        }
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const[isTransitioning, setIsTransitioning] = useState(true);

    function changePlanet(index){
      setIsTransitioning(false);

        setTimeout(() => {
          setCurrentIndex(index);
          setIsTransitioning(true);
        }, 500)
    }

    useEffect(() => {
      const list = document.querySelectorAll("li")[4];
      list.style.color = "white";
      list.style.textDecoration = "underline";
      list.style.textUnderlineOffset = "8px";
    }, [])

    function handleStyle(index) {
      const nodeList = document.querySelectorAll("li");
      const arrayList = Array.from(nodeList);
      const list = arrayList.filter((_, i) => i > 3);
      list.forEach((e, i) => {
        if(i === index){
          e.style.color = "white";
          e.style.textDecoration = "underline";
          e.style.textUnderlineOffset = "8px";
        } else {
          e.style.color = "";
          e.style.textDecoration = "";
          e.style.textUnderlineOffset = "";
        }
        } 
      )
    }

      return(
        <>
        <div className={`div-destination ${isTransitioning ? "fade-in" : "fade-out"}`}>
            <h2 className="section-title"><span>01</span> PICK YOUR DESTINATION</h2>
            <div className="div-img-and-inf">
                <img src={arrayDestination[currentIndex].images.png} alt={`${arrayDestination[currentIndex].name} image`} />
          <div className="div-planet-inf">
          <div className="div-destination-list">
            <ul>
              {arrayDestination.map((planet, index) => (
                <li key={index} onClick={() => {changePlanet(index); handleStyle(index)}}>
                  {planet.name.toUpperCase()}
                </li>
              ))}
            </ul>
        </div>
            <div>
              <h1>{arrayDestination[currentIndex].name.toUpperCase()}</h1>
              <p>{arrayDestination[currentIndex].description}</p>
            </div>
            <hr />
            <div className="div-distance-and-travel">
              <div>
                <p>AVG. DISTANCE</p>
                <h2>{arrayDestination[currentIndex].distance.toUpperCase()}</h2>
              </div>
              <div>
                <p>EST. TRAVEL TIME</p>
                <h2>{arrayDestination[currentIndex].travel.toUpperCase()}</h2>
              </div> 
            </div>
            </div>
          </div>
        </div>
        </>
      )
}
export default Destination
