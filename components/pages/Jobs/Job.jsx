"use client";

import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 6;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const start = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(start, start + jobsPerPage);

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.jobs)) {
          setJobs(data.jobs);
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <Loading text="Loading jobs..." />;
  }

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
              className="text-violet-600 hover:underline mt-2 inline-block"
            >
              View Job →
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
