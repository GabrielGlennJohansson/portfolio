import "../stylesheet/site-header.css"

function SiteHeader() {
  return (
    <div className="header">
        <div className="available">Available for New Project</div>
        <nav className="menu">
            <a>About me</a>
            <a>Portfolio</a>
            <a>Services</a>
            <a>Blog</a>
        </nav>
        <a className="book-call">Book A Call</a>
    </div>
  )
}

export default SiteHeader