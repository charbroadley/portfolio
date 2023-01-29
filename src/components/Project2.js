import styled from "styled-components";
import punkPintsScreengrab from '../images/punk-pints.png'

const ProjectContainer = styled.div`
    /* display: grid;
    grid-template-areas: 
        'groupedtext soloimage';
    grid-template-columns: 55% 45%; */
    display: flex;
    flex-wrap: wrap;
`
const Text = styled.div`
    /* grid-area: groupedtext; */
`
const Image = styled.img`
    /* grid-area: soloimage; */
    width: responsive;
    max-height: 200px;
`

const Project2 = () => {
    return(
        <ProjectContainer>
            <Text>
                <h3>Punk Pints</h3>
                <h4>Javascript, React, API<br/>
                    Solo, 2 days</h4>
                <p>A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. </p>
            </Text>
            <Image src={punkPintsScreengrab} height="200" class="responsive" alt="screengrab of Punk Pints app"></Image>
        </ProjectContainer>
    )
}

export default Project2