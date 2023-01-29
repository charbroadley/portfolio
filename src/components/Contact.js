import linkedin from "../images/linkedin.png"

const Contact = () => {
    return(
        <section className="contact">
        <h3 className="contact-title">CONTACT INFO</h3>
            <p className="contact-info">
                <p>broadleychar@gmail.com</p>
                <p>
                    <a href="www.linkedin.com/in/charlotte-broadley">
                        <img src={linkedin} width="25" alt="linkedin">
                        </img>
                    </a>
                </p>
            </p>
                
        </section>
    )
}

export default Contact