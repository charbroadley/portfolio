import breakTimeDashboard from '../images/breaktime-dashboard.png'

const Project3 = () => {
    return(
        <div className="project-container">
            <div className="project-description">
                <h3>BreakTime</h3>
                <h4>Javascript, Express.js, React, MongoDB<br/>
                    Group, 6 days</h4>
                <p>
                    A habit tracking app which aims to encourage good behaviour with regards to taking breaks during the working day. Users can record waters/coffees drank, and breaks taken, and view weekly summaries of these in charts created using the Highcharts library. There is also a Breathe feature intended to guide the user in a moment of meditation and give a sense of relaxation.
                </p>
            </div>
            <img className="project-image" src={breakTimeDashboard} alt="screengrab of the BreakTime dashboard"></img>
        </div>
    )
}

export default Project3