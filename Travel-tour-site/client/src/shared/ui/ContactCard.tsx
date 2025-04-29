import { FC } from "react";

interface ContactCardProps {
    imgSrc: string;
    text: string;
    description: string;
}

export const СontactCard: FC<ContactCardProps> = ({
    imgSrc,
    text,
    description
}) => {
    return (
        <div
            className="contact-info-item"
        >
            <div className="contact__icon">
                <img src={imgSrc} alt="" />
            </div>
            <div className="content">
                <h5>{text}</h5>
                <div className="text">
                    {description}
                </div>
            </div>
        </div>
    );
};

