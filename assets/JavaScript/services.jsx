import React from 'react';
import './style-services.css';

const Services = () => {
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
            <section className="services">
                <h2>Mon offre de services</h2>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
                <div className="line"></div>
                <div className="service-grid">
                    <div className="service-item">
                        <img src="../Images/Pictogramme/Pinceau.png" alt="UX Design" />
                        <h3>UX Design</h3>
                        <p>L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc) centrés sur l'utilisateur, c'est-à-dire des produits faciles à utiliser et à comprendre. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
                    </div>
                    <div className="service-item">
                        <img src="../Images/Pictogramme/Code.png" alt="Développement web" />
                        <h3>Développement web</h3>
                        <p>Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).</p>
                    </div>
                    <div className="service-item">
                        <img src="../Images/Pictogramme/Rechercher.png" alt="Référencement" />
                        <h3>Référencement</h3>
                        <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
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
                        <a href="https://fr.linkedin.com/" target="_blank"><img src="../Images/Pictogramme/Linkedin.png" alt="LinkedIn" /></a>
                        <a href="https://github.com/" target="_blank"><img src="../Images/Pictogramme/GitHub.png" alt="GitHub" /></a>
                        <a href="https://x.com/home" target="_blank"><img src="../Images/Pictogramme/Twitter.png" alt="Twitter" /></a>
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
                        <li>Maquette d'un site</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Services;