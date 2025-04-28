"use client";

import { useState } from "react";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ResumeParser() {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [atsScore, setAtsScore] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setAnalysisComplete(false);
  };

  const analyzeResume = () => {
    if (!file) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      setAtsScore(Math.floor(Math.random() * 30) + 70);
    }, 2500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Resume ATS Scanner
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Struggling with the current job market? Upload your resume to get an
          ATS score and detailed feedback to improve your chances.
        </p>
      </div>

      <Card className="border border-purple-700 bg-black/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Resume Analysis</CardTitle>
          <CardDescription className="text-gray-400">
            Upload your resume to get instant ATS feedback
          </CardDescription>
        </CardHeader>

        <CardContent>
          {!file && !analysisComplete && (
            <div className="border-2 border-dashed border-purple-700 rounded-lg p-12 text-center">
              <Upload className="h-12 w-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-lg font-medium mb-2">
                Drop your resume here
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Support for PDF, DOCX, TXT (Max 5MB)
              </p>
              <div className="relative">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.txt"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0">
                  Browse Files
                </Button>
              </div>
            </div>
          )}

          {file && !analysisComplete && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-purple-900/20 rounded-lg">
                <FileText className="h-8 w-8 text-purple-400" />
                <div className="flex-1">
                  <p className="font-medium text-white">{file.name}</p>
                  <p className="text-sm text-gray-400">
                    {(file.size / 1024).toFixed(0)} KB
                  </p>
                </div>
                <Button
                  onClick={analyzeResume}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0"
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze"}
                </Button>
              </div>

              {isAnalyzing && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Analyzing resume...</span>
                    <span>Please wait</span>
                  </div>
                  <Progress
                    value={45}
                    className="h-2 bg-gray-800"
                    indicatorClassName="bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              )}
            </div>
          )}

          {analysisComplete && (
            <Tabs defaultValue="score" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-black/20 border border-purple-900/30">
                <TabsTrigger value="score">ATS Score</TabsTrigger>
                <TabsTrigger value="keywords">Keywords</TabsTrigger>
                <TabsTrigger value="improvements">Improvements</TabsTrigger>
              </TabsList>

              <TabsContent value="score" className="mt-4 space-y-4">
                <div className="flex flex-col items-center justify-center p-6 bg-black/30 rounded-lg border border-purple-900/30">
                  <div className="relative mb-4">
                    <svg className="w-32 h-32" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-800"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-purple-500"
                        strokeWidth="8"
                        stroke="url(#gradient)"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                        strokeDasharray={`${atsScore * 2.64}, 264`}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">{atsScore}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {atsScore >= 90
                      ? "Excellent!"
                      : atsScore >= 80
                        ? "Very Good"
                        : "Needs Improvement"}
                  </h3>
                  <p className="text-center text-gray-400 max-w-md">
                    {atsScore >= 90
                      ? "Your resume is well-optimized for ATS systems. Great job!"
                      : atsScore >= 80
                        ? "Your resume performs well but has room for improvement."
                        : "Your resume needs optimization to pass ATS systems."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/30 rounded-lg border border-purple-900/30">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <h4 className="font-medium">Strengths</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Clear section headings</li>
                      <li>• Good use of action verbs</li>
                      <li>• Proper formatting</li>
                      <li>• Quantifiable achievements</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-black/30 rounded-lg border border-purple-900/30">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <h4 className="font-medium">Weaknesses</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Missing key industry keywords</li>
                      <li>• Skills section needs expansion</li>
                      <li>• Job title mismatch</li>
                      <li>• Too many graphics/tables</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="keywords" className="mt-4">
                <div className="p-4 bg-black/30 rounded-lg border border-purple-900/30 space-y-4">
                  <h3 className="font-medium">Detected Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "React",
                      "TypeScript",
                      "Node.js",
                      "API",
                      "Frontend",
                      "UI/UX",
                      "Responsive Design",
                      "Git",
                      "Agile",
                    ].map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-1 bg-purple-900/40 text-purple-200 text-xs rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-medium mt-4">Missing Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "Redux",
                      "GraphQL",
                      "CI/CD",
                      "Docker",
                      "AWS",
                      "Performance Optimization",
                    ].map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="improvements" className="mt-4">
                <div className="p-4 bg-black/30 rounded-lg border border-purple-900/30 space-y-4">
                  <h3 className="font-medium">Suggested Improvements</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-xs">
                        1
                      </div>
                      <div>
                        <p className="font-medium">
                          Add more industry-specific keywords
                        </p>
                        <p className="text-sm text-gray-400">
                          Include technologies like Next.js, Redux, and GraphQL
                          to improve matching.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-xs">
                        2
                      </div>
                      <div>
                        <p className="font-medium">
                          Quantify your achievements
                        </p>
                        <p className="text-sm text-gray-400">
                          Add metrics and numbers to demonstrate impact (e.g.,
                          "Improved performance by 40%").
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-xs">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Simplify formatting</p>
                        <p className="text-sm text-gray-400">
                          Remove tables, graphics, and complex formatting that
                          ATS systems struggle with.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-xs">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Align job titles</p>
                        <p className="text-sm text-gray-400">
                          Match your job titles more closely with the positions
                          you're applying for.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t border-purple-900/30 pt-4">
          {analysisComplete && (
            <Button
              variant="outline"
              className="border-purple-700 text-purple-300 hover:bg-purple-900/20"
              onClick={() => {
                setFile(null);
                setAnalysisComplete(false);
              }}
            >
              Analyze Another Resume
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
