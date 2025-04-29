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
          Discover the World's Treasures with Ravelo <br />
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
          price={'690.0'}
          onBookClick={() => alert("Booking clicked")}
        />
        </div>
      </div>
      <div className="exploring">
        <p>Explore Popular Destinations</p>
        <DestinationItem
          imgSrc="https://revelo.vercel.app/assets/images/destinations/destination1.jpg"
          title="Thailand beach"
          tours="5352+ tours & 856+ Activity"
        />
      </div>
    </>
  );
};
