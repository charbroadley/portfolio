import punkPintsScreengrab from '../images/punk-pints.png'

const Project2 = () => {
    return(
        <div className="project-container">
            <div className="project-description">
                <h3>Punk Pints</h3>
                <h4>Javascript, React, API<br/>
                    Solo, 2 days</h4>
                <p>
                    A fun, interactive app using the Punk API. Users enter a number and are returned a suggested Brew Dog beer for their next pint, which they can mark as already drank, or add to their list to try next.
                    <br/>
                    <a href="https://github.com/charbroadley/punk_pints">View on GitHub</a>
                </p>
            </div>
            <img className="project-image" src={punkPintsScreengrab} alt="screengrab of Punk Pints app"></img>
        </div>
    )
}

export default Project2