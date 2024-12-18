import { useSelector, useDispatch } from 'react-redux';
import { CardArticle } from '../components/card-article';
import { removeArticle } from '../redux/savedArticlesSlice';

const SavePage = () => {
  const savedArticles = useSelector((state) => state.savedArticles);
  const dispatch = useDispatch();

  const handleRemoveArticle = (article) => {
    dispatch(removeArticle(article));
  };

  return (
    <>
      {savedArticles.length === 0 ? (
        <p>No saved articles yet.</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full p-5">
          {savedArticles.map((article, index) => (
            <div key={index} className="flex flex-col border shadow-lg p-5 w-full h-auto">
              <h2>{article.title}</h2>
              <img
                className="bg-gray-500 rounded-md w-full h-56"
                src={article.urlToImage}
                alt="gambar"
                width={200}
                height={200}
              />
              <p>{article.description}</p>
              <br />
              <div className="flex gap-4">
                <button
                  onClick={() => window.open(article.url, '_blank')}
                  className="px-2 py-2 bg-red-300 rounded-md hover:bg-red-600"
                >
                  News page
                </button>
                <button
                  onClick={() => handleRemoveArticle(article)}
                  className="px-2 py-2 bg-blue-300 rounded-md hover:bg-blue-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default SavePage;
