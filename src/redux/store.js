import { configureStore } from '@reduxjs/toolkit';
import savedArticlesReducer from './savedArticlesSlice';  // Ekspor default kita ambil di sini

const store = configureStore({
  reducer: {
    savedArticles: savedArticlesReducer,  // Gunakan nama yang sesuai
  },
});

export default store;
