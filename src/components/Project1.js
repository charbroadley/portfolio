import fantasyBazaar from '../images/fantasy-bazaar.png'

const Project1 = () => {
    return(
        <div className="project-container">
            <div className="project-description">
                <h3>Fantasy Bazaar</h3>
                <h4>Python, Flask, PostgreSQL<br/>
                    Solo, 6 days</h4>
                <p>A bit about project one. A bit about project one. A bit about project one. A bit about project one. A bit about project one. A bit about project one. A bit about project one. A bit about project one. A bit about project one. A bit about project one. A bit about project one. A bit about project one.</p>
            </div>
            <img className="project-image" src={fantasyBazaar} height="200" class="responsive" alt="bullseye with rocket flying across"></img>
        </div>
    )
}

export default Project1