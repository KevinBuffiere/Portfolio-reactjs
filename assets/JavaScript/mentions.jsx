import React from 'react';
import './style-mentions-légales.css';

const MentionsLegales = () => {
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
                        <li><a href="./mentions-légales.html" className="highlight" target="_blank">MENTIONS LÉGALES</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="legal-info">
                    <h1>Mentions légales</h1>
                    <div className="info-container">
                        <div className="info-section">
                            <h2>Éditeur du site</h2>
                            <div className="info-content">
                                <p>John Doe</p>
                                <p>40 rue Laure Diebold</p>
                                <p>69009 Lyon, France</p>
                                <p>10 20 30 40 50</p>
                                <p>john.doe@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-section">
                            <h2>Hébergeur</h2>
                            <div className="info-content">
                                <p>alwaysdata</p>
                                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                <p><a href="https://www.alwaysdata.com" target="_blank">www.alwaysdata.com</a></p>
                            </div>
                        </div>
                        <div className="info-section">
                            <h2>Crédits</h2>
                            <div className="info-content">
                                <p>Ce site a été réalisé par John Doe, étudiant au Centre Européen de formation.</p>
                                <p>Les images utilisées sur ce site sont libres de droit et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank">Pixabay</a></p>
                                <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com" target="_blank">John Doe - Freepik - Flaticon</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer-section">
                    <div>
                        <h3>John Doe</h3>
                        <p>40 rue Laure Diebold</p>
                        <p>69009 Lyon, France</p>
                        <a href="tel:10 20 30 40 50">10 20 30 40 50</a><br />
                        <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                        <div className="social-media">
                            <a href="https://fr.linkedin.com/" target="_blank"><img src="./assets/Images/Pictogramme/Linkedin.png" alt="LinkedIn" /></a>
                            <a href="https://github.com/" target="_blank"><img src="./assets/Images/Pictogramme/GitHub.png" alt="GitHub" /></a>
                            <a href="https://x.com/home" target="_blank"><img src="./assets/Images/Pictogramme/Twitter.png" alt="Twitter" /></a>
                        </div>
                    </div>
                    <div>
                        <h3>Liens utiles</h3>
                        <ul>
                            <li><a href="./index.html" target="_blank">Accueil</a></li>
                            <li><a href="./services.html" target="_blank">Services</a></li>
                            <li><a href="./portfolio.html" target="_blank">Portfolio</a></li>
                            <li><a href="./contact.html" target="_blank">Me contacter</a></li>
                            <li><a href="./mentions-légales.html" target="_blank">Mentions légales</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Mes dernières réalisations</h3>
                        <ul>
                            <li>Fresh Food</li>
                            <li>Restaurant Alice</li>
                            <li>Espace bien-être</li>
                            <li>SEO</li>
                            <li>Création d'une API</li>
                            <li>Maquette d'un site</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MentionsLegales;