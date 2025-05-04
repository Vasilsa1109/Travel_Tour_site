import "./Hotels.css";
import { Header } from "@widgets/ui/Header/Header";
import { Footer } from "@widgets/ui/Footer/Footer";
import { Button } from "@shared/ui/Button";
import { Card } from "../Card";
export const Hotels = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Discover the World's Class Top Hotel</h1>
                <div className="hotels">
                    <Card
                        rating={'4.8'}
                        imgSrc="https://revelo.vercel.app/assets/images/destinations/hotel1.jpg"
                        location="Ao Nang, Thailand"
                        title="The brown bench near swimming pool Hotel"
                        duration="one night"
                        price={'69.50'}
                        hotelDescription="2 Bed room - 1 kitchen - 2 Wash room - Internet"
                        onBookClick={() => alert("Booking clicked")}
                    />
                    <Card
                        rating={'4.7'}
                        imgSrc="https://revelo.vercel.app/assets/images/destinations/hotel2.jpg"
                        location="Ao Nang, Thailand"
                        title="The brown bench near swimming pool Hotel"
                        duration="one night"
                        price={'69.50'}
                        hotelDescription="2 Bed room - 1 kitchen - 2 Wash room - Internet"
                        onBookClick={() => alert("Booking clicked")}
                    />
                    <Card
                        rating={'4.8'}
                        imgSrc="https://revelo.vercel.app/assets/images/destinations/hotel1.jpg"
                        location="Ao Nang, Thailand"
                        title="The brown bench near swimming pool Hotel"
                        duration="one night"
                        price={'69.50'}
                        hotelDescription="2 Bed room - 1 kitchen - 2 Wash room - Internet"
                        onBookClick={() => alert("Booking clicked")}
                    />
                    <Card
                        rating={'4.7'}
                        imgSrc="https://revelo.vercel.app/assets/images/destinations/hotel2.jpg"
                        location="Ao Nang, Thailand"
                        title="The brown bench near swimming pool Hotel"
                        duration="one night"
                        price={'69.50'}
                        hotelDescription="2 Bed room - 1 kitchen - 2 Wash room - Internet"
                        onBookClick={() => alert("Booking clicked")}
                    />
                    <Button>Explore More Hotels →</Button>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

