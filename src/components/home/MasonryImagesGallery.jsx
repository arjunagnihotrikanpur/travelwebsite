import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const galleryImages = [
  "https://images.pexels.com/photos/4784231/pexels-photo-4784231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/9394312/pexels-photo-9394312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2344/cars-france-landmark-lights.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3884480/pexels-photo-3884480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1868676/pexels-photo-1868676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/27809206/pexels-photo-27809206/free-photo-of-toronto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const MasonryImagesGallery = () => {
  return (
    <div className="px-6 py-16">
      <h1 className="text-center py-16 text-4xl md:text-6xl font-extrabold">
        Gallery
      </h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 1, 992: 4 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            <img
              className="masonry__img"
              src={item}
              key={index}
              alt=""
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryImagesGallery;
