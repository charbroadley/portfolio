import styled from "styled-components";

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
                    <ProjectBox>Project 1</ProjectBox>
                    <ProjectBox>Project 2</ProjectBox>
                    <ProjectBox>Project 3</ProjectBox>
                    <ProjectBox>Project 4</ProjectBox>
        </section>
    )
}

export default Projects