import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Ad } from '../data';

interface AdCardProps {
  ad: Ad;
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl w-full">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={ad.imageUrl}
          alt={ad.title}
          className="w-full h-full object-cover"
        />
        {ad.categories.map((category, index) => (
          <span
            key={category}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm"
            style={{ transform: `translateY(${index * 40}px)` }}
          >
            {category}
          </span>
        ))}
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{ad.title}</h2>
        <p className="text-gray-600 mb-4">{ad.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Sponsored</span>
          <a
            href={ad.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <span>Learn More</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdCard;