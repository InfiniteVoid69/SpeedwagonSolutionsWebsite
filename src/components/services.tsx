import { services } from "./resources";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-4"
      >
        {services.map((item) => (
          <SwiperSlide key={item.id}>
            <a
              href={`/services/${item.id}`}
              className="block transform hover:scale-105 transition-transform duration-300"
            >
              {/* Wrap each service in a Link */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-4">{item.info}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
