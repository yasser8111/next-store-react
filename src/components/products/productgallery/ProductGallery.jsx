import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { fixImageUrl } from "../../../utils/img";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./gallery.css";

export default function ProductGallery({
  mainImage,
  galleryImages = [],
  hoverImage,
}) {
  const images = [mainImage, hoverImage, ...(galleryImages || [])];

  return (
    <div className="product-gallery">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
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
        <button className="swiper-button-prev custom-prev">
          <FontAwesomeIcon icon={faCaretRight} />
        </button>

        <button className="swiper-button-next custom-next">
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
      </Swiper>
    </div>
  );
}
