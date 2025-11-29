import { BookOpen, Code, Download, FileText, Github } from "lucide-react";
import Link from "next/link";

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      icon: BookOpen,
      description: "Learn how to set up and run your first evaluation",
      items: [
        "Installation Guide",
        "Quick Start Tutorial",
        "Basic Usage Examples",
      ],
    },
    {
      title: "Dataset",
      icon: FileText,
      description: "Understand the structure and contents of Agents Benchmark",
      items: [
        "Dataset Overview",
        "Repository Selection",
        "Issue Format",
        "Test Instances",
      ],
    },
    {
      title: "Evaluation",
      icon: Code,
      description: "Learn how to evaluate your agents",
      items: [
        "Evaluation Framework",
        "Running Evaluations",
        "Metrics Explained",
        "Interpreting Results",
      ],
    },
    {
      title: "Submission",
      icon: Github,
      description: "Submit your results to the leaderboard",
      items: [
        "Submission Guidelines",
        "Format Requirements",
        "Verification Process",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive guide to using Agents Benchmark for evaluating AI
            agents
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link
            href="#getting-started"
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="ml-3 font-medium text-gray-900">
                Getting Started
              </span>
            </div>
          </Link>
          <Link
            href="#dataset"
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-blue-600" />
              <span className="ml-3 font-medium text-gray-900">Dataset</span>
            </div>
          </Link>
          <Link
            href="#evaluation"
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center">
              <Code className="h-6 w-6 text-blue-600" />
              <span className="ml-3 font-medium text-gray-900">
                Evaluation
              </span>
            </div>
          </Link>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                id={section.title.toLowerCase().replace(" ", "-")}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-6 flex-1">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{section.description}</p>
                    <ul className="mt-6 space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-gray-700"
                        >
                          <span className="mr-2 text-blue-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Example */}
        <div className="mt-12 rounded-lg border border-gray-200 bg-gray-900 p-8">
          <h3 className="mb-4 text-xl font-semibold text-white">
            Quick Start Example
          </h3>
          <pre className="overflow-x-auto text-sm text-gray-300">
            <code>{`# Install Agents Benchmark
pip install agents-bench

# Run evaluation
from agents_bench import AgentsBench

bench = AgentsBench()
results = bench.evaluate(
    agent=your_agent,
    instances="test",
    verbose=True
)

# View results
print(f"Pass Rate: {results.pass_rate:.2f}%")
print(f"Instances Solved: {results.solved}/{results.total}")`}</code>
          </pre>
        </div>

        {/* Download Section */}
        <div className="mt-12 rounded-lg bg-blue-600 p-8 text-center text-white">
          <Download className="mx-auto h-12 w-12" />
          <h3 className="mt-4 text-2xl font-bold">
            Download the Dataset
          </h3>
          <p className="mt-2 text-blue-100">
            Get access to the full Agents Benchmark dataset and start evaluating your
            agents today.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
            >
              Download Dataset
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

