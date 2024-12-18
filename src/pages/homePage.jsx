import { useState, useEffect } from "react";
import { CardArticle } from "../components/card-article";

const HomePage = ({ query }) => {
  const [data, setData] = useState([]); // Untuk menyimpan artikel hasil pencarian
  const [loading, setLoading] = useState(false); // Untuk status loading

  // Fungsi untuk mengambil data berdasarkan query pencarian
  const fetchData = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query || 'default'}&sortBy=popularity&apiKey=848fd76700c844e4ae1940be746b1001`
      );
      const result = await response.json();

      // Cek apakah API berhasil merespons data
      if (result.status === "ok") {
        const filteredArticles = result.articles.filter(
          (article) =>
            article.title !== "[Removed]" &&
            article.title !== null &&
            article.description !== "[Removed]" &&
            article.description !== null &&
            article.urlToImage !== "[Removed]" &&
            article.urlToImage !== null
        );
        setData(filteredArticles); // Menyimpan artikel yang ditemukan ke state data
      } else {
        console.error("Error fetching data:", result.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false); // Mengubah status loading setelah selesai
  };

  useEffect(() => {
    fetchData(query); // Menarik data berdasarkan query, jika query kosong gunakan 'default'
  }, [query]); // Fetch data setiap query berubah

  return (
    <>
      <section className="w-full p-5">
        {/* Menampilkan loading jika sedang menunggu data */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          // Menampilkan artikel hasil pencarian
          <CardArticle data={{ articles: data }} buttonText="Save" />
        )}
      </section>
    </>
  );
};

export default HomePage;
