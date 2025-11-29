import { Calendar, Tag } from "lucide-react";

interface NewsItem {
  date: string;
  title: string;
  category: string;
  content: string;
}

const newsItems: NewsItem[] = [
  {
    date: "2024-01-15",
    title: "Agents Benchmark Lite Released",
    category: "Release",
    content:
      "We're excited to announce Agents Benchmark Lite, a smaller subset of 300 instances perfect for quick evaluations and development.",
  },
  {
    date: "2024-01-10",
    title: "New Leaderboard Entries",
    category: "Update",
    content:
      "Five new agents have been added to the leaderboard this week, including several open-source alternatives.",
  },
  {
    date: "2024-01-05",
    title: "Paper Accepted at ICSE 2024",
    category: "Research",
    content:
      "Our paper on Agents Benchmark has been accepted for presentation at the International Conference on Software Engineering.",
  },
  {
    date: "2023-12-20",
    title: "Dataset Expansion",
    category: "Update",
    content:
      "Agents Benchmark now includes 2,294 test instances across 12 popular open-source repositories, up from 1,000 in the initial release.",
  },
  {
    date: "2023-12-10",
    title: "Evaluation Framework Updates",
    category: "Release",
    content:
      "We've released version 2.0 of the evaluation framework with improved metrics and better error reporting.",
  },
];

const categoryColors: Record<string, string> = {
  Release: "bg-blue-100 text-blue-800",
  Update: "bg-green-100 text-green-800",
  Research: "bg-purple-100 text-purple-800",
};

export default function News() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            News & Updates
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay up to date with the latest Agents Benchmark developments
          </p>
        </div>

        <div className="space-y-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      categoryColors[item.category] || "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {item.category}
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
              <p className="mt-4 text-gray-600">{item.content}</p>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 rounded-lg bg-gray-900 p-8 text-center text-white">
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="mt-2 text-gray-300">
            Subscribe to our newsletter to receive the latest updates and
            announcements.
          </p>
          <div className="mt-6 flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="rounded-md bg-blue-600 px-6 py-2 font-semibold hover:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

