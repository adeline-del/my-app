import axios from 'axios';

const spreadsheetId = '1rbxwZKMVjpLyrsT5jB2aLbDBB74SVYAYUkqqetmjQrU';
const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
// const range = 'Sheet1!A1:D162';

/**
 * Fetch data from a specific range in the Google Sheet.
 * @param range - Sheet1!A1:D162.
 */
export const fetchSheetData = async (range: string) => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
    );
    return response.data.values; // Returns the table rows as a 2D array.
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
