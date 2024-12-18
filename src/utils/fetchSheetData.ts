import axios from 'axios';

const spreadsheetId = '1rbxwZKMVjpLyrsT5jB2aLbDBB74SVYAYUkqqetmjQrU';
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
 // Use your API key here
// const range = 'Sheet1!D3:D163';

/**
 * Fetch data from a specific range in the Google Sheet.
 * @param range - Sheet1!D1:D161.
 */
export const fetchSheetData = async (range: string) => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`
    );
    return response.data.values;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
