"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Copy, Download, RefreshCw, CheckCircle } from "lucide-react";

export default function CoverLetterGenerator() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    company: "",
    skills: "",
    experience: "",
    tone: "professional",
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToneChange = (value) => {
    setFormData((prev) => ({ ...prev, tone: value }));
  };

  const generateCoverLetter = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const letter = `Dear Hiring Manager at ${formData.company},

I am writing to express my interest in the ${formData.jobTitle} position at ${formData.company}. With my background in ${formData.experience} and expertise in ${formData.skills}, I believe I would be a valuable addition to your team.

Throughout my career, I have developed strong skills in problem-solving, collaboration, and delivering high-quality results. I am particularly drawn to ${formData.company} because of your innovative approach to technology and commitment to excellence.

I am excited about the opportunity to bring my unique perspective and skills to ${formData.company} and would welcome the chance to discuss how my background aligns with your needs.

Thank you for considering my application. I look forward to the possibility of working with you.

Sincerely,
${formData.name}`;

      setGeneratedLetter(letter);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadAsTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedLetter], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `Cover_Letter_${formData.company}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const regenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const letter = generatedLetter.replace(
        "I am excited about the opportunity",
        "I am particularly enthusiastic about the opportunity"
      );
      setGeneratedLetter(letter);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header />
      <CoverLetterCard
        formData={formData}
        isGenerating={isGenerating}
        generatedLetter={generatedLetter}
        copied={copied}
        handleInputChange={handleInputChange}
        handleToneChange={handleToneChange}
        generateCoverLetter={generateCoverLetter}
        copyToClipboard={copyToClipboard}
        downloadAsTxt={downloadAsTxt}
        regenerate={regenerate}
        setGeneratedLetter={setGeneratedLetter}
      />
    </div>
  );
}

function Header() {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        AI Cover Letter Generator
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Create a personalized, professional cover letter in seconds. Stand out
        from the competition with our AI-powered generator.
      </p>
    </div>
  );
}

function CoverLetterCard({
  formData,
  isGenerating,
  generatedLetter,
  copied,
  handleInputChange,
  handleToneChange,
  generateCoverLetter,
  copyToClipboard,
  downloadAsTxt,
  regenerate,
  setGeneratedLetter,
}) {
  return (
    <Card className="border border-purple-700 bg-black/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Cover Letter Generator</CardTitle>
        <CardDescription className="text-gray-400">
          Fill in the details below to generate your custom cover letter
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs
          defaultValue={generatedLetter ? "preview" : "details"}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 bg-black/20 border border-purple-900/30">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="preview" disabled={!generatedLetter}>
              Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-4 space-y-4">
            <DetailsForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleToneChange={handleToneChange}
              isGenerating={isGenerating}
              generateCoverLetter={generateCoverLetter}
            />
          </TabsContent>

          <TabsContent value="preview" className="mt-4">
            <Preview
              generatedLetter={generatedLetter}
              copied={copied}
              copyToClipboard={copyToClipboard}
              downloadAsTxt={downloadAsTxt}
              regenerate={regenerate}
              isGenerating={isGenerating}
            />
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="flex justify-between border-t border-purple-900/30 pt-4">
        {generatedLetter && (
          <Button
            variant="ghost"
            className="text-purple-300 hover:bg-purple-900/20 hover:text-purple-200"
            onClick={() => setGeneratedLetter("")}
          >
            Start Over
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

function DetailsForm({
  formData,
  handleInputChange,
  handleToneChange,
  isGenerating,
  generateCoverLetter,
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          id="name"
          label="Your Full Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <InputField
          id="jobTitle"
          label="Job Title"
          value={formData.jobTitle}
          onChange={handleInputChange}
        />
        <InputField
          id="company"
          label="Company Name"
          value={formData.company}
          onChange={handleInputChange}
        />

        <div className="space-y-2">
          <Label htmlFor="tone">Tone</Label>
          <Select value={formData.tone} onValueChange={handleToneChange}>
            <SelectTrigger className="bg-black/30 border-purple-900/50 focus:ring-purple-500">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-purple-900/50">
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="friendly">Friendly</SelectItem>
              <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
              <SelectItem value="confident">Confident</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <InputField
        id="skills"
        label="Key Skills (comma separated)"
        value={formData.skills}
        onChange={handleInputChange}
      />
      <div className="space-y-2">
        <Label htmlFor="experience">Relevant Experience</Label>
        <Textarea
          id="experience"
          name="experience"
          placeholder="Briefly describe your relevant experience and background"
          value={formData.experience}
          onChange={handleInputChange}
          className="min-h-[100px] bg-black/30 border-purple-900/50 focus-visible:ring-purple-500"
        />
      </div>

      <Button
        onClick={generateCoverLetter}
        disabled={
          isGenerating ||
          !formData.name ||
          !formData.jobTitle ||
          !formData.company
        }
        className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0"
      >
        {isGenerating ? (
          <span className="flex items-center gap-2">
            <SpinnerIcon />
            Generating...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Generate Cover Letter
          </span>
        )}
      </Button>
    </>
  );
}

function Preview({
  generatedLetter,
  copied,
  copyToClipboard,
  downloadAsTxt,
  regenerate,
  isGenerating,
}) {
  if (!generatedLetter) return null;

  return (
    <div className="space-y-4">
      <div className="p-6 bg-black/30 rounded-lg border border-purple-900/30 whitespace-pre-line">
        {generatedLetter}
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          className="border-purple-700 text-purple-300 hover:bg-purple-900/20 flex items-center gap-2"
          onClick={copyToClipboard}
        >
          {copied ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          {copied ? "Copied!" : "Copy to Clipboard"}
        </Button>

        <Button
          variant="outline"
          className="border-purple-700 text-purple-300 hover:bg-purple-900/20 flex items-center gap-2"
          onClick={downloadAsTxt}
        >
          <Download className="h-4 w-4" />
          Download as TXT
        </Button>

        <Button
          variant="outline"
          className="border-purple-700 text-purple-300 hover:bg-purple-900/20 flex items-center gap-2 ml-auto"
          onClick={regenerate}
          disabled={isGenerating}
        >
          <RefreshCw
            className={`h-4 w-4 ${isGenerating ? "animate-spin" : ""}`}
          />
          Regenerate
        </Button>
      </div>
    </div>
  );
}

function InputField({ id, label, value, onChange }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="bg-black/30 border-purple-900/50 focus-visible:ring-purple-500"
      />
    </div>
  );
}

function SpinnerIcon() {
  return (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
