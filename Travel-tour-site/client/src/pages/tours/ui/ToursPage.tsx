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
      </main>
      <Footer />
    </>
  );
};
