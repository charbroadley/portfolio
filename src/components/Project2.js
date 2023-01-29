import punkPintsScreengrab from '../images/punk-pints.png'

const Project2 = () => {
    return(
        <div className="project-container">
            <div className="project-description">
                <h3>Punk Pints</h3>
                <h4>Javascript, React, API<br/>
                    Solo, 2 days</h4>
                <p>A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. A bit about project two. </p>
            </div>
            <img className="project-image" src={punkPintsScreengrab} alt="screengrab of Punk Pints app"></img>
        </div>
    )
}

export default Project2