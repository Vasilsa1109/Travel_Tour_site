import { FC, ButtonHTMLAttributes } from "react";
import './shared_styles.css'
interface DestinationItemProps extends ButtonHTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  tours: string;
}

export const DestinationItem: FC<DestinationItemProps> = ({
  imgSrc,
  title,
  tours,
  children,
  ...props
}) => {
  return (
    <div {...props} className="destination-item">
      <div className="image">
        <a href="#" className="heart">
          <img src="https://cdn-icons-png.flaticon.com/512/10801/10801369.png" alt="" className="icon__img"/>
        </a>
        <img src={imgSrc} alt={title}/>
      </div>
      <div className="content">
        <h4>
          {title}
        </h4>
        {tours && <span className="time">{tours}</span>}
        {children}
      </div>
    </div>
  );
};
