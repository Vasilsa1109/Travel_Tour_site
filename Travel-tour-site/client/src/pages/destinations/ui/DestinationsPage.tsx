import "./Destinations.css";
import { Header } from "@widgets/ui/Header/Header";
import { Footer } from "@widgets/ui/Footer/Footer";
import { MiniCard } from "@shared/ui/DestinationMiniCard";
import { Hotels } from "@shared/ui/Hotels/Hotels";
import { ProductCard } from "@entities/product/ui/ProductCard";
export const DestinationsPage = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Explore Our Popular Destinations</h1>
                <div className="mini-cards">
                    <MiniCard imgSrc="https://revelo.vercel.app/assets/images/destinations/destination-five1.jpg" country="Switzerland" tours={230} />
                    <MiniCard imgSrc="https://revelo.vercel.app/assets/images/destinations/destination-five2.jpg" country="Poland" tours={190} />
                    <MiniCard imgSrc="https://revelo.vercel.app/assets/images/destinations/destination-five3.jpg" country="Indonesia" tours={178} />
                    <MiniCard imgSrc="https://revelo.vercel.app/assets/images/destinations/destination-five4.jpg" country="Thailand" tours={196} />
                    <MiniCard imgSrc="https://revelo.vercel.app/assets/images/destinations/destination-five5.jpg" country="Italy" tours={58} />
                    <MiniCard imgSrc="https://revelo.vercel.app/assets/images/destinations/destination-five6.jpg" country="New York" tours={28} />
                    <MiniCard imgSrc="https://revelo.vercel.app/assets/images/destinations/destination-five8.jpg" country="Wroclaw, Poland" tours={34} />
                    <MiniCard imgSrc="https://revelo.vercel.app/assets/images/destinations/destination-five10.jpg" country="Antalya, Turkey" tours={298} />
                </div>
                {/* в каталоге можно использовать по примеру: 
<ProductCard product={product} onClick={() => navigate(/product/${product.id})} />
в корзине
<ProductCard product={product} showQuantity={false} showDiscount={false} /> */}
                <Hotels />
            </main>
            <Footer></Footer>
        </>
    );
};

