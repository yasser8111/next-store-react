import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { fixImageUrl } from "../../../utils/img";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./gallery.css";

export default function ProductGallery({ mainImage, galleryImages = [], hoverImage }) {
  const images = [mainImage, ...(galleryImages || [])];

  return (
    <div className="product-gallery">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        className="product-swiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={fixImageUrl(img)}
              alt={`product-${i}`}
              className="slide-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
