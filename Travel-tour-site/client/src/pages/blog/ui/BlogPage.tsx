
import { News } from "@shared/ui/News";
import { Widget } from "@shared/ui/Widget";
import { Footer } from "@widgets/ui/Footer/Footer";
import { Header } from "@widgets/ui/Header/Header";
import "./BlogPage.css";
import AutoPlay from "@shared/ui/Carousel";
import SimpleSlider from "@shared/ui/ImgGallery";

export const BlogPage = () => {
    return (
        <>
            <Header />
            <main>
                <div className="blog__main">
                    <News />
                    <Widget />
                    <AutoPlay />
                </div>
                <h3>explore img gallery</h3>
                <SimpleSlider />
            </main>
            <Footer />
        </>
    );
};
