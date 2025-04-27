import "./ErrorPage.css";
import { Header } from "@widgets/ui/Header/Header";
import { Button } from "@shared/ui/Button";
export const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>OPPS!</h1>
        <div className="main_block">
          <p>This Page Can’t be Found</p>
          <img
            src="https://revelo.vercel.app/assets/images/newsletter/404.png"
            alt=""
            id="error_img"
          />
        </div>
        <h3>
        Best features to include on business landing page are those that quickly convey your value proposition, build trust, and encourage action. Here are six essential features
        </h3>
        <div className="keywords">
        <Button><a href="blog">Travel</a></Button>
        <Button><a href="blog">Luxury Hotel</a></Button>
        <Button><a href="blog">Indonesia</a></Button>
        <Button><a href="blog">Sea Beach</a></Button>
        <Button><a href="blog">Camping</a></Button>
        <Button><a href="blog">Hiking</a></Button>
        <Button><a href="blog">Fishing</a></Button>
        </div>
      </main>
    </>
  );
};

