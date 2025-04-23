const ArticleCard = ({ article, featured = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden ${
        featured ? "md:col-span-3" : ""
      }`}
    >
      <img
        src={article.image}
        alt={article.title}
        className={`${featured ? "h-64" : "h-48"} w-full object-cover`}
      />
      <div className="p-4">
        <h2
          className={`font-semibold ${featured ? "text-2xl" : "text-lg"} mb-1`}
        >
          {article.title}
        </h2>
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">
          {article.summary}
        </p>
        <p className="text-xs text-gray-400">
          {new Date(article.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
