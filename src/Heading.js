import styled from 'styled-components';
import myPhoto from './images/me.jpg'

const MyName = styled.h1`
    font-family: 'Amatic SC', sans-serif;
    font-size: 70px;
`
const MyJobTitle = styled(MyName)`
    font-size: 50px;
`
const Details = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 150px;
    margin-right: 150px;
`
const MyPhoto = styled.img`
    border-radius: 50%;
`

const Heading = () => {

    return (
        <Details>
            <MyName>Char Broadley</MyName>
            <MyJobTitle>Software Developer</MyJobTitle>
            
            <MyPhoto src={myPhoto} alt="me" width="150"></MyPhoto>
        </Details>
    )
}

export default Heading