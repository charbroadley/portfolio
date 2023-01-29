import linkedin from "../images/linkedin.png"

const Contact = () => {
    return(
        <section className="contact">
        <h3 className="contact-title">CONTACT INFO</h3>
            <p className="contact-info">
                broadleychar@gmail.com</p>
                    <a className="linkedin" href="www.linkedin.com/in/charlotte-broadley">
                        <img src={linkedin} width="25" alt="linkedin">
                        </img>
                    </a>
        </section>
    )
}

export default Contact