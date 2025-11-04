import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './TestimonialSection.css';
import { Star } from "lucide-react";

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Rishabh",
            role: "Project Manager",
            rating: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit",
            avatar: "/assets/herosection/avatar/avatar1.jpg"
        },
        {
            name: "Harry",
            role: "Retail Manager",
            rating: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit",
            avatar: "/assets/herosection/avatar/avatar2.jpg"
        },
        {
            name: "Parth",
            role: "Event Manager",
            rating: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit",
            avatar: "/assets/herosection/avatar/avatar3.jpg"
        }
    ];

    return (
        <div className="testimonial-section">
            <div className="testimonial-container">
                <p className="testimonial-subtitle">TESTIMONIAL</p>
                <h2 className="testimonial-heading">Client Success Stories</h2>
                
                <div className="testimonial-slider-wrapper">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={3}
                        spaceBetween={24}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: false
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 16
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24
                            }
                        }}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="testimonial-slide">
                                <div className="testimonial-card">
                                    <div className="testimonial-avatar-wrapper">
                                        <img 
                                            src={testimonial.avatar} 
                                            alt={testimonial.name}
                                            className="testimonial-avatar"
                                        />
                                    </div>
                                    
                                    <h3 className="testimonial-name">{testimonial.name}</h3>
                                    <p className="testimonial-role">{testimonial.role}</p>
                                    
                                    <div className="testimonial-rating">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i}
                                                className={`testimonial-star ${i < testimonial.rating ? 'filled' : 'outlined'}`}
                                                fill={i < testimonial.rating ? 'currentColor' : 'none'}
                                            />
                                        ))}
                                    </div>
                                    
                                    <p className="testimonial-text">{testimonial.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;

