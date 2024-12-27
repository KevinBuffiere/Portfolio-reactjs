import React from 'react';
import './style-portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <header>
                <div className="logo">JOHN DOE</div>
                <nav>
                    <a href="./index.html" target="_blank">HOME</a>
                    <a href="./services.html" target="_blank">SERVICES</a>
                    <a href="./portfolio.html" target="_blank">PORTFOLIO</a>
                    <a href="./contact.html" target="_blank">CONTACT</a>
                    <a href="./mentions-légales.html" target="_blank">MENTIONS LÉGALES</a>
                </nav>
            </header>
            <div className="hero"></div>
            <section className="portfolio">
                <h2>Portfolio</h2>
                <p>Voici quelques-unes de mes réalisations.</p>
                <div className="line"></div>
                <div className="portfolio-grid">
                    <div className="portfolio-item">
                        <img src="./assets/Images/portfolio/fresh-food.jpg" alt="Fresh Food" />
                        <h3>Fresh Food</h3>
                        <p>Site de vente de produits frais en ligne</p>
                        <a href="#">Voir le site</a>
                        <p>Site réalisé avec PHP et MySQL</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="./assets/Images/portfolio/restaurant-japonais.jpg" alt="Restaurant Akira" />
                        <h3>Restaurant Akira</h3>
                        <p>Site de vente de produits frais en ligne</p>
                        <a href="#">Voir le site</a>
                        <p>Site réalisé avec WordPress</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="./assets/Images/portfolio/espace-bien-etre.jpg" alt="Espace bien-être" />
                        <h3>Espace bien-être</h3>
                        <p>Site de vente de produits frais en ligne</p>
                        <a href="#">Voir le site</a>
                        <p>Site réalisé avec LARAVEL</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="./assets/Images/portfolio/seo.jpg" alt="SEO" />
                        <h3>SEO</h3>
                        <p>Amélioration du référencement d'un site e-commerce</p>
                        <a href="#">Voir le site</a>
                        <p>Utilisation des outils SEO</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="./assets/Images/portfolio/coder.jpg" alt="Création d'une API" />
                        <h3>Création d'une API</h3>
                        <p>Création d'une API RESTful publique</p>
                        <a href="#">Voir le site</a>
                        <p>PHP - SYMFONY</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="./assets/Images/portfolio/screens.jpg" alt="Maquette d'un site web" />
                        <h3>Maquette d'un site web</h3>
                        <p>Création du prototype d'un site web</p>
                        <a href="#">Voir le site</a>
                        <p>Réalisé avec FIGMA</p>
                    </div>
                </div>
            </section>
            <footer>
                <div className="contact-info">
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
                <div className="footer-section">
                    <h3>Liens utiles</h3>
                    <ul>
                        <li><a href="./index.html" target="_blank">Accueil</a></li>
                        <li><a href="./services.html" target="_blank">Services</a></li>
                        <li><a href="./portfolio.html" target="_blank">Portfolio</a></li>
                        <li><a href="./contact.html" target="_blank">Me contacter</a></li>
                        <li><a href="./mentions-légales.html" target="_blank">Mentions légales</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Mes dernières réalisations</h3>
                    <ul>
                        <li>Fresh Food</li>
                        <li>Restaurant Akira</li>
                        <li>Espace bien-être</li>
                        <li>SEO</li>
                        <li>Création d'une API</li>
                        <li>Maquette d'un site web</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;