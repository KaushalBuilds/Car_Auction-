"use client"; // Make this a client-side component since you're using hooks

import { useEffect, useState } from 'react';
import { fetchCars } from '../../lib/contentfulClient'; // Assuming the fetch function is in contentfulClient.js
import CarCard from '../../components/CarCard'; // Import the CarCard component
import styles from '../../styles/Auction.module.css'; // Optional: import your CSS module for styling

export default function AuctionPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCars() {
      const carData = await fetchCars(); // Fetch cars from Contentful
      setCars(carData);
      setLoading(false);
    }
    getCars();
  }, []); // Empty dependency array to run only on component mount

  if (loading) {
    return <div>Loading...</div>; // Optional: Show a loading message while fetching data
  }

  return (
    <div className={styles.auctionPage}> {/* Optional: Use CSS module for styling */}
      <h1>Car Auction</h1>
      <div className={styles.carGrid}> {/* Add grid styling if needed */}
        {cars.map((car) => (
          <CarCard key={car.sys.id} car={car} /> // Render a CarCard for each car
        ))}
      </div>
    </div>
  );
}
