import { useEffect, useState } from 'react';

interface WeatherInfoProps {
  city: string;
}

export const WeatherInfo = ({ city }: WeatherInfoProps) => {
  const [temp, setTemp] = useState<number | null>(null);
  const [icon, setIcon] = useState<string | null>(null);
  const [pressure, setPressure] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [sunrise, setSunrise] = useState<number | null>(null);
  const [sunset, setSunset] = useState<number | null>(null);
  const [feelsLike, setFeelsLike] = useState<{
    day: number;
    night: number;
    eve: number;
    morn: number;
  } | null>(null);
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
          setPressure(data.main.pressure);
          setHumidity(data.main.humidity);
          setSunrise(data.sys.sunrise);
          setSunset(data.sys.sunset);
          setFeelsLike(data.main.feels_like);
          setError(null);
        } else {
          setError(data.message);
        }
      } catch (e) {
        setError('Ошибка загрузки погоды');
      }
    };

    fetchWeather();
  }, [city]);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

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
      {pressure !== null && <p>Давление: {pressure} гПа</p>}
      {humidity !== null && <p>Влажность: {humidity}%</p>}
      {sunrise !== null && <p>Восход солнца: {formatTime(sunrise)}</p>}
      {sunset !== null && <p>Закат солнца: {formatTime(sunset)}</p>}
      {/* {feelsLike && (
        <>
          <p>Ощущается днем: {feelsLike.day.toFixed(1)}°C</p>
          <p>Ощущается ночью: {feelsLike.night.toFixed(1)}°C</p>
          <p>Ощущается вечером: {feelsLike.eve.toFixed(1)}°C</p>
          <p>Ощущается утром: {feelsLike.morn.toFixed(1)}°C</p>
        </>
      )} */}
    </div>
  );
};