import React from 'react';

const Contact = () => {
    return (
        <div>
            <header>
                <div className="logo">JOHN DOE</div>
                <nav>
                    <a href="/" target="_blank" rel="noopener noreferrer">HOME</a>
                    <a href="/services" target="_blank" rel="noopener noreferrer">SERVICES</a>
                    <a href="/portfolio" target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
                    <a href="/contact" target="_blank" rel="noopener noreferrer">CONTACT</a>
                    <a href="/mentions-légales" target="_blank" rel="noopener noreferrer">MENTIONS LÉGALES</a>
                </nav>
            </header>
            <main>
                <section className="contact">
                    <h1>Contact</h1>
                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <div className="contact-container">
                        <div className="contact-form">
                            <h2>Formulaire de contact</h2>
                            <form>
                                <input type="text" name="name" placeholder="Votre nom" />
                                <input type="email" name="email" placeholder="Votre adresse email" />
                                <input type="tel" name="phone" placeholder="Votre numéro de téléphone" />
                                <input type="text" name="subject" placeholder="Sujet" />
                                <textarea name="message" placeholder="Votre message"></textarea>
                                <button type="submit">Envoyer</button>
                            </form>
                        </div>
                        <div className="contact-info">
                            <h2>Mes coordonnées</h2>
                            <p><strong>John Doe</strong><br />
                            40 rue Laure Diebold<br />
                            69009 Lyon, France<br />
                            <a href="tel:1020304050">10 20 30 40 50</a><br />
                            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                            <div className="map">
                                <iframe 
                                    title="Location of John Doe"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9359.313286842567!2d4.794302156756846!3d45.780398556594676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1734646444043!5m2!1sfr!2sfr" 
                                    width="600" 
                                    height="450" 
                                    style={{border: 0}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                {/* Footer content here */}
            </footer>
        </div>
    );
};

export default Contact;