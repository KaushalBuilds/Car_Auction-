

// // src/components/CarCard.jsx
// import Link from 'next/link';
// import styles from '../styles/CarCard.module.css'; // Import CSS module

// export default function CarCard({ car }) {
//   const imageUrl = car.fields.thumbnail?.fields?.file?.url;
//   const title = car.fields.title;
//   const price = car.fields.price;

//   return (
//     <div className={styles.imageWrapper}> {/* Apply CSS module class for card wrapper */}
//       {imageUrl && (
//         <Link href={`/auction/${car.sys.id}`} className={styles.imageCard}>
//           {/* Apply CSS module class for image card */}
//           <img 
//             src={imageUrl} 
//             alt={title || 'Car Image'} 
//             className={styles.image} 
//           /> {/* Apply CSS module class for image */}
//           <div className={styles.titleOverlay}>{title}</div> {/* Apply CSS module class for title overlay */}
//         </Link>
//       )}
//       {price && <div className={styles.price}>US${price}</div>} {/* Apply CSS module class for price */}
//     </div>
//   );
// }
// src/components/CarCard.jsx
// src/components/CarCard.jsx
import Link from 'next/link';
import styles from '../styles/CarCard.module.css'; // Import CSS module

export default function CarCard({ car }) {
  // Access fields from the car object
  const imageUrl = car.fields.thumbnail?.fields?.file?.url; // Adjust based on actual structure
  const title = car.fields.tittle; // Use the correct field name
  const price = car.fields.price;

  return (
    <div className={styles.imageWrapper}> {/* Apply CSS module class for card wrapper */}
      {imageUrl && (
        <Link href={`/cars/${car.sys.id}`} className={styles.imageCard}>
          {/* Apply CSS module class for image card */}
          <img 
            src={imageUrl} 
            alt={title || 'Car Image'} 
            className={styles.image} 
          /> {/* Apply CSS module class for image */}
          <div className={styles.titleOverlay}>{title}</div> {/* Apply CSS module class for title overlay */}
        </Link>
      )}
      {price && <div className={styles.price}>US${price}</div>} {/* Apply CSS module class for price */}
    </div>
  );
}
