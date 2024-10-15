// // components/CarDetails.jsx
// import Image from 'next/image';
// import BidButton from './BidButton';

// export default function CarDetails({ car }) {
//     return (
//         <div>
//             <Image src={car.image} alt={car.name} width={600} height={400} />
//             <h1>{car.name}</h1>
//             <p>{car.description}</p>
//             <p>Price: ${car.price}</p>
//             <BidButton carId={car.id} />
//         </div>
//     );
// }


// src/components/CarDetails.jsx
import Image from 'next/image';
import BidButton from './BidButton';

export default function CarDetails({ car }) {
    // Use the provided image URL directly
    const imageUrl = car.fields.thumbnail?.fields?.file?.url;
    const absoluteImageUrl = imageUrl ? `https:${imageUrl}` : 'https://i.sbxcars.com/cdn-cgi/image/width=3000,height=3000,quality=80/auctions/63d295db-915b-4bb4-afc3-74f200a75061/sbx_ferrari_purosangue_204_featured.png'; // Fallback image URL
    const name = car.fields.tittle; // Use the correct field name
    const description = car.fields.description || 'No description available'; // Default value if description is missing
    const price = car.fields.price;

    return (
        <div>
            {absoluteImageUrl && (
                <Image src={absoluteImageUrl} alt={name} width={600} height={400} />
            )}
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <BidButton carId={car.sys.id} /> {/* Pass the car ID to BidButton */}
        </div>
    );
}
