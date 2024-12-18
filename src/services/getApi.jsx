export const getApi = async () => {
    try {
        const response = await fetch("https://newsapi.org/v2/everything?q=covid-19&sortBy=popularity&apiKey=848fd76700c844e4ae1940be746b1001");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};