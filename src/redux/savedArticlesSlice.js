import { createSlice } from '@reduxjs/toolkit';

// Mengambil data dari localStorage saat aplikasi pertama kali dimuat
const loadSavedArticles = () => {
  const savedArticles = localStorage.getItem('savedArticles');
  return savedArticles ? JSON.parse(savedArticles) : [];
};

const savedArticlesSlice = createSlice({
  name: 'savedArticles',
  initialState: loadSavedArticles(), // Mengambil data yang ada di localStorage
  reducers: {
    saveArticle: (state, action) => {
      // Menyimpan artikel baru
      state.push(action.payload);
      localStorage.setItem('savedArticles', JSON.stringify(state)); // Simpan ke localStorage
    },
    removeArticle: (state, action) => {
      // Menghapus artikel berdasarkan URL
      const newState = state.filter(article => article.url !== action.payload.url);
      localStorage.setItem('savedArticles', JSON.stringify(newState)); // Simpan perubahan ke localStorage
      return newState;
    },
  },
});

// Ekspor reducer dengan nama yang sesuai
export const { saveArticle, removeArticle } = savedArticlesSlice.actions;
export default savedArticlesSlice.reducer;  // Ini adalah ekspor default dari reducer
