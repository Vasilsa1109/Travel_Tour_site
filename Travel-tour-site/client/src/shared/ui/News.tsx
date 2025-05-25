export const newsItems = [
  {
    id: 1,
    imgSrc: "https://revelo.vercel.app/assets/images/widgets/news1.jpg",
    alt: "News 1",
    title: "Unique Destinations and Untold Stories ways",
    link: "blog-details",
    date: "25 Feb 2024",
  },
  {
    id: 2,
    imgSrc: "https://revelo.vercel.app/assets/images/widgets/news2.jpg",
    alt: "News 2",
    title: "Immersive Experiences from Around Globe",
    link: "blog-details",
    date: "25 Feb 2024",
  },
  {
    id: 3,
    imgSrc: "https://revelo.vercel.app/assets/images/widgets/news2.jpg",
    alt: "News 3",
    title: "Journey to Inspire Your Next Adventure",
    link: "blog-details",
    date: "25 Feb 2024",
  },
   {
    id: 4,
    imgSrc: "https://revelo.vercel.app/assets/images/widgets/news3.jpg",
    alt: "News 4",
    title: "Journey to Inspire Your Next Adventure",
    link: "blog-details",
    date: "25 Feb 2024",
  },
];

export const News = () => (
  <div className="widget widget-news" data-aos="fade-up">
    <h5 className="widget-title">Recent News</h5>
    <ul>
      {newsItems.map(({ id, imgSrc, alt, title, link, date }) => (
        <li key={id}>
          <div className="image">
            <img src={imgSrc} alt={alt} />
          </div>
          <div className="content">
            <h6><a href={link}>{title}</a></h6>
            <span className="date"> {date}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);


