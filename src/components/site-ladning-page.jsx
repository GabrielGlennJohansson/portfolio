import "../stylesheet/site-ladning-page.css"

function SiteLandingPage() {
  return (
    <div className="landing-page">
        <h1 className="dev-name">
            Gabriel <span className="dev-last-name">Johansson</span>
        </h1>
        <div className="landing-page-content">
            <div className="landing-page-info">
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
            <div className="landing-page-socials">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
            </div>
            <div className="landing-page-img"></div>
        </div>
    </div>
  )
}

export default SiteLandingPage
