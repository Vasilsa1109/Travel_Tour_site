import { FC } from "react";

interface MiniCardProps {
    imgSrc: string;
    country: string;
    tours: number;
}

export const MiniCard: FC<MiniCardProps> = ({
    imgSrc,
    country,
    tours
}) => {
    return (
        <div className="mini-card">
           <img src={imgSrc} alt="" />
           <br />
            <h3>{country}</h3>
            <br />
            <h2>{tours} tours</h2>
        </div>
    );
};
