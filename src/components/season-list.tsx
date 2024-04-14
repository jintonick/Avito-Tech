import React, { useState } from 'react';
import Slider from 'react-slick';
import SeasonCard from './season-card';
import { SeasonsListProps } from '../interfaces/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SeasonsList: React.FC<SeasonsListProps> = ({ seasons }) => {
  const [openSeasonId, setOpenSeasonId] = useState<string | null>(null);
  const handleSeasonClick = (seasonId: string) => {
    setOpenSeasonId(openSeasonId === seasonId ? null : seasonId);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sortedSeasons = [...seasons].sort((a, b) => a.number - b.number);
  return (
    <div className="text-white font-graphik mb-[40px]">
      <h1 className="text-[32px] font-bold">Сезоны</h1>
      {sortedSeasons
        .sort((a, b) => a.number - b.number)
        .map((season) => (
          <div key={season.id}>
            <div
              onClick={() => handleSeasonClick(season.id)}
              className="cursor-pointer flex justify-between items-center border-b-[2px] border-[#ff5500]"
            >
              <h2 className="text-[24px] cursor-pointer">{season.name}</h2>
              <span className="text-[#ff5500]">
                {openSeasonId === season.id ? '▲' : '▼'}
              </span>
            </div>
            <div className="series-slider-container">
              {openSeasonId === season.id && (
                <Slider {...settings}>
                  {season.episodes.map((episode) => (
                    <div key={episode.number} className="p-2">
                      <SeasonCard episode={episode} />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default SeasonsList;
