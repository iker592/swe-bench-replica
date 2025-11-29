"use client";

import { useState } from "react";
import { Trophy, TrendingUp, CheckCircle2 } from "lucide-react";

interface ModelResult {
  rank: number;
  model: string;
  organization: string;
  passRate: number;
  instances: number;
  trend: "up" | "down" | "stable";
}

const mockData: ModelResult[] = [
  {
    rank: 1,
    model: "Claude Sonnet 4.5",
    organization: "Anthropic",
    passRate: 89.2,
    instances: 2047,
    trend: "up",
  },
  {
    rank: 2,
    model: "GPT-4o",
    organization: "OpenAI",
    passRate: 87.5,
    instances: 2047,
    trend: "up",
  },
  {
    rank: 3,
    model: "GPT-4 Turbo",
    organization: "OpenAI",
    passRate: 82.3,
    instances: 2047,
    trend: "stable",
  },
  {
    rank: 4,
    model: "Claude Opus 3",
    organization: "Anthropic",
    passRate: 79.8,
    instances: 2047,
    trend: "down",
  },
  {
    rank: 5,
    model: "Gemini Pro 1.5",
    organization: "Google",
    passRate: 76.4,
    instances: 2047,
    trend: "up",
  },
  {
    rank: 6,
    model: "Llama 3.1 405B",
    organization: "Meta",
    passRate: 71.2,
    instances: 2047,
    trend: "up",
  },
  {
    rank: 7,
    model: "Mixtral 8x22B",
    organization: "Mistral AI",
    passRate: 68.9,
    instances: 2047,
    trend: "stable",
  },
  {
    rank: 8,
    model: "CodeLlama 70B",
    organization: "Meta",
    passRate: 65.3,
    instances: 2047,
    trend: "down",
  },
];

export default function Leaderboard() {
  const [filter, setFilter] = useState<"all" | "recent">("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Leaderboard
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Compare model performance on SWE-bench test instances
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex space-x-4 border-b border-gray-200">
          <button
            onClick={() => setFilter("all")}
            className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
              filter === "all"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            All Models
          </button>
          <button
            onClick={() => setFilter("recent")}
            className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
              filter === "recent"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Recent Submissions
          </button>
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Organization
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Pass Rate
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Instances
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {mockData.map((result) => (
                <tr
                  key={result.rank}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      {result.rank <= 3 && (
                        <Trophy
                          className={`mr-2 h-5 w-5 ${
                            result.rank === 1
                              ? "text-yellow-500"
                              : result.rank === 2
                              ? "text-gray-400"
                              : "text-amber-600"
                          }`}
                        />
                      )}
                      <span className="text-sm font-medium text-gray-900">
                        {result.rank}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {result.model}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {result.organization}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <div className="flex items-center justify-end">
                      <span className="text-sm font-semibold text-gray-900">
                        {result.passRate.toFixed(1)}%
                      </span>
                      <div className="ml-2 h-2 w-24 rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: `${result.passRate}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <div className="flex items-center justify-end">
                      <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-900">
                        {result.instances}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center">
                    {result.trend === "up" && (
                      <TrendingUp className="mx-auto h-5 w-5 text-green-500" />
                    )}
                    {result.trend === "down" && (
                      <TrendingUp className="mx-auto h-5 w-5 rotate-180 text-red-500" />
                    )}
                    {result.trend === "stable" && (
                      <div className="mx-auto h-2 w-2 rounded-full bg-gray-400" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Box */}
        <div className="mt-8 rounded-lg bg-blue-50 p-4">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Results are based on the SWE-bench test set
            with 2,294 instances across 12 repositories. Pass rate indicates the
            percentage of instances where the model successfully resolved the
            issue.
          </p>
        </div>
      </div>
    </div>
  );
}

