import { FC } from "react";

interface MiniCardProps {
  imgSrc: string;
  title: string;
  date: string;
  commets: number;
  onShowDetails: () => void;
}

export const BlogsNewsCard: FC<MiniCardProps> = ({
  imgSrc,
  title,
  date,
  commets,
  onShowDetails,
}) => {
  return (
    <div className="mini-card"  data-aos="fade-down">
        <button>Travel</button>
      <img src={imgSrc}  />
      <h2>{title}</h2>
      <h3>{date}</h3>
      <h4>{commets} comments</h4>
      <button onClick={onShowDetails} style={{ cursor: "pointer", padding: "8px 12px", marginTop: 10 }}>
       Read more
      </button>
    </div>
  );
};
