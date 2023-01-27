import styled from "styled-components";

const Heading = styled.h3`
    font-family: 'Amatic SC', sans-serif;
    font-size: 40px;
    margin: 15px 100px 15px 100px;
`
const AboutMe = styled.div`
    background-color: #FFB7C6;
    border-radius: 20px;
    margin: 25px 100px 25px 100px;
    /* top, right, bottom, left */
`
const MyStack = styled(AboutMe)`
    margin: 25px 100px 25px 100px;
`
const Paragraph = styled.p`
    padding: 10px;
    margin: 0px;
`
const LongParagraph = styled(Paragraph)`
    text-align: justify;
`

const Details = () => {

    return (
        <section>
            <Heading>ABOUT ME</Heading>
                <AboutMe>
                    <LongParagraph>I am an Edinburgh based software developer with a passion for problem-solving (absolutely love a challenge). I am always learning and am eager to improve myself as a developer. My background is in design and administration which has enabled me to develop strong organisational and interpersonal skills. In my free time I love to be outdoors, and to run in the hills around Edinburgh.</LongParagraph>
                    <br/>
                </AboutMe>
                <Heading>STACK</Heading>
                    <MyStack>
                        <Paragraph>Language 1</Paragraph>
                        <Paragraph>Language 2</Paragraph>
                </MyStack>
        </section>
    )
}

export default Details