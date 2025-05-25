import { Hotels } from "@shared/ui/Hotels/Hotels";
import "./Contact.css";
import { Header } from "@widgets/ui/Header/Header";
import { Authors } from "@shared/ui/Authors";
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
          <h3>Let’s Talk Our Expert Travel Guides</h3>
          <h4>
            Our dedicated support team is always ready <br />
            to assist you with any questions or issues, <br /> offering prompt
            and personalized solutions to meet your needs.
          </h4>
          <Authors />
        </div>
        <Hotels />
      </main>
    </>
  );
};
