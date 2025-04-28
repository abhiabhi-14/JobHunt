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
    "https://680935f31f1a52874cdc378a.mockapi.io/It_Jobs_Articles";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `${API_URL}?sortBy=date&order=desc&page=${currentPage}&limit=${perPage}`
        );
        const data = await res.json();
        setArticles(data);
        setTotalPages(5);
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
      <h1 className="text-3xl font-bold mb-6 text-center">
        Jobs in IT Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
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
