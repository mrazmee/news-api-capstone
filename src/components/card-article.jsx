export const CardArticle = ({ data, buttonText, handleSave, handleImageError }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full p-5">
      {data?.articles?.map((article, index) => (
        <div key={index} className="flex flex-col border shadow-lg p-5 w-full h-auto">
          <h1>{article.title}</h1>
          <img
            className="bg-gray-500 rounded-md w-full h-56"
            src={article.urlToImage}
            alt="gambar"
            onError={handleImageError}
            width={200}
            height={200}
          />
          <p>{article.description}</p>
          <br />
          <div className="flex gap-4">
            <button
              onClick={() => window.open(article.url, '_blank')}
              className="px-2 py-2 bg-blue-300 rounded-md"
            >
              News page
            </button>
            <button
              onClick={() => handleSave(article)} // Trigger handleSave saat tombol di klik
              className="px-2 py-2 bg-blue-300 rounded-md"
            >
              {buttonText}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
