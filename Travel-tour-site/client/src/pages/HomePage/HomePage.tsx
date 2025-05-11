import "./HomePage.css";
import { Button } from "@shared/ui/Button";
import { Card } from "@shared/ui/Card";
import { DestinationItem } from "@shared/ui/DestinationItem";
import { WeatherInfo } from "../../WeatherInfo";
import { useSelector } from "react-redux";
import { RootState } from "@shared/store";

export const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
      <h1>Home</h1>
      <div>
        {user ? <p>Привет, {user.name}!</p> : <p>Вы не вошли в систему</p>}
      </div>
      <div className="main_block">
        <h1>TOUR & TRAVEL</h1>
        <img
          src="https://revelo.vercel.app/assets/images/hero/hero.jpg"
          alt=""
          id="hero"
        />
      </div>
      <div className="discover">
        <h3>
          Discover the World's Treasures with us <br />
          One site <Button> 34,500 </Button> most popular experience you’ll
          remember
        </h3>
        <h2>Explore weather in popular destinations:</h2>
        <div className="weather">
          <WeatherInfo city="Доха" />
          <WeatherInfo city="Москва" />
          <WeatherInfo city="Дубай" />
          <WeatherInfo city="Рим" />
          <WeatherInfo city="Париж" />
          <WeatherInfo city="Мадрид" />
          <WeatherInfo city="Стамбул" />
          <WeatherInfo city="Лондон" />
          <WeatherInfo city="Берлин" />
          <WeatherInfo city="Бангкок" />
        </div>
        <div className="cards">
          <Card
            rating={"4.9"}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/visiting-place1.jpg"
            location="Tours, France"
            title="Brown Concrete Building Basilica St Martin"
            duration="3 days 2 nights - Couple"
            price={"69.50"}
            onBookClick={() => alert("Booking clicked")}
          />
          <Card
            rating={"4.8"}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/visiting-place2.jpg"
            location=" Wildest, Italy"
            title="Blue lake water view taken travel with daytime"
            duration="3 days 2 nights - Couple"
            price={"63.0"}
            onBookClick={() => alert("Booking clicked")}
          />
          <Card
            rating={"4.7"}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/visiting-place3.jpg"
            location=" Rome, Italy"
            title="Woman standing near Colosseum, Rome"
            duration="3 days 2 nights - Couple"
            price={"43.0"}
            onBookClick={() => alert("Booking clicked")}
          />
        </div>
      </div>
      <p>Explore Popular Destinations</p>
      <div className="exploring">
        <DestinationItem
          imgSrc="https://revelo.vercel.app/assets/images/destinations/destination1.jpg"
          title="Thailand beach"
          tours="5352+ tours & 856+ Activity"
        />
        <DestinationItem
          imgSrc="https://revelo.vercel.app/assets/images/destinations/destination3.jpg"
          title="Castellammare del Golfo, Italy"
          tours="5352+ tours & 856+ Activity"
        />
        <DestinationItem
          imgSrc="https://revelo.vercel.app/assets/images/destinations/destination2.jpg"
          title="Parga, Greece"
          tours="5352+ tours & 856+ Activity"
        />
        <DestinationItem
          imgSrc="https://revelo.vercel.app/assets/images/destinations/destination4.jpg"
          title="Reserve of Canada, Canada"
          tours="5352+ tours & 856+ Activity"
        />
        <DestinationItem
          imgSrc="https://revelo.vercel.app/assets/images/destinations/destination5.jpg"
          title="Dubai united states"
          tours="5352+ tours & 856+ Activity"
        />
        <DestinationItem
          imgSrc="https://revelo.vercel.app/assets/images/destinations/destination6.jpg"
          title="Milos, Greece"
          tours="5352+ tours & 856+ Activity"
        />
      </div>
      <div className="container-app">
        <h2>We Are Available On the Store Get Our Mobile Apps Very Easily</h2>
        <h4>
          We go above and beyond to make your travel dreams a reality. Trust us
          to handle the details so you can creating unforgettable memories.
          Explore the world with confidence
        </h4>
        <ul className="specializing">
          <li>Experience Agency</li>
          <li>Professional Team</li>
          <li>Low Cost Travel</li>
          <li>Online Support 24/7</li>
        </ul>
        <div className="google-play-app-store">
          <div className="bg">
            <img
              src="https://revelo.vercel.app/assets/images/mobile-app/phone-bg.png"
              alt=""
            />
          </div>
          <img
            src="https://revelo.vercel.app/assets/images/mobile-app/g-play.jpg"
            alt="Google Play"
          ></img>
          <img
            src="https://revelo.vercel.app/assets/images/mobile-app/a-store.jpg"
            alt="App Store"
          ></img>
          <img src="https://revelo.vercel.app/assets/images/mobile-app/phone2.png" alt="" />
          <img src="https://revelo.vercel.app/assets/images/mobile-app/phone3.png" alt="" />
        </div>
        <img
          src="https://revelo.vercel.app/assets/images/mobile-app/phone.png"
          alt="Phone"
        ></img>
      </div>
    </>
  );
};
