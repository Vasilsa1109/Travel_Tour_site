import { FC } from "react";
import "./shared_styles.css";
import { Button } from "./Button";
interface CardProps {
  rating: string;
  imgSrc: string;
  location: string;
  title: string;
  duration?: string;
  price: string;
  hotelDescription?: string;
  onBookClick?: () => void;
}

export const Card: FC<CardProps> = ({
  rating,
  imgSrc,
  location,
  title,
  duration,
  price,
  hotelDescription,
  onBookClick,
}) => {
  return (
    <div className="destination-card">
      <div className="image">
        <div className="ratting">
          <img
            src="https://pngicon.ru/file/uploads/zvezda.png"
            alt=""
            className="icon__img"
          />
          {rating}
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/10801/10801369.png"
          alt=""
          className="icon__img"
        />
        <img src={imgSrc} alt="" className="main__img" />
      </div>
      <div className="subblock">
        <div className="content">
          <span className="location">
            <img
              src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
              alt=""
              className="icon__img"
            />{" "}
            {location}
          </span>
          <h5>
            <a href="destination-details">{title}</a>
          </h5>
          <span className="time">{duration}</span>
        </div>
        <div className="hotel">
          <h6>{hotelDescription}</h6>
        </div>
        <div className="destination-footer">
          <span className="price">
            <span>${price}</span>/per person
          </span>
          <br />
          <Button
            onClick={(e) => {
              e.preventDefault();
              onBookClick && onBookClick();
            }}
          >
            Book Now 
            <img
              src="https://cdn-icons-png.flaticon.com/512/1/1122.png"
              alt=""
              className="icon__img"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
