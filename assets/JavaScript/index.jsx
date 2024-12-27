import React from 'react';
import ReactDOM from 'react-dom';
import './style-index.css';

function App() {
    const openOverlay = () => {
        document.getElementById('overlay').style.display = 'block';
    };

    const closeOverlay = () => {
        document.getElementById('overlay').style.display = 'none';
    };

    return (
        <div>
            <header>
                <div className="logo">JOHN DOE</div>
                <nav>
                    <ul>
                        <li><a href="./index.html" target="_blank">HOME</a></li>
                        <li><a href="./services.html" target="_blank">SERVICES</a></li>
                        <li><a href="./portfolio.html" target="_blank">PORTFOLIO</a></li>
                        <li><a href="./contact.html" target="_blank">CONTACT</a></li>
                        <li><a href="./mentions-légales.html" target="_blank">MENTIONS LÉGALES</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h1>Bonjour, je suis <br /> John Doe</h1>
                        <h2>Développeur web full stack</h2>
                        <button onClick={openOverlay} className="cta-button">En savoir plus</button>
                    </div>
                </section>

                <section className="content">
                    <div className="about">
                        <h2>À propos</h2>
                        <img src="./assets/Images/john-doe-about.jpg" alt="John Doe" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempora eligendi nostrum, ex delectus recusandae impedit nulla aut aliquid.</p>
                    </div>

                    <div className="skills">
                        <h2>Mes compétences</h2>
                        <div className="skill-bar">
                            <span>HTML 90%</span>
                            <div className="bar" style={{ width: '90%', backgroundColor: 'red' }}></div>
                        </div>
                        <div className="skill-bar">
                            <span>CSS3 80%</span>
                            <div className="bar" style={{ width: '80%', backgroundColor: 'blue' }}></div>
                        </div>
                        <div className="skill-bar">
                            <span>JAVASCRIPT 70%</span>
                            <div className="bar" style={{ width: '70%', backgroundColor: 'yellow' }}></div>
                        </div>
                        <div className="skill-bar">
                            <span>PHP 60%</span>
                            <div className="bar" style={{ width: '60%', backgroundColor: 'green' }}></div>
                        </div>
                        <div className="skill-bar">
                            <span>REACT 50%</span>
                            <div className="bar" style={{ width: '50%', backgroundColor: 'lightblue' }}></div>
                        </div>
                    </div>
                    <div className="overlay" id="overlay">
                        <div className="overlay-content">
                            <span className="close-btn" onClick={closeOverlay}>&times;</span>
                            <img src="./assets/Images/Pictogramme/loup.png" alt="Overlay Image" />
                            <div className="overlay-text">
                                <h2>John Doe</h2>
                                <p>As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="contact">
                        <h3>John Doe</h3>
                        <p>40 rue Laure Diebold<br />
                            69009 Lyon, France<br />
                            <a href="tel:10 20 30 40 50">10 20 30 40 50</a><br />
                            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                        <div className="social-media">
                            <a href="https://fr.linkedin.com/" target="_blank"><img src="./assets/Images/Pictogramme/Linkedin.png" alt="LinkedIn" /></a>
                            <a href="https://github.com/" target="_blank"><img src="./assets/Images/Pictogramme/GitHub.png" alt="GitHub" /></a>
                            <a href="https://x.com/home" target="_blank"><img src="./assets/Images/Pictogramme/Twitter.png" alt="Twitter" /></a>
                        </div>
                    </div>

                    <div className="links">
                        <h3>Liens utiles</h3>
                        <ul>
                            <li><a href="./index.html" target="_blank">Accueil</a></li>
                            <li><a href="./services.html" target="_blank">Services</a></li>
                            <li><a href="./portfolio.html" target="_blank">Portfolio</a></li>
                            <li><a href="./contact.html" target="_blank">Me contacter</a></li>
                            <li><a href="./mentions-légales.html" target="_blank">Mentions légales</a></li>
                        </ul>
                    </div>

                    <div className="portfolio">
                        <h3>Mes dernières réalisations</h3>
                        <ul>
                            <li>Formation</li>
                            <li>Restaurant Akira</li>
                            <li>Espace bien-être</li>
                            <li>Création d'une API</li>
                            <li>Maquette d'un site</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));