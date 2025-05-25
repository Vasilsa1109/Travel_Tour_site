import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <h3>w</h3>
          </div>
          <div>
            <h3>e</h3>
          </div>
          <div>
            <h3>l</h3>
          </div>
          <div>
            <h3>c</h3>
          </div>
          <div>
            <h3>o</h3>
          </div>
          <div>
            <h3>m</h3>
          </div>
          <div>
            <h3>e</h3>
          </div>
        </Slider>
      </div></div>
  );
}

export default AutoPlay;
