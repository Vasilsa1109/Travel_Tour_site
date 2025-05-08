import { FC } from "react";

interface TravelGuideProps {
    imgSrc: string;
    guide: string;
    designation: string;
}

export const TravelGuide: FC<TravelGuideProps> = ({
    imgSrc,
    guide,
    designation
}) => {
    return (
        <div className="guide">
           <img src={imgSrc} alt="" />
            <p>{guide}</p>
            <br />
            <p>{designation}</p>
        </div>
    );
};

