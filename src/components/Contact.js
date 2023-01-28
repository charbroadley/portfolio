import styled from "styled-components";
import linkedin from "../images/linkedin.png"

const Heading = styled.h3`
    font-family: 'Amatic SC', sans-serif;
    font-size: 40px;
`
const Heading1 = styled(Heading)`
    margin: 15px 100px 15px 100px;
`
const ContactInfo = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 150px;
    margin-right: 150px;
`
const Text = styled.p`
    font-size: 1em;
`

const Contact = () => {
    return(
        <ContactInfo>
        <Heading1>CONTACT INFO</Heading1>
            <Text>
                <p>broadleychar@gmail.com</p>
                <p>
                    <a href="www.linkedin.com/in/charlotte-broadley">
                        <img src={linkedin} width="25" alt="linkedin">
                        </img>
                    </a>
                </p>
            </Text>
                
        </ContactInfo>
    )
}

export default Contact