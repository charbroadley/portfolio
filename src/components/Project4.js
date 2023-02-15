import breathe from '../images/breathe.png'

const Project4 = () => {
    return(
        <div className="project-container">
            <div className="project-description">
                <h3>Breathe</h3>
                <h4>JavaScript, React, CSS3<br/>
                    Solo</h4>
                <p>A personal mini-project undertaken as part of our JavaScript group project (BreakTime). I wanted to experiment with CSS to create an animation. My animation encourages the user to breath in time with its movements, and creates a sense of calm and relaxation. </p>
            </div>
            <img className="project-image" src={breathe} alt="A screengrab of the Breathe animation"></img>
        </div>
    )
}

export default Project4