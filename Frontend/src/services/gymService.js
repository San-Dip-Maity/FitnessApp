import axios from 'axios';

const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY 

/**
 * Fetch nearby gyms based on user location
 * @param {Object} params - Search parameters
 * @param {string} params.latitude - User's latitude
 * @param {string} params.longitude - User's longitude
 * @param {number} params.radius - Search radius in meters (default: 1500)
 * @returns {Promise} - Promise with the API response
 */
export const getNearbyGyms = async ({ latitude, longitude, radius = 1500 }) => {
  try {
    const response = await axios.get(
      `https://maps.gomaps.pro/maps/api/place/nearbysearch/json?keyword=%3Cstring%3E&location=40%2C-110&maxprice=%3Cstring%3E&minprice=%3Cstring%3E&name=%3Cstring%3E&opennow=%3Cboolean%3E&pagetoken=%3Cstring%3E&rankby=%3Cstring%3E&radius=1000&type=%3Cstring%3E&language=en&key=%3CAPI%20Key%3E`,
      {
        params: {
          keyword: 'gym',
          location: `${latitude},${longitude}`,
          name: 'gym',
          radius,
          key: MAPS_API_KEY
        },
        headers: {
          'Accept': 'application/json'
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Error fetching nearby gyms:', error);
    throw error;
  }
};

export default {
  getNearbyGyms
}; 