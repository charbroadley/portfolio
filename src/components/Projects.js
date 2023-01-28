import styled from "styled-components";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

const ProjectBox = styled.p`
    background-color: #FFB7C6;
    border-radius: 20px;
    list-style-type: none;
    margin: 25px 100px 25px 100px;
    padding: 10px;
`
const Heading = styled.h3`
    font-family: 'Amatic SC', sans-serif;
    font-size: 40px;
    margin-left: 100px;
`

const Projects = () => {
    return (
        <section>
            <Heading>PROJECTS</Heading>
                    <ProjectBox><Project1/></ProjectBox>
                    <ProjectBox><Project2/></ProjectBox>
                    <ProjectBox><Project3/></ProjectBox>
        </section>
    )
}

export default Projects