import { createContext, useState, useEffect } from "react";
export const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
    const arrayBackgrounds = [
        { desktop: "assets/home/background-home-desktop.jpg", tablet: "assets/home/background-home-tablet.jpg", mobile: "assets/home/background-home-mobile.jpg" },
        { desktop: "assets/destination/background-destination-desktop.jpg", tablet: "assets/destination/background-destination-tablet.jpg", mobile: "assets/destination/background-destination-mobile.jpg" },
        { desktop: "assets/crew/background-crew-desktop.jpg", tablet: "assets/crew/background-crew-tablet.jpg", mobile: "assets/crew/background-crew-mobile.jpg" },
        { desktop: "assets/technology/background-technology-desktop.jpg", tablet: "assets/technology/background-technology-tablet.jpg", mobile: "assets/technology/background-technology-mobile.jpg" }
    ];

    const getBgImage = (index) => {
        const width = window.innerWidth;
        if (width <= 600) return arrayBackgrounds[index].mobile;
        if (width <= 1024) return arrayBackgrounds[index].tablet;
        return arrayBackgrounds[index].desktop;
    };

    const getDefaultBg = () => {
        return localStorage.getItem("background") || getBgImage(0);
    };

    const [bg, setBg] = useState(getDefaultBg());

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bg})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
        document.body.style.transition = "background-image 0.5s ease-in-out";

        localStorage.setItem("background", bg);

        const handleResize = () => {
            setBg(getBgImage(arrayBackgrounds.findIndex(b => Object.values(b).includes(bg))));
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [bg]);

    const changeBg = (index) => {
        const imgSrc = getBgImage(index);
        const img = new Image();
        img.src = imgSrc;
        img.onload = () => {
            setBg(imgSrc);
            localStorage.setItem("background", imgSrc);
        };
    };

    return (
        <BackgroundContext.Provider value={{ changeBg }}>
            {children}
        </BackgroundContext.Provider>
    );
};
