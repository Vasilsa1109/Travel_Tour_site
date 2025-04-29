import { FC } from "react";

interface InstagramItemProps {
  imgSrc: string;
  alt?: string;
}

export const InstagramItem: FC<InstagramItemProps> = ({
  imgSrc,
  alt,
}) => {
  return (
    <div
      className="insta__item"
    >
        <img src={imgSrc} alt={alt} />
    </div>
  );
};
