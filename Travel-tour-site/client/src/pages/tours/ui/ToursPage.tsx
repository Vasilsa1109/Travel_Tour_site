import "./ToursPage.css";
import { Button } from "@shared/ui/Button";
import { Header } from "@widgets/ui/Header/Header";
import { Card } from "@shared/ui/Card";
import { Footer } from "@widgets/ui/Footer/Footer";
export const ToursPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="cards">
          <Card
            rating={"4.9"}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/tour-list1.jpg"
            title="Bay Cruise by Boat in Bali, Indonesia"
            Description="Bali, Indonesia, is tropical paradise renowned breathtaking beaches, vibrant culture, and lush landscapes"
            duration=" 3 days 2 nights"
            price={"69.50"}
            location="Tours, France"
            onBookClick={() => alert("Booking clicked")}
          />
          <Card
            rating={"4.8"}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/tour-list3.jpg"
            location="Tamnougalt, Morocco"
            title="Camels on desert Morocco, Sahara."
            Description="Bali, Indonesia, is tropical paradise renowned breathtaking beaches, vibrant culture, and lush landscapes"
            duration="4 days 3 nights"
            price={"386.00"}
            onBookClick={() => alert("Booking clicked")}
          />
          <Card
            rating={"4.7"}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/tour-list4.jpg"
            location="Switzerland"
            title="Hakone, Lake Asha Cruise Day Bus Trip"
            Description="Bali, Indonesia, is tropical paradise renowned breathtaking beaches, vibrant culture, and lush landscapes"
            duration="4 days 3 nights"
            price={"386.00"}
            onBookClick={() => alert("Booking clicked")}
          />
          <Card
            rating={"4.6"}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/tour-list5.jpg"
            location="Tours, France"
            title="Concrete Building Basilica St Martin"
            Description="Bali, Indonesia, is tropical paradise renowned breathtaking beaches, vibrant culture, and lush landscapes"
            duration="4 days 3 nights"
            price={"386.00"}
            onBookClick={() => alert("Booking clicked")}
          />
        </div>
        <div className="subscribe__block">{/* background-image: url(https://revelo.vercel.app/assets/images/newsletter/newsletter-bg-lines.png); */}
          <div className="col">
            <div className="newsletter-content-part aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="1500" data-aos-offset="50">
              <div className="section-title"><h2>Subscribe Our Newsletter to Get more offer & Tips</h2>
                <p>One site  34,500  most popular experience you’ll remember</p></div>
              <form className="newsletter-form mb-15" action="/">
                <div className="text-field">
                  <label className="text-field__label" htmlFor="email">Email</label>
                  <div className="text-field__icon text-field__icon_email">
                    <input className="text-field__input" type="email" placeholder="Email Address" />
                  </div>
                </div>
                <Button type="submit" className="theme-btn bgc-secondary style-two">
                  <span>Subscribe</span>
                </Button>
              </form>
              <p>No credit card requirement. <br /> No commitments</p></div>
            <div className="newsletter-bg-image aos-init" data-aos="zoom-in-up">
              <img src="https://revelo.vercel.app/assets/images/newsletter/newsletter-bg-image.png" alt="Newsletter" /></div></div>
          <div className="newsletter-bg aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};
