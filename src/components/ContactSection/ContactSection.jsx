import { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        applyingFor: '',
        privacyAccepted: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-section">
            <div className="contact-card">
                <div className="contact-left">
                    <h2 className="contact-heading">
                        Want to get a call from us?
                    </h2>
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group full-width">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="contact-input"
                                required
                            />
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="contact-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="contact-input"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="form-group full-width">
                            <input
                                type="text"
                                name="applyingFor"
                                placeholder="Applying for"
                                value={formData.applyingFor}
                                onChange={handleChange}
                                className="contact-input"
                                required
                            />
                        </div>
                        
                        <div className="form-group checkbox-group">
                            <input
                                type="checkbox"
                                name="privacyAccepted"
                                id="privacy"
                                checked={formData.privacyAccepted}
                                onChange={handleChange}
                                className="contact-checkbox"
                                required
                            />
                            <label htmlFor="privacy" className="checkbox-label">
                                I have read and accept the Privacy policy
                            </label>
                        </div>
                        
                        <button type="submit" className="contact-submit-btn">
                            Submit
                        </button>
                    </form>
                </div>
                
                <div className="contact-right">
                    <h3 className="contact-promo-heading">
                        Designed for Modern Businesses
                    </h3>
                    
                    <p className="contact-promo-text">
                        Whether you're a growing startup or a scaling enterprise, our all-in-one platform adapts to your unique needs. It centralizes client success and team operations—streamlining communication, automating workflows, and boosting productivity. Designed for flexibility and built for growth, it's the smart foundation for your next stage of success—all in one place.
                    </p>
                    
                    <div className="contact-attribution">
                        <p className="attribution-name">Your Name</p>
                        <p className="attribution-role">CO-Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;

