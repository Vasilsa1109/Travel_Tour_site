import "./Contact.css";
import { Header } from "@widgets/ui/Header/Header";
import { Button } from "@shared/ui/Button";
export const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <div className="main_block">
          <h1>TOUR & TRAVEL</h1>
          <img
            src="https://revelo.vercel.app/assets/images/hero/hero.jpg"
            alt=""
            id="hero"
          />
        </div>
        <h3>
          Discover the World's Treasures with Ravelo <br />
          One site <Button> 34,500 </Button> most popular experience you’ll
          remember
        </h3>
      </main>
    </>
  );
};
