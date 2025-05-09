import { useEffect, useState } from 'react';

interface WeatherInfoProps {
  city: string;
}

export const WeatherInfo = ({ city }: WeatherInfoProps) => {
  const [temp, setTemp] = useState<number | null>(null);
  const [icon, setIcon] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API;

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`
        );

        const data = await res.json();

        if (res.ok) {
          setTemp(data.main.temp);
          setIcon(data.weather[0].icon);
          setError(null);
        } else {
          setError(data.message);
          setTemp(null);
          setIcon(null);
        }
      } catch (e) {
        setError('Ошибка загрузки погоды');
        setTemp(null);
        setIcon(null);
      }
    };

    fetchWeather();
  }, [city]);

  if (error) return <p className="text-red-500 text-sm">{error}</p>;
  if (temp === null) return <p className="text-gray-400 text-sm">Загрузка погоды...</p>;

  return (
    <div className="weather__card">
      {icon && (
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Погода"
          className="w-8 h-8"
        />
      )}
      <span>{city}: {temp.toFixed(1)}°C</span>
    </div>
  );
};
