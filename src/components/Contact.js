import linkedin from "../images/linkedin.png"
import github from "../images/github.png"


const Contact = () => {
    return(
        <section className="contact">
        <h3 className="contact-title">CONTACT INFO</h3>
            <p className="contact-info">
                broadleychar@gmail.com</p>
                    <a className="linkedin" href="http://www.linkedin.com/in/charbroadley" target="_blank">
                        <img src={linkedin} width="25" alt="link to my linkedin">
                        </img>
                    </a>
                    <a className="github" href="https://github.com/charbroadley" target="_blank">
                        <img src={github} width="25" alt="link to my github">
                        </img>
                    </a>
        </section>
    )
}

export default Contact