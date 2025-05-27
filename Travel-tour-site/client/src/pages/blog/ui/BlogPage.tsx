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
    imgSrc: "https://revelo.vercel.app/assets/images/blog/blog-list1.jpg",
    title:
      "Ultimate Guide to Planning Your Dream Vacation with Ravelo Travel Agency",
    comments: 5,
    date: " 25 February 2024",
    reviews: [
      { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
      { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
      { id: 3, user: "Anna", text: "Beautiful scenery and cozy hotels." },
      { id: 4, user: "Anna", text: "Beautiful scenery and cozy hotels." },
      { id: 5, user: "Anna", text: "Beautiful scenery and cozy hotels." },
    ],
  },
  {
    id: 2,
    imgSrc: "https://revelo.vercel.app/assets/images/blog/blog-list2.jpg",
    title: "Ultimate Guide to Planning",
    comments: 5,
    date: "01/03/2026",
    reviews: [
      { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
      { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
      { id: 3, user: "Anna", text: "Beautiful scenery and cozy hotels." },
      { id: 4, user: "Anna", text: "Beautiful scenery and cozy hotels." },
      { id: 5, user: "Anna", text: "Beautiful scenery and cozy hotels." },
    ],
  },
  {
    id: 3,
    imgSrc: "https://revelo.vercel.app/assets/images/blog/blog-list4.jpg",
    title: "Journey to Inspire Your Next Adventure",
    comments: 3,
    date: "28/05/2026",
    reviews: [
      { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
      { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
      { id: 3, user: "Anna", text: "Beautiful scenery and cozy hotels." },
    ],
  },
  {
    id: 4,
    imgSrc: "https://revelo.vercel.app/assets/images/blog/blog-list3.jpg",
    title: "Switzerland",
    comments: 2,
    date: "01/12/2026",
    reviews: [
      { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
      { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
    ],
  },
  {
    id: 5,
    imgSrc: "https://revelo.vercel.app/assets/images/blog/blog-list5.jpg",
    title: "Switzerland",
    comments: 2,
    date: "09/09/2026",
    reviews: [
      { id: 1, user: "Ivan", text: "Great place, loved the mountains!" },
      { id: 2, user: "Anna", text: "Beautiful scenery and cozy hotels." },
      { id: 3, user: "Anna", text: "Beautiful scenery and cozy hotels." },
    ],
  },
  {
    id: 6,
    imgSrc:
      "https://i.etsystatic.com/36420777/r/il/d175db/4024371941/il_fullxfull.4024371941_1fv1.jpg",
    title: "",
    date: "",
  },
];
export const BlogPage = () => {
  const [modalOpenBlog, setModalOpenBlog] = useState(false);
  const [selectedNews, setSelectedNews] = useState<(typeof NewsData)[0] | null>(
    null
  );

  const openModal = (destination: (typeof NewsData)[0]) => {
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
        <h2 id="latest-news">Read Latest News & Blog</h2>
        <div className="latest-news">
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
        </div>
        <div className="imgs">
          <img
            src="https://revelo.vercel.app/assets/images/blog/blog-details.jpg"
            alt=""
          />
          <img
            src="https://revelo.vercel.app/assets/images/blog/blog-middle1.jpg"
            alt=""
          />
          <img
            src="https://revelo.vercel.app/assets/images/blog/blog-middle2.jpg"
            alt=""
          />
        </div>
        <div
          className="admin-comment bgc-lighter aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="comment-body">
            <div className="author-thumb">
              <img
                src="https://revelo.vercel.app/assets/images/blog/admin-comment.jpg"
                alt="Author"
              />
            </div>
            <div className="creator">
              <h4>Richard M. Fudge</h4>
              <p>
                The world is a book, and those who do not travel read only one
                page. <br />Every journey we undertake is a chapter filled with
                lessons, experiences, and stories.
              </p>
              <div className="social-icons">
                <div className="icon">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png"
                    alt=""
                  />
                  <a href="contact">Facebook</a>
                </div>
                <div className="icon">
                  <img
                    src="https://images.seeklogo.com/logo-png/28/2/twitter-square-black-and-white-logo-png_seeklogo-287041.png"
                    alt=""
                  />
                  <a href="contact">Twitter</a>
                </div>
                <div className="icon">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                    alt=""
                  />
                  <a href="contact">Linkedin</a>
                </div>
                <div className="icon">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/042/387/654/non_2x/instagram-button-icon-set-instagram-screen-social-media-and-social-network-interface-template-stories-user-button-symbol-sign-logo-stories-liked-editorial-free-png.png"
                    alt=""
                  />
                  <a href="contact">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {selectedNews && (
        <Modal
          isOpen={modalOpenBlog}
          onClose={closeModal}
          title={selectedNews.title}
          date={selectedNews.date}
          imgSrc={selectedNews.imgSrc}
          commets={selectedNews.comments}
          reviews={selectedNews.reviews}
        />
      )}
    </>
  );
};
