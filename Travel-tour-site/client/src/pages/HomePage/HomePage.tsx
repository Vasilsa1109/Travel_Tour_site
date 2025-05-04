import "./HomePage.css";
import { Button } from "@shared/ui/Button";
import { Card } from "@shared/ui/Card";
import { DestinationItem } from "@shared/ui/DestinationItem";
export const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
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
        <div className="cards">
          <Card
            rating={'4.9'}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/visiting-place1.jpg"
            location="Tours, France"
            title="Brown Concrete Building Basilica St Martin"
            duration="3 days 2 nights - Couple"
            price={'69.50'}
            onBookClick={() => alert("Booking clicked")}
          />
           <Card
            rating={'4.8'}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/visiting-place2.jpg"
            location=" Wildest, Italy"
            title="Blue lake water view taken travel with daytime"
            duration="3 days 2 nights - Couple"
            price={'63.0'}
            onBookClick={() => alert("Booking clicked")}
          />
          <Card
            rating={'4.7'}
            imgSrc="https://revelo.vercel.app/assets/images/destinations/visiting-place3.jpg"
            location=" Rome, Italy"
            title="Woman standing near Colosseum, Rome"
            duration="3 days 2 nights - Couple"
            price={'43.0'}
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
    </>
  );
};
