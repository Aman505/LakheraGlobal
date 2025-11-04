import './FeaturesSection.css';
import { Wallet, TrendingUp, Target } from "lucide-react";

const FeaturesSection = () => {
    const features = [
        {
            icon: "kk",
            title: "Simplicity at its core",
            description: "Designed for anyone to use, no technical training needed."
        },
        {
            icon: Wallet,
            title: "Transparent Pricing",
            description: "one platform, one cost. No surprises."
        },
        {
            icon: TrendingUp,
            title: "Growth - ready",
            description: "Scalable features that evolve with your business"
        },
        {
            icon: Target,
            title: "Engagement Tools",
            description: "Celebrate wins, gather feedback, and boost motivation."
        }
    ];

    return (
        <div className="features-section">
            <div className="features-container">
                <h2 className="features-heading">What Makes Us Different</h2>

                <p className="features-intro">
                    Unlike traditional enterprise systems that are complex and costly, or modular apps that feel disconnected, we provide:
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index} className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <IconComponent className="feature-icon" />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="features-cta">
                    <button className="features-button">
                        Start Your Free Trial
                    </button>
                    <p className="features-disclaimer">
                        No credit card required, Cancel anytime.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;

