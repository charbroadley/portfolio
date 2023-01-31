    import drawing from '../images/drawing.jpg'

const Heading = () => {

    return (
        <section className='heading'>
            <h1 className="name">Char Broadley</h1>
            <h2 className='job-title'>Software Developer</h2>
            
            <img className='me' src={drawing} alt="A drawing of Char by a friend" width="150"></img>
        </section>
    )
}

export default Heading