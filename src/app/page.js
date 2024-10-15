// // app/page.js
// import ImageSlider from '../components/ImageSlider';
// import CarCard from '../components/CarCard';
// import { fetchCars } from '../lib/contentfulClient';

// export default async function HomePage() {
//     const cars = await fetchCars(); // Fetch car data from Contentful

//     return (
//         <div>
//             <ImageSlider />
//             <div className="car-list">
//                 {cars.map((car) => (
//                     <CarCard key={car.sys.id} car={car} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// src/app/page.js
import ImageSlider from '../components/ImageSlider';
import CarCard from '../components/CarCard';
import { fetchCars } from '../lib/contentfulClient';
import SideNavbar from '../components/SideNavbar';

export default async function HomePage() {
    const cars = await fetchCars(); // Fetch car data from Contentful

    return (
        <div>
            
            <ImageSlider />
            <SideNavbar/>
            <div className="car-list">
                {cars.map((car) => (
                    <CarCard key={car.sys.id} car={car} /> // Pass car data as a prop
                ))}
            </div>
        </div>
    );
}
