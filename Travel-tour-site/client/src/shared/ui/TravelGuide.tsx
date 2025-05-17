import { FC, useEffect, useRef, useState } from "react";
import './shared_styles.css';

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
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1} 
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`guide ${isVisible ? "visible" : ""}`}>
      <img src={imgSrc} alt={guide} />
      <p>{guide}</p>
      <br />
      <p>{designation}</p>
    </div>
  );
};
