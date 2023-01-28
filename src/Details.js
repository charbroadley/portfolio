import styled from "styled-components";

const DetailsSection = styled.section`
    display: grid;
    grid-template-areas:
        'heading1 heading2'
        'textbox1 textbox2';
    grid-template-columns: 60% 40%;
`
const Heading = styled.h3`
    font-family: 'Amatic SC', sans-serif;
    font-size: 40px;
`
const Heading1 = styled(Heading)`
    grid-area: heading1;
    margin: 15px 100px 15px 100px;
`
const Heading2 = styled(Heading)`
    grid-area: heading2;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 0.6em;

`
const AboutMe = styled.div`
    background-color: #FFB7C6;
    border-radius: 20px;
    margin: 25px 25px 25px 100px;
    /* top, right, bottom, left */
`
const MyStack = styled(AboutMe)`
    margin: 25px 100px 25px 25px;
`
const Paragraph = styled.p`
    padding: 5px;
    margin: 0px;
`
const LongParagraph = styled(Paragraph)`
    text-align: justify;
    grid-area: textbox1;
`
const Textbox2 = styled(Paragraph)`
    grid-area: textbox2;
    display: grid;
    grid-template-areas:
        'first second third';
`
const Column1 = styled(Paragraph)`
    grid-area: first;
`
const Column2 = styled(Paragraph)`
    grid-area: second;
`
const Column3 = styled(Paragraph)`
    grid-area: third;
`

const Details = () => {

    return (
        <DetailsSection>
            <Heading1>ABOUT ME</Heading1>
                <AboutMe>
                    <LongParagraph>I am an Edinburgh based software developer with a passion for problem-solving (absolutely love a challenge). I am always excited to learn and am eager to improve myself. My background is in design and administration which has enabled me to develop strong organisational and interpersonal skills. In my free time I love to be outdoors, and to run in the hills around Edinburgh.</LongParagraph>
                    <br/>
                </AboutMe>
                <Heading2>STACK</Heading2>
                    <MyStack>
                        <Textbox2>
                            <Column1>
                                Python<br/>
                                Flask<br/>
                                Node.js<br/>
                            </Column1>
                            <Column2>
                                Javascript<br/>
                                React<br/>
                                HTML5<br/>
                                CSS3<br/>
                            </Column2>
                            <Column3>
                                PostgreSQL<br/>
                                Git
                            </Column3>
                        </Textbox2>
                </MyStack>
        </DetailsSection>
    )
}

export default Details