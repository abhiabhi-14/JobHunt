"use client";
import { useEffect, useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 7;

  const API_URL =
    "https://newsapi.org/v2/everything?q=technology&apiKey=6627442129a1439c9b719cbeaf49b425";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `${API_URL}&pageSize=${perPage}&page=${currentPage}`
        );
        const data = await res.json();
        setArticles(data.articles); // Set the correct articles
        setTotalPages(Math.ceil(data.totalResults / perPage)); // Calculate total pages based on the total results
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchArticles();
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Technical Blogs
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Struggling with the current job market? Find a job that suits you!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.url} // Use article URL as key (since it's unique)
            article={article}
            featured={index === 0}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Blogs;
