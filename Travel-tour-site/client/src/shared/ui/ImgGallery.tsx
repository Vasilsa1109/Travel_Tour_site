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

export const Gallery = () => (
  <div className="widget widget-gallery" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
    <h5 className="widget-title">Gallery</h5>
    <div className="gallery"  data-aos="fade-up">
      {galleryImages.map(({ id, src, alt }) => (
        <a key={id} href={src}>
          <img src={src} alt={alt} />
        </a>
      ))}
    </div>
  </div>
);

