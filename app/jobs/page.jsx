"use client";

import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.jobs)) {
          setJobs(data.jobs); // Store all jobs
        } else {
          console.error("Unexpected API response:", data);
          setJobs([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const start = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(start, start + jobsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) return <p className="p-4 text-lg">Loading jobs...</p>;

  return (
    <div className="pt-40 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Remote Jobs</h2>
      <div className="grid gap-4">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company_name}</p>
            <p className="text-sm mt-1 text-gray-500">
              {job.category} | {job.job_type}
            </p>
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600   hover:underline mt-2 inline-block"
            >
              View Job →
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
