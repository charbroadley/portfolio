import styled from "styled-components";
import fantasyBazaar from '../images/fantasy-bazaar.png'

const ProjectContainer = styled.div`
    display: grid;
    grid-template-areas: 
        'groupedtext soloimage';
    grid-template-columns: 55% 45%;
`
const Text = styled.div`
    grid-area: groupedtext;
`
const Image = styled.img`
    grid-area: soloimage;
    
`

const Project1 = () => {
    return(
        <ProjectContainer>
            <Text>
                <h3>Fantasy Bazaar</h3>
                <h4>Python, Flask, PostgreSQL<br/>
                    Solo, 6 days</h4>
                <p>A bit about project one</p>
            </Text>
            <Image src={fantasyBazaar} height="200" alt="bullseye with rocket flying across"></Image>
        </ProjectContainer>
    )
}

export default Project1