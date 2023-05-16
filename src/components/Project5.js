import startScreen from '../images/children-of-the-bookcase.png'

const Project5 = () => {
    return(
        <div className="project-container">
            <div className="project-description">
                <h3>Children of the Bookcase</h3>
                <br/>
                <h4>C#, Unity<br/>
                    Group, 2 weeks</h4>
                <p>Our CodeClan capstone project. We made a 3D, first-person escape room style game, using the Unity game engine and C# scripts.<br/>
                I was excited to work on a project which was totally different to anything I’d done before, and also to create a game which my friends and I would enjoy playing.
                <br/><br/>
                    <div className="button-container">
                        <a className="button" href="https://github.com/samuel-williams-ed/Escape_Game" target="_blank">View on GitHub</a>
                        <a className="live-link" href="https://play.unity.com/mg/other/children-of-the-bookcase" target="_blank">Play on Unity Play</a>
                    </div>
                </p>
            </div>
            <img className="project-image" src={startScreen} alt="The start screen from Children of the Bookcasr"></img>
        </div>
    )
}

export default Project5