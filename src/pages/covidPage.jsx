import { useEffect, useState } from "react";
import {CardArticle} from "../components/card-article";

const CovidPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=covid-19&sortBy=popularity&apiKey=848fd76700c844e4ae1940be746b1001');
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

    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/150'; // Gambar cadangan
        console.log('Error loading image', e.target.src);
    }

    return (
        <>
            <CardArticle data={data} buttonText="Save" handleImageError={handleImageError}/>
        </>
    )
}

export default CovidPage

