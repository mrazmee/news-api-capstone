import { useEffect, useState } from "react";
import { CardArticle } from "../components/card-article";
import { useDispatch } from "react-redux"; // Import useDispatch untuk dispatch action
import { saveArticle } from "../redux/savedArticlesSlice"; // Import action saveArticle

const HomePage = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch(); // Hook untuk dispatch action

    useEffect(() => {    
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?domains=cnn.com&sortBy=popularity&apiKey=848fd76700c844e4ae1940be746b1001');
                const data = await response.json();
                const filteredArticles = data.articles.filter(article => {
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
    }

    return (
        <>
            <CardArticle data={data} buttonText="Save" handleSave={handleSaveArticle} />
        </>
    );
};

export default HomePage;
