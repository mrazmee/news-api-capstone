import { useEffect, useState } from "react";
import { CardArticle } from "../components/card-article";



const indonesiaPage = () => {
    const [data, setData] = useState([]);
    const fetchDataIndonesia = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=indonesia&language=id&sortBy=popularity&apiKey=848fd76700c844e4ae1940be746b1001');
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
    }

    useEffect(() => {
        fetchDataIndonesia();
    }, [])

    return (
        <>
            <CardArticle data={data} buttonText="Save"/>
        </>
    )
}

export default indonesiaPage

