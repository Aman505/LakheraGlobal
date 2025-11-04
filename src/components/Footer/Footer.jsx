import './Footer.css';
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-upper">
                <div className="footer-container">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src="/assets/login/Logo.svg" alt="Zyvo Logo" className="footer-logo-img" />
                        </div>
                        <p className="footer-description">
                            Experience the smarter way to grow.<br />
                            Start your journey today — because<br />
                            your clients and your teams deserve a<br />
                            solution that works together.
                        </p>
                    </div>
                    
                    <div className="footer-links">
                        <div className="footer-column">
                            <a href="#">Back to Top</a>
                            <a href="#">Video Testimonials</a>
                            <a href="#">Our Accomplishments</a>
                            <a href="#">A Glimpse on Us</a>
                            <a href="#">Trainee Achievements</a>
                        </div>
                        
                        <div className="footer-column">
                            <a href="#">Location</a>
                            <a href="#">Why Choose Us</a>
                            <a href="#">Trainee's Voice</a>
                            <a href="#">Our Services</a>
                            <a href="#">FAQs</a>
                        </div>
                        
                        <div className="footer-column footer-social">
                            <p className="social-heading">Follow us on</p>
                            <div className="social-icons">
                                <a href="#" className="social-icon" aria-label="Twitter">
                                    <Twitter className="icon" />
                                </a>
                                <a href="#" className="social-icon" aria-label="Facebook">
                                    <Facebook className="icon" />
                                </a>
                                <a href="#" className="social-icon" aria-label="Instagram">
                                    <Instagram className="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-lower">
                <div className="footer-copyright">
                    <p>© 2025, Zyvo Pvt. Ltd. All Rights Reserved.</p>
                </div>
                <div className="footer-shapes">
                    <div className="shape shape-pink"></div>
                    <div className="shape shape-yellow"></div>
                    <div className="shape shape-orange"></div>
                    <div className="shape shape-blue"></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

