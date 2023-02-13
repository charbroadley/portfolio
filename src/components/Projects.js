import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
// import Project4 from "./Project4";

const Projects = () => {
    return (
        <section>
            <h3 className="project-title">PROJECTS</h3>
                <div className="projects-container">
                        <p className="project"><Project2/></p>
                        <p className="project"><Project3/></p>
                        <p className="project"><Project1/></p>
                        {/* <p className="project"><Project4/></p> */}
                </div>
        </section>
    )
}

export default Projects