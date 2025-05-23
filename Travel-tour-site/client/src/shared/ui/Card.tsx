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
  guests?: string;
  Description?: string;
  onBookClick?: () => void;
}

export const Card: FC<CardProps> = ({
  rating,
  imgSrc,
  location,
  title,
  duration,
  price,
  guests,
  Description,
  onBookClick,
}) => {
  return (
    <div className="destination-card" data-aos="flip-up">
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
            />
           &nbsp; {location}
          </span>
          <h3>{title}</h3>
        </div>

        <div className="destination-footer">
          <div className="time__guest">
            <span className="time">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOU9J_mAEjygC57MP9GUYukXkthOFAWfLxJEsYyQIhbnf-rxd9Kv20gPqkOHM5pmHiV7s&usqp=CAU"
                alt=""
                className="time__img"
              />
              &nbsp;  {duration}
            </span>
            <br />
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4519/4519678.png"
                alt=""
                className="guest__img"
              />
              {guests} &nbsp; guests
            </span>
          </div>
          <div className="hotel">
            <h5>{Description}</h5>
          </div>
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
            BOOK NOW &nbsp; 
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
