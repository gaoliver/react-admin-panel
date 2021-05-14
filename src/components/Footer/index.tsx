import "./index.scss"

function Footer() {
    var date = new Date()
    return (
        <div className="footer">
            <p>&copy; {date.getFullYear()} Gabriel Ramos</p>
        </div>
    )
}

export default Footer
