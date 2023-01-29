import punkPintsScreengrab from '../images/punk-pints.png'

const Project3 = () => {
    return(
        <div className="project-container">
            <div className="project-description">
                <h3>E-Commerce</h3>
                <h4>Javascript, React<br/>
                    Solo, 2 days</h4>
                <p>A bit about project three. A bit about project three. A bit about project three. A bit about project three. A bit about project three. A bit about project three. A bit about project three. A bit about project three. A bit about project three. A bit about project three. A bit about project three. </p>
            </div>
            <img className="project-image" src={punkPintsScreengrab} height="200" class="responsive" alt="screengrab of Punk Pints app"></img>
        </div>
    )
}

export default Project3