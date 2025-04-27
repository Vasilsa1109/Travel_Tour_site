import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <a href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5333/5333722.png"
              alt=""
              style={{ border: 0, width: "30px", height: "20px" }} 
            />
          </a>
        </div>

        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%" }} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>

        <div className="footer-title">
          <h5>Services</h5>
        </div>
        <ul className="list-style-three">
          <li>
            <a href="destination-details">Best Tour Guide</a>
          </li>
          <li>
            <a href="destination-details">Tour Booking</a>
          </li>
          <li>
            <a href="destination-details">Hotel Booking</a>
          </li>
          <li>
            <a href="destination-details">Ticket Booking</a>
          </li>
        </ul>
      </div>
      <div
        className="col col-small"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        data-aos-offset="50"
      >
        <div className="footer-widget footer-links ms-md-4">
          <div className="footer-title">
            <h5>Company</h5>
          </div>
          <ul className="list-style-three">
            <li>
              <a href="about">About Company</a>
            </li>
            <li>
              <a href="blog">Community Blog</a>
            </li>
            <li>
              <a href="contact">Jobs and Careers</a>
            </li>
            <li>
              <a href="blog">latest News Blog</a>
            </li>
          </ul>
        </div>

        <div
          className="col col-small"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <div className="footer-widget footer-links ms-lg-4">
            <div className="footer-title">
              <h5>Destinations</h5>
            </div>
            <ul className="list-style-three">
              <li>
                <a href="destination-details">African Safaris</a>
              </li>
              <li>
                <a href="destination-details">Alaska camp; Canada</a>
              </li>
              <li>
                <a href="destination-details">South America</a>
              </li>
              <li>
                <a href="destination-details">Middle East</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="col col-md-6 col-10 col-small"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <div className="footer-widget footer-contact">
            <div className="footer-title">
              <h5>Get In Touch</h5>
            </div>
            <ul className="list-style-one">
              <li>
                <i className="fal fa-map-marked-alt"></i> 578 Level, D-block 45
                Street Melbourne, Australia
              </li>
              <li>
                <i className="fal fa-envelope"></i>
                <a href="mailto:supportrevelo@gmail.com">
                  supportrevelo@gmail.com
                </a>
              </li>
              <li>
                <i className="fal fa-phone-volume"></i>
                <a href="tel:+88012334588">+ 880 (123) 345 88</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-transparent pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  © Linkopy 202/4 <a href="/">Ravelo</a>, All rights reserved
                </p>
                <ul className="footer-bottom-nav">
                  <li>
                    <a href="about">Terms</a>
                  </li>
                  <li>
                    <a href="about">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about">Legal notice</a>
                  </li>
                  <li>
                    <a href="about">Accessibility</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
