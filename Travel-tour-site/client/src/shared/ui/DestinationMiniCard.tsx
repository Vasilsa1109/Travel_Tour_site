import { FC } from "react";

interface MiniCardProps {
  imgSrc: string;
  country: string;
  tours: number;
  onShowDetails: () => void;
}

export const MiniCard: FC<MiniCardProps> = ({
  imgSrc,
  country,
  tours,
  onShowDetails,
}) => {
  return (
    <div className="mini-card">
      <img src={imgSrc} alt={country}  />
      <h3>{country}</h3>
      <h4>{tours} tours</h4>
      <button onClick={onShowDetails} style={{ cursor: "pointer", padding: "8px 12px", marginTop: 10 }}>
        Посмотреть отзывы
      </button>
    </div>
  );
};