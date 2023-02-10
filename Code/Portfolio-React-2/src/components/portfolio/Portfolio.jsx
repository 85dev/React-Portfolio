import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/mockup2.png'
import IMG2 from '../../assets/amortisseur.jpg'
import IMG3 from '../../assets/me-5.png'
import IMG4 from '../../assets/me-5.png'
import IMG5 from '../../assets/me-5.png'

// DON'T USE THE iMAGES IN PRODUCTION

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Origami App - Rencontrez aujourd'hui vos amis de demain",
        github: 'https://github.com/85dev/landingOrigami',
        demo: 'https://nameless-fortress-01398.herokuapp.com/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Proquinter - Application web avec back-office, gestion en temps réel des stocks',
        github: 'https://github.com/',
        demo: 'https://dribbble.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Crypto...',
        github: 'https://github.com/',
        demo: 'https://dribbble.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Crypto...',
        github: 'https://github.com/',
        demo: 'https://dribbble.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Crypto...',
        github: 'https://github.com/',
        demo: 'https://dribbble.com'
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio