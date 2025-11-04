import './DataSection.css';

const DataSection = () => {
    return (
        <div className="data-section">
            <div className="data-section-container">
                <div className="data-section-left">
                    <h2 className="data-section-heading">
                        <span className="data-heading-orange">Unleash</span> the Power of Data
                    </h2>
                    
                    <p className="data-section-description">
                        Our comprehensive platform provides everything growing businesses need to thrive. From seamless client management to streamlined team collaboration, we offer a unified solution that brings all your essential tools together in one powerful, intuitive system.
                    </p>
                    
                    <button className="data-section-button">
                        Start Your Free Trial
                    </button>
                    
                    <p className="data-section-subtext">
                        No credit card required, Cancel anytime.
                    </p>
                </div>
                
                <div className="data-section-right">
                    <img 
                        src="/assets/wrapperImg.svg" 
                        alt="Data Power Visualization" 
                        className="wrapper-image"
                    />
                </div>
            </div>
        </div>
    );
}

export default DataSection;

