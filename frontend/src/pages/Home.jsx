import React from 'react';
import NewsCard from '../components/NewsCard/NewsCard';
import WeatherWidget from "@components/WeatherWidget/WeatherWidget";

export default function Home() {
  return (
    <div className="background-image">
      <div>
        <NewsCard />
        <WeatherWidget />
      </div>
    </div>
  );
}
