import { Hotels } from "@shared/ui/Hotels/Hotels";
import "./Contact.css";
import { Header } from "@widgets/ui/Header/Header";
export const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main_block">
          <h1>Contact Us</h1>
          <img
            src="https://revelo.vercel.app/assets/images/hero/hero.jpg"
            alt=""
            id="hero"
          />
        </div>
        <div className="experts">
          <h3>
            Let’s Talk Our Expert Travel Guides
          </h3>
          <h4> Our dedicated support team is always ready <br />to assist you with any questions or issues, <br /> offering prompt and personalized solutions to meet your needs.</h4>
          <div className="authors__box">
            <h5>85+ Expert Team member</h5>
            <hr />
            <div className="feature-authors">
            <img src="https://revelo.vercel.app/assets/images/features/feature-author1.jpg" alt="Author" />
            <img src="https://revelo.vercel.app/assets/images/features/feature-author2.jpg" alt="Author" />
            <img src="https://revelo.vercel.app/assets/images/features/feature-author4.jpg" alt="Author" />
            <img src="https://revelo.vercel.app/assets/images/features/feature-author5.jpg" alt="Author" />
            <img src="https://revelo.vercel.app/assets/images/features/feature-author7.jpg" alt="Author" />
            <span>+</span>
          </div>
          </div>
          </div>
          <Hotels />
      </main>
    </>
  );
};
