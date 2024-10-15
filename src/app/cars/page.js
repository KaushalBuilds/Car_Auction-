// // src/app/cars/page.js
// import CarCard from '../../components/CarCard';
// import { getCars } from '../../lib/contentfulClient';

// export default async function CarListingPage() {
//   // Fetch car data
//   const cars = await getCars(); // Await the async function

//   return (
//     <div className="car-list">
//       {cars.map((car) => (
//         <CarCard key={car.sys.id} car={car} />
//       ))}
//     </div>
//   );
// }


// src/app/cars/page.js
import CarCard from '../../components/CarCard';
import { fetchCars } from '../../lib/contentfulClient';

export default async function CarListingPage() {
  // Fetch car data
  const cars = await fetchCars(); // Await the async function

  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.sys.id} car={car} />
      ))}
    </div>
  );
}
