import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

/* Will eventually make this with firebase or some shit to allow for dynamically uplaoding photos */

const imageList = [
  "/images/COMMERCIAL.jpg",
  "/images/WINDOW.jpg",
  "/images/RESIDENTIAL.jpg",
];

const PhotoGallery = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      scrollbar={{ draggable: true }}
      modules={[Scrollbar, Autoplay, Pagination]}
      style={{ padding: "10px", backgroundColor: "#1a1a1a" }}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      {imageList.map((image, index) => (
        <SwiperSlide key={index} style={{ width: "500px" }}>
          <div style={{ position: "relative", color: "#fff" }}>
            <img
              src={image}
              alt={`gallery-image-${index + 1}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <p
              style={{
                marginTop: "8px",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoGallery;
