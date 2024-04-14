import React from 'react';
import { EpisodeCardProps } from '../interfaces/components';

export default function SeasonCard({ episode }: EpisodeCardProps) {
  return (
    <div className="w-[340px] h-[22\30px] bg-gray-900 text-gray-100 rounded-[10px] font-graphik text-[16px] font-semibold">
      <div className="h-[80%] bg-black rounded-t-[10px]">
        <img
          src={episode.still.url}
          className="rounded-t-[10px]"
          alt={`Эпизод ${episode.number}`}
        />
      </div>
      <div className="flex justify-between items-center h-[23%] px-[10px]">
        <h1>Серия {episode.number}</h1>
        <h1>{episode.name}</h1>
      </div>
    </div>
  );
}
