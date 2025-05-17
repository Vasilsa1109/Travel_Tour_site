
export const Widget = () => {
  return (
    <div
      className="widget-man"
      data-aos="fade-up"
    >
      <div className="content text-white">
        <span className="h6">Explore The World</span>
        <h3>Best Tourist Place</h3>
        <a className="theme-btn style-two bgc-secondary" href="tours">
          <span data-hover="Explore Now">Explore Now →</span>
        </a>
      </div>
      <div className="image">
        <img src="https://revelo.vercel.app/assets/images/widgets/cta-widget.png" alt="CTA" />
      </div>
      <div className="cta-shape">
        <img src="https://revelo.vercel.app/assets/images/widgets/cta-shape.png" alt="Shape" />
      </div>
    </div>
  );
};
