import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  { id: 1, src: "https://revelo.vercel.app/assets/images/widgets/gallery1.jpg", alt: "Gallery 1" },
  { id: 2, src: "https://revelo.vercel.app/assets/images/widgets/gallery2.jpg", alt: "Gallery 2" },
  { id: 3, src: "https://revelo.vercel.app/assets/images/widgets/gallery3.jpg", alt: "Gallery 3" },
  { id: 4, src: "https://revelo.vercel.app/assets/images/widgets/gallery4.jpg", alt: "Gallery 4" },
  { id: 5, src: "https://revelo.vercel.app/assets/images/widgets/gallery5.jpg", alt: "Gallery 5" },
  { id: 6, src: "https://revelo.vercel.app/assets/images/widgets/gallery6.jpg", alt: "Gallery 6" },
  { id: 7, src: "https://revelo.vercel.app/assets/images/widgets/gallery7.jpg", alt: "Gallery 7" },
  { id: 8, src: "https://revelo.vercel.app/assets/images/widgets/gallery8.jpg", alt: "Gallery 8" },
  { id: 9, src: "https://revelo.vercel.app/assets/images/widgets/gallery9.jpg", alt: "Gallery 9" },
];

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ],
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <Slider {...settings}>
        {galleryImages.map(({ id, src, alt }) => (
          <div key={id} style={{ padding: "0 10px", boxSizing: "border-box", height: 100 }}>
            <img
              src={src}
              alt={alt}
              style={{ height: 150, width: "auto", display: "block", margin: "0 auto", borderRadius: 30 }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}


// const galleryImages = [
//   { id: 1, src: "https://revelo.vercel.app/assets/images/widgets/gallery1.jpg", alt: "Gallery 1" },
//   { id: 2, src: "https://revelo.vercel.app/assets/images/widgets/gallery2.jpg", alt: "Gallery 2" },
//   { id: 3, src: "https://revelo.vercel.app/assets/images/widgets/gallery3.jpg", alt: "Gallery 3" },
//   { id: 4, src: "https://revelo.vercel.app/assets/images/widgets/gallery4.jpg", alt: "Gallery 4" },
//   { id: 5, src: "https://revelo.vercel.app/assets/images/widgets/gallery5.jpg", alt: "Gallery 5" },
//   { id: 6, src: "https://revelo.vercel.app/assets/images/widgets/gallery6.jpg", alt: "Gallery 6" },
//   { id: 7, src: "https://revelo.vercel.app/assets/images/widgets/gallery7.jpg", alt: "Gallery 7" },
//   { id: 8, src: "https://revelo.vercel.app/assets/images/widgets/gallery8.jpg", alt: "Gallery 8" },
//   { id: 9, src: "https://revelo.vercel.app/assets/images/widgets/gallery9.jpg", alt: "Gallery 9" },
// ];

// export const Gallery = () => (
//   <div className="widget widget-gallery" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
//     <h5 className="widget-title">Gallery</h5>
//     <div className="gallery"  data-aos="fade-up">
//       {galleryImages.map(({ id, src, alt }) => (
//         <a key={id} href={src}>
//           <img src={src} alt={alt} />
//         </a>
//       ))}
//     </div>
//   </div>
// );