// // 

// // src/lib/contentfulClient.js
// import { createClient } from 'contentful';

// // Ensure environment variables are set
// if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
//   throw new Error('Contentful environment variables are not set');
// }

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// export async function fetchCars() {
//   try {
//     const response = await client.getEntries({
//       content_type: 'cars', // Your Contentful content type
//     });
//     return response.items;
//   } catch (error) {
//     console.error('Error fetching Contentful data:', error);
//     return [];
//   }
// }

// export default client;


// src/lib/contentfulClient.js
import { createClient } from 'contentful';

// Ensure environment variables are set
if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful environment variables are not set');
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchCars() {
  try {
    const response = await client.getEntries({
      content_type: 'cars',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching Contentful data:', error);
    return [];
  }
}

export async function fetchCarById(id) {
  try {
    const response = await client.getEntry(id);
    return response;
  } catch (error) {
    console.error(`Error fetching car with ID ${id} from Contentful:`, error);
    return null;
  }
}

export default client;
