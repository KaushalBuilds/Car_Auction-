// // app/cars/[id]/page.js
// import CarDetails from '../../../components/CarDetails';
// import { getCarById } from '../../../lib/contentfulClient';

// export default async function CarDetailPage({ params }) {
//     const car = await getCarById(params.id); // Fetch the specific car using the ID
    
//     if (!car) {
//         return <div>Car not found</div>;
//     }

//     return (
//         <div>
//             <CarDetails car={car} />
//         </div>
//     );
// }


// src/app/cars/[id]/page.js

import { fetchCarById } from '../../../lib/contentfulClient';
import CarDetails from '../../../components/CarDetails';

export async function generateMetadata({ params }) {
  const car = await fetchCarById(params.id);
  return {
    title: car.fields.tittle || 'Car Details',
  };
}

export default async function CarDetailPage({ params }) {
  const car = await fetchCarById(params.id);

  if (!car) {
    return <p>Car not found</p>;
  }

  return <CarDetails car={car} />;
}
