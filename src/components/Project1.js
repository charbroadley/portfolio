import fantasyBazaar from '../images/fantasy-bazaar.png'

const Project1 = () => {
    return(
        <div className="project-container">
            <div className="project-description">
                <h3>Fantasy Bazaar</h3>
                    <br/>
                <h4>Python, Flask, PostgreSQL, CSS3, HTML5<br/>
                    Solo, 6 days</h4>
                <p>
                    My first project at CodeClan. An inventory application for a bookshop which allows the shop owner to create and edit books/authors, track individual books/authors, and clearly display low stock and out of stock items. I was able to use my own experience of working in independent shops to better understand what my client would find beneficial. 
                    <br/><br/>
                    <a href="https://github.com/charbroadley/fantasy_bazaar">View on GitHub</a>
                </p>
            </div>
            <img className="project-image" src={fantasyBazaar} alt="The Fantasy Bazaar homepage, showing shop news and stock updates"></img>
        </div>
    )
}

export default Project1