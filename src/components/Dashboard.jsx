import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import '../Dashboard.css';
import { Star } from "lucide-react";
import DataSection from "./DataSection/DataSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import ContactSection from "./ContactSection/ContactSection";
import HRManagementSection from "./HRManagementSection/HRManagementSection";

const Dashboard = () => {
    const sliderImages = [
        "/assets/herosection/slider/silder1.png",
        "/assets/herosection/slider/slider2.png",
        "/assets/herosection/slider/slider3.png",
        "/assets/herosection/slider/silder1.png",
        "/assets/herosection/slider/slider2.png",
        "/assets/herosection/slider/slider3.png",
    ];

    const avatars = [
        "/assets/herosection/avatar/avatar1.jpg",
        "/assets/herosection/avatar/avatar2.jpg",
        "/assets/herosection/avatar/avatar3.jpg",
        "/assets/herosection/avatar/avatar4.jpg",
    ];

    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-heading">
                        Your All-in-One <span className="hero-heading-orange">Client Success Hub</span> and Team Growth Platform Solution
                    </h1>

                    <p className="hero-description">
                        Simplify your operations, build stronger connections, and empower your teams — all from one smart platform.
                    </p>

                    <button className="hero-cta-button">
                        Get Started For Free
                    </button>

                    <div className="trust-section">
                        <p className="trust-text">Trusted by users</p>
                        <div className="avatar-group">
                            {avatars.map((avatar, index) => (
                                <img
                                    key={index}
                                    src={avatar}
                                    alt={`User ${index + 1}`}
                                    className="avatar-image"
                                    style={{ marginLeft: index > 0 ? '-10px' : '0' }}
                                />
                            ))}
                        </div>
                        <div className="rating-group">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="star-icon" fill="currentColor" />
                                ))}
                            </div>
                            <span className="rating-text">4.5/5 (25k reviews)</span>
                        </div>
                    </div>
                </div>

                <div className="hero-slider-container">
                    <Swiper
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        spaceBetween={-50}
                        loop={true}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 0,
                            depth: 300,
                            modifier: 1.5,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: false
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="hero-swiper"
                    >
                        {sliderImages.map((img, index) => (
                            <SwiperSlide key={index} className="hero-slide">
                                <img src={img} alt={`Hero Slide ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <DataSection />
            <FeaturesSection />
            <div className="brand-strip">
                <div className="brand-strip-content">
                    {[...Array(12)].map((_, index) => (
                        <img
                            key={index}
                            src="/assets/brand.png"
                            alt="Brand Logo"
                            className="brand-logo"
                        />
                    ))}
                </div>
            </div>
            <TestimonialSection />
            <HRManagementSection />
            <ContactSection />
        </>
    );
}

export default Dashboard;
