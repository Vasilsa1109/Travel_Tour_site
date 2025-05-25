import "./Footer.css";
import { InstagramItem } from "@shared/ui/InstagramItem";
const instagramItems = [
  {
    imgSrc: "https://revelo.vercel.app/assets/images/instagram/instagram1.jpg",
  },
  {
    imgSrc: "https://revelo.vercel.app/assets/images/instagram/instagram2.jpg",
  },
  {
    imgSrc: "https://revelo.vercel.app/assets/images/instagram/instagram3.jpg",
  },
  {
    imgSrc: "https://revelo.vercel.app/assets/images/instagram/instagram4.jpg",
  },
  {
    imgSrc: "https://revelo.vercel.app/assets/images/instagram/instagram5.jpg",
  },
  {
    imgSrc: "https://revelo.vercel.app/assets/images/instagram/instagram6.jpg",
  },
];
export const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="block__1">
          <div className="line">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206324.6180491615!2d27.596337098011087!3d53.868610725806505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1745910430697!5m2!1sru!2sby"
              width="400"
              height="300"
              loading="lazy">
            </iframe>
            <div className="items">
              {instagramItems.map((item, index) => (
                <InstagramItem key={index} {...item} />
              ))}
            </div>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5333/5333722.png"
            alt=""
            style={{ border: 0, width: "150px", height: "150px" }}
          />
        </div>

        <div className="list">
          <h5>Services</h5>
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
        <div className="footer-widget footer-links ms-md-4">
          <h5>Company</h5>
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

        <div className="footer-widget footer-links ms-lg-4">
          <h5>Destinations</h5>
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

        <div className="footer-widget footer-contact">
          <h5>Get In Touch</h5>
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

        <div className="footer-bottom bg-transparent pt-20 pb-5">
          <div className="col-lg-5">
            <div className="copyright-text text-center text-lg-start">
              <p>
                © Linkopy 2025 <a href="/">Tour & travel</a>, All rights reserved
              </p>
              <p>
                Developed by Vasilisa V (2025)
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" style={{ maxWidth: 30, marginLeft: 30 }} />
                <a href="https://github.com/Vasilsa1109" target="_blank"> See my Git</a>
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
          <img src="https://revelo.vercel.app/assets/images/backgrounds/footer-two.png" alt="" id="last-footer-img" />
        </div>
      </div>
    </footer>
  );
};
