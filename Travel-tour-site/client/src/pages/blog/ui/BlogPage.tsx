import { Gallery } from "@shared/ui/ImgGallery";
import { News } from "@shared/ui/News";
import { Widget } from "@shared/ui/Widget";
import { Footer } from "@widgets/ui/Footer/Footer";
import { Header } from "@widgets/ui/Header/Header";
import './BlogPage.css';
export const BlogPage = () => {
    return (
        <>
            <Header />
            <main>
                <div className="blog__main">
                    <News />
                    <Gallery />
                    <Widget />
                </div>
            </main>
            <Footer />
        </>
    );
};
