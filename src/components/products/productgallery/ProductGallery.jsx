import { useState } from "react";
import { fixImageUrl } from "../../../utils/img";
import "./gallery.css";

export default function ProductGallery({
  mainImage,
  galleryImages = [],
  hoverImage,
}) {
  const [active, setActive] = useState(mainImage);
  const images = [mainImage, ...(galleryImages || [])];

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={fixImageUrl(active)} alt="product" />
      </div>

      <div className="thumbnails">
        {images.map((img, i) => (
          <img
            key={i}
            src={fixImageUrl(img)}
            alt={`thumb-${i}`}
            className={active === img ? "active" : ""}
            onClick={() => setActive(img)}
          />
        ))}
      </div>
    </div>
  );
}
