import "../stylesheet/site-header.css"

function SiteHeader() {
  return (
    <div className="header">
        <nav className="menu">
            <div className="available">Available for New Project</div>
            <a>About me</a>
            <a>Portfolio</a>
            <a>Services</a>
            <a>Blog</a>
            <a className="book-call">Book A Call</a>
        </nav>
    </div>
  )
}

export default SiteHeader