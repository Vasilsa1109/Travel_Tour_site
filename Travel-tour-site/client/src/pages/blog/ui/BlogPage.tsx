import { useState } from "react";
import { News } from "@shared/ui/News";
import { Widget } from "@shared/ui/Widget";
import { Footer } from "@widgets/ui/Footer/Footer";
import { Header } from "@widgets/ui/Header/Header";
import "./BlogPage.css";
import AutoPlay from "@shared/ui/Carousel";
import SimpleSlider from "@shared/ui/ImgGallery";
import { BlogsNewsCard } from "@shared/ui/BlogNewsCard";
import { Modal } from "@shared/ui/ModalView";
const NewsData = [
    {
      id: 1,
      imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five1.jpg",
      title: "Ultimate Guide to Planning Your Dream Vacation with Ravelo Travel Agency",
      comments: 230,
      date: "01/03/2026",
      reviews: [
        { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
        { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
      ],
    },
    {
        id: 1,
        imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five1.jpg",
        title: "Switzerland",
        comments: 230,
        date: "01/03/2026",
        reviews: [
          { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
          { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
        ],
      }, {
        id: 1,
        imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five1.jpg",
        title: "Switzerland",
        comments: 230,
        date: "01/03/2026",
        reviews: [
          { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
          { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
        ],
      }, {
        id: 1,
        imgSrc: "https://revelo.vercel.app/assets/images/destinations/destination-five1.jpg",
        title: "Switzerland",
        comments: 230,
        date: "01/03/2026",
        reviews: [
          { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
          { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
        ],
      },
    ]
export const BlogPage = () => {
    const [modalOpenBlog, setModalOpenBlog] = useState(false);
  const [selectedNews, setSelectedNews] = useState<typeof NewsData[0] | null>(null);

  const openModal = (destination: typeof NewsData[0]) => {
    setSelectedNews(destination);
    setModalOpenBlog(true);
  };

  const closeModal = () => {
    setModalOpenBlog(false);
    setSelectedNews(null);
  };
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
                <h2>Read Latest News & Blog</h2>
                {NewsData.map((news) => (
            <BlogsNewsCard
              key={news.id}
              imgSrc={news.imgSrc}
              title={news.title}
              date={news.date}
              commets={news.comments}
              onShowDetails={() => openModal(news)}
            />
          ))}
            </main>
            <Footer />
            {selectedNews && (
        <Modal
          isOpen={modalOpenBlog}
          onClose={closeModal}
          title={selectedNews.title}
          date={selectedNews.date}
          imgSrc={selectedNews.imgSrc}
          reviews={selectedNews.reviews}
        />
      )}
        </>
    );
};
