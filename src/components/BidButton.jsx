"use client"; // Ensure this component can handle interactivity

import { useState } from 'react';

export default function BidButton({ carId }) {
  const [isBidding, setIsBidding] = useState(false);

  const handleClick = () => {
    // Handle the bid click action here
    setIsBidding(true);
    console.log(`Bidding on car with ID: ${carId}`);
  };

  return (
    <button onClick={handleClick}>
      {isBidding ? 'Bidding...' : 'Bid Now'}
    </button>
  );
}
