import { useState } from "react";
import { Navbar } from './components/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndonesiaPage from './pages/indonesiaPage';
import HomePage from './pages/homePage';
import ProgrammingPage from './pages/programmingPage';
import CovidPage from './pages/covidPage';
import SavePage from './pages/savePage';

export const Layout = ({ children, onSearch }) => {
  return (
    <>
      <Navbar onSearch={onSearch} />
      {children}
    </>
  );
};

function App() {
  const [query, setQuery] = useState(""); // Menyimpan query pencarian

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearch = (query) => {
    setQuery(query); // Update query pencarian
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout onSearch={handleSearch}><HomePage query={query} /></Layout>}
          path="/"
        />
        <Route
          element={<Layout onSearch={handleSearch}><IndonesiaPage query={query} /></Layout>}
          path="/indonesia"
        />
        <Route
          element={<Layout onSearch={handleSearch}><ProgrammingPage query={query} /></Layout>}
          path="/programming"
        />
        <Route
          element={<Layout onSearch={handleSearch}><CovidPage query={query} /></Layout>}
          path="/covid"
        />
        <Route
          element={<Layout onSearch={handleSearch}><SavePage query={query} /></Layout>}
          path="/saved"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
