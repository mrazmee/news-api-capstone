
import { useEffect, useState } from "react";
import { CardArticle } from "../components/card-article";
import { useDispatch } from "react-redux"; // Import useDispatch untuk dispatch action
import { saveArticle } from "../redux/savedArticlesSlice"; // Import action saveArticle


// Mendapatkan tanggal sekarang
const today = new Date();

// Mendapatkan tanggal satu bulan sebelumnya
const lastMonth = new Date();
lastMonth.setMonth(today.getMonth() - 1);

// Format tanggal dalam format YYYY-MM-DD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Menambahkan leading zero
  const day = date.getDate().toString().padStart(2, "0"); // Menambahkan leading zero
  return `${year}-${month}-${day}`;
};

// Tanggal sekarang dan satu bulan sebelumnya dalam format yang benar
const fromDate = formatDate(lastMonth);
const toDate = formatDate(today);

// Membuat URL API dengan parameter yang sudah diatur
const apiKey = "848fd76700c844e4ae1940be746b1001";
const url = `https://newsapi.org/v2/everything?q=programming&from=${fromDate}&to=${toDate}&sortBy=popularity&apiKey=${apiKey}`;

const ProgrammingPage = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch(); // Hook untuk dispatch action

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const filteredArticles = data.articles.filter((article) => {
                    return article.title !== '[Removed]' && article.title !== null &&
                           article.description !== '[Removed]' && article.description !== null &&
                           article.urlToImage !== '[Removed]' && article.urlToImage !== null;
                });
                data.articles = filteredArticles;
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleSaveArticle = (article) => {
        dispatch(saveArticle(article)); // Menyimpan artikel menggunakan Redux
    };

    return (
        <>
            <CardArticle data={data} buttonText="Save" handleSave={handleSaveArticle} />
        </>
    );
};

export default ProgrammingPage;

