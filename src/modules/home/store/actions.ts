import {createAsyncThunk} from '@reduxjs/toolkit';

const PREFIX = 'home';

const API_URL =
  'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json';

export const getFood = createAsyncThunk(`${PREFIX}/getFood`, async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.menu.map((item, index) => ({
    id: index + 1,
    name: item.name,
    price: item.price.toString(),
    description: item.description,
    image: item.image,
    category: item.category,
  }));
});
