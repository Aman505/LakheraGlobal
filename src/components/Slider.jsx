import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import '../Dashboard.css'

const Slider = () => {
    const images = [
        "public/PreviewImage/Slider/Rectangle 3463875.png",
        "public/PreviewImage/Slider/Rectangle 3463876-1.png",
        "public/PreviewImage/Slider/Rectangle 3463876.png",
    ];

    return (
        <div className="slider-container">
            <Swiper
                modules={[EffectCoverflow, Pagination, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="Swiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;