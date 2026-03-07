import type { ReactNode } from 'react';
import { HardHat, Drill, Building2, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import Gallery from './components/Gallery';

const App = () => {
    return (
        <div className="app">
            {/* Header */}
            <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid #333', position: 'fixed', width: '100%', background: 'rgba(18,18,18,0.95)', zIndex: 1000 }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Drill color="#ff9500" size={32} />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>OMEGA<span style={{ color: '#ff9500' }}>DRILL</span></span>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
                        <a href="#home">Strona Główna</a>
                        <a href="#services">Usługi</a>
                        <a href="#gallery">Realizacje</a>
                        <a href="#contact">Kontakt</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/images/hero_bg.png") center/cover' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ maxWidth: '800px', lineHeight: '1.1' }}>Profesjonalne Usługi <span style={{ color: '#ff9500' }}>Geotechniczne</span></h1>
                        <p style={{ fontSize: '1.25rem', color: '#ccc', margin: '1.5rem 0 2.5rem 0', maxWidth: '600px' }}>
                            Specjalizujemy się w robotach mikropalowych i wzmacnianiu podłoża 24/7 na terenie całej Polski.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <button className="btn">Nasze Usługi</button>
                            <button className="btn btn-secondary">Kontakt</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" style={{ background: '#1a1a1a' }}>
                <div className="container">
                    <h2>Nasze Usługi</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                        <ServiceCard
                            icon={<Drill size={40} color="#ff9500" />}
                            title="Roboty Mikropalowe"
                            description="Wykonujemy mikropale w technologiach tradycyjnych oraz żerdzi systemowych TITAN, GONAR, ANP."
                        />
                        <ServiceCard
                            icon={<HardHat size={40} color="#ff9500" />}
                            title="Wzmacnianie Podłoża"
                            description="Profesjonalne rozwiązania geotechniczne dla budownictwa kubaturowego i inżynieryjnego."
                        />
                        <ServiceCard
                            icon={<Building2 size={40} color="#ff9500" />}
                            title="Projektowanie"
                            description="Kompleksowe doradztwo projektowe i wykonawcze w zakresie posadowień specjalnych."
                        />
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery">
                <div className="container">
                    <h2>Realizacje</h2>
                    <Gallery />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ background: '#1a1a1a' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                        <div>
                            <h2>Kontakt</h2>
                            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Phone color="#ff9500" />
                                    <span>+48 123 456 789</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Mail color="#ff9500" />
                                    <span>biuro@omegadrill.pl</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <MapPin color="#ff9500" />
                                    <span>ul. Geotechniczna 1, 00-001 Warszawa</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                                <Facebook className="social-icon" />
                                <Instagram className="social-icon" />
                            </div>
                        </div>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#222', padding: '2.5rem' }}>
                            <input type="text" placeholder="Imię i nazwisko" style={{ background: '#333', border: 'none', padding: '1rem', color: 'white' }} />
                            <input type="email" placeholder="E-mail" style={{ background: '#333', border: 'none', padding: '1rem', color: 'white' }} />
                            <textarea placeholder="Wiadomość" rows={5} style={{ background: '#333', border: 'none', padding: '1rem', color: 'white' }}></textarea>
                            <button className="btn">Wyślij wiadomość</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid #333' }}>
                <p style={{ color: '#666' }}>&copy; 2024 Omega Drill Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
            </footer>
        </div>
    );
};

const ServiceCard = ({ icon, title, description }: { icon: ReactNode, title: string, description: string }) => (
    <motion.div
        whileHover={{ y: -10 }}
        style={{ background: '#222', padding: '3rem 2rem', borderBottom: '4px solid transparent', transition: '0.3s' }}
        className="service-card"
    >
        <div style={{ marginBottom: '1.5rem' }}>{icon}</div>
        <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: '#aaa' }}>{description}</p>
    </motion.div>
);

export default App;
