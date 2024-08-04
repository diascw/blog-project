import React from 'react';

interface Card {
  title: string;
  description: string;
}

const Card: React.FC<Card> = ({ title, description }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
