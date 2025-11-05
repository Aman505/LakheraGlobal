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
                        Most platforms focus only on customers or employees—but we bring both worlds together. Our solution is designed for growing businesses that want seamless client management to nurture leads, track interactions, and close deals faster; smarter team management to onboard talent, monitor performance, and keep employees engaged; and one unified system that eliminates the need to juggle multiple tools or deal with hidden add-ons.
                    </p>

                    <button className="data-section-button">
                        Start Your Free Trial
                    </button>
                </div>

                <div className="data-section-right">
                    <img
                        src="/assets/datasection/wrapperImg.svg"
                        alt="Data Power Visualization"
                        className="wrapper-image"
                    />
                </div>
            </div>
        </div>
    );
}

export default DataSection;

