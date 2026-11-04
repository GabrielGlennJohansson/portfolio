import "../stylesheet/site-ladning-page.css"
import { useState, useEffect } from "react";

function SiteLandingPage() {
    const [nameClass, setNameClass] = useState("dev-name")
    const [socialsClass, setSocialsClass] = useState("landing-page-socials")
    const [infoClass, setInfoClass] = useState("landing-page-info")
    const [imgClass, setImgClass] = useState("landing-page-img")

    useEffect(() => {
        setTimeout(() => {
            setNameClass("dev-name dev-name-unwrap")
            setSocialsClass("landing-page-socials landing-page-socials-unwrap")
            setInfoClass("landing-page-info landing-page-info-unwrap")
            setImgClass("landing-page-img landing-page-img-unwrap")
        }, 1);
    }, [])

  return (
    <div className="landing-page">
        <h1 className={nameClass}>
            Gabriel <span className="dev-last-name">Johansson</span>
        </h1>
        <div className="landing-page-content">
            <div className={socialsClass}>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
            </div>
            <div className={infoClass}>
                <h2 className="landing-page-info-header">Fullstack Developer</h2>
                <p className="landing-page-info-p">
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Nulla fuga nesciunt 
                    quod sint eius facere, ratione non ad 
                    exercitationem minima nihil eum repellat 
                    eveniet quia laudantium et minus est qui!
                </p>
                <button type="button">Let's collaborate ↗</button>
            </div>
            <div className={imgClass}></div>
        </div>
    </div>
  )
}

export default SiteLandingPage
