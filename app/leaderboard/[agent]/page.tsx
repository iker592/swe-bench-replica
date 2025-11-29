"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, Target, TrendingUp, AlertCircle, CheckCircle2, XCircle, BarChart3 } from "lucide-react";
import { slugify } from "@/lib/utils";

interface AgentMetrics {
  agent: string;
  organization: string;
  passRate: number;
  instances: number;
  latency: {
    average: number; // ms
    p50: number;
    p95: number;
    p99: number;
  };
  tokenCost: {
    total: number; // USD
    perInstance: number;
    inputTokens: number;
    outputTokens: number;
  };
  accuracy: {
    overall: number;
    byRepository: Array<{
      repo: string;
      passRate: number;
      instances: number;
    }>;
  };
  // Additional metrics
  errorRate: number;
  timeToFirstToken: number; // ms
  averageAttempts: number;
  codeQualityScore: number;
  testCoverageImprovement: number;
}

// Mock data - in a real app, this would come from an API
const getAgentData = (agentSlug: string): AgentMetrics | null => {
  const agentMap: Record<string, AgentMetrics> = {
    "codeforge-alpha": {
      agent: "CodeForge Alpha",
      organization: "TechCorp AI",
      passRate: 89.2,
      instances: 2047,
      latency: {
        average: 1250,
        p50: 980,
        p95: 2100,
        p99: 3200,
      },
      tokenCost: {
        total: 1245.67,
        perInstance: 0.608,
        inputTokens: 2450000,
        outputTokens: 890000,
      },
      accuracy: {
        overall: 89.2,
        byRepository: [
          { repo: "django/django", passRate: 92.5, instances: 245 },
          { repo: "pytest-dev/pytest", passRate: 91.2, instances: 189 },
          { repo: "scikit-learn/scikit-learn", passRate: 88.7, instances: 312 },
          { repo: "matplotlib/matplotlib", passRate: 87.3, instances: 198 },
          { repo: "sympy/sympy", passRate: 89.1, instances: 267 },
          { repo: "pydata/pandas", passRate: 90.4, instances: 234 },
        ],
      },
      errorRate: 2.1,
      timeToFirstToken: 145,
      averageAttempts: 1.2,
      codeQualityScore: 8.7,
      testCoverageImprovement: 12.3,
    },
    "devbot-nexus": {
      agent: "DevBot Nexus",
      organization: "InnovateLabs",
      passRate: 87.5,
      instances: 2047,
      latency: {
        average: 980,
        p50: 750,
        p95: 1800,
        p99: 2800,
      },
      tokenCost: {
        total: 1567.89,
        perInstance: 0.765,
        inputTokens: 2890000,
        outputTokens: 1020000,
      },
      accuracy: {
        overall: 87.5,
        byRepository: [
          { repo: "django/django", passRate: 90.2, instances: 245 },
          { repo: "pytest-dev/pytest", passRate: 88.9, instances: 189 },
          { repo: "scikit-learn/scikit-learn", passRate: 86.1, instances: 312 },
          { repo: "matplotlib/matplotlib", passRate: 85.7, instances: 198 },
          { repo: "sympy/sympy", passRate: 87.8, instances: 267 },
          { repo: "pydata/pandas", passRate: 88.5, instances: 234 },
        ],
      },
      errorRate: 2.8,
      timeToFirstToken: 120,
      averageAttempts: 1.3,
      codeQualityScore: 8.5,
      testCoverageImprovement: 11.2,
    },
    "syntaxmaster-pro": {
      agent: "SyntaxMaster Pro",
      organization: "CodeGen Systems",
      passRate: 82.3,
      instances: 2047,
      latency: {
        average: 1100,
        p50: 850,
        p95: 1950,
        p99: 3000,
      },
      tokenCost: {
        total: 1423.45,
        perInstance: 0.695,
        inputTokens: 2750000,
        outputTokens: 950000,
      },
      accuracy: {
        overall: 82.3,
        byRepository: [
          { repo: "django/django", passRate: 85.1, instances: 245 },
          { repo: "pytest-dev/pytest", passRate: 83.7, instances: 189 },
          { repo: "scikit-learn/scikit-learn", passRate: 81.2, instances: 312 },
          { repo: "matplotlib/matplotlib", passRate: 80.5, instances: 198 },
          { repo: "sympy/sympy", passRate: 82.8, instances: 267 },
          { repo: "pydata/pandas", passRate: 83.2, instances: 234 },
        ],
      },
      errorRate: 3.2,
      timeToFirstToken: 135,
      averageAttempts: 1.4,
      codeQualityScore: 8.3,
      testCoverageImprovement: 10.5,
    },
    "autofix-agent": {
      agent: "AutoFix Agent",
      organization: "DevTools Inc",
      passRate: 79.8,
      instances: 2047,
      latency: {
        average: 1380,
        p50: 1050,
        p95: 2250,
        p99: 3400,
      },
      tokenCost: {
        total: 1189.23,
        perInstance: 0.581,
        inputTokens: 2380000,
        outputTokens: 870000,
      },
      accuracy: {
        overall: 79.8,
        byRepository: [
          { repo: "django/django", passRate: 82.4, instances: 245 },
          { repo: "pytest-dev/pytest", passRate: 81.1, instances: 189 },
          { repo: "scikit-learn/scikit-learn", passRate: 78.9, instances: 312 },
          { repo: "matplotlib/matplotlib", passRate: 77.8, instances: 198 },
          { repo: "sympy/sympy", passRate: 79.5, instances: 267 },
          { repo: "pydata/pandas", passRate: 80.2, instances: 234 },
        ],
      },
      errorRate: 3.5,
      timeToFirstToken: 155,
      averageAttempts: 1.5,
      codeQualityScore: 8.1,
      testCoverageImprovement: 9.8,
    },
    "swiftcoder-agent": {
      agent: "SwiftCoder Agent",
      organization: "AgileAI",
      passRate: 76.4,
      instances: 2047,
      latency: {
        average: 920,
        p50: 720,
        p95: 1700,
        p99: 2600,
      },
      tokenCost: {
        total: 987.65,
        perInstance: 0.482,
        inputTokens: 2200000,
        outputTokens: 780000,
      },
      accuracy: {
        overall: 76.4,
        byRepository: [
          { repo: "django/django", passRate: 79.2, instances: 245 },
          { repo: "pytest-dev/pytest", passRate: 77.8, instances: 189 },
          { repo: "scikit-learn/scikit-learn", passRate: 75.1, instances: 312 },
          { repo: "matplotlib/matplotlib", passRate: 74.3, instances: 198 },
          { repo: "sympy/sympy", passRate: 76.2, instances: 267 },
          { repo: "pydata/pandas", passRate: 77.1, instances: 234 },
        ],
      },
      errorRate: 4.1,
      timeToFirstToken: 110,
      averageAttempts: 1.6,
      codeQualityScore: 7.9,
      testCoverageImprovement: 8.7,
    },
    "precisionfix": {
      agent: "PrecisionFix",
      organization: "SmartDev Solutions",
      passRate: 71.2,
      instances: 2047,
      latency: {
        average: 1650,
        p50: 1280,
        p95: 2450,
        p99: 3800,
      },
      tokenCost: {
        total: 456.78,
        perInstance: 0.223,
        inputTokens: 2100000,
        outputTokens: 720000,
      },
      accuracy: {
        overall: 71.2,
        byRepository: [
          { repo: "django/django", passRate: 74.3, instances: 245 },
          { repo: "pytest-dev/pytest", passRate: 72.5, instances: 189 },
          { repo: "scikit-learn/scikit-learn", passRate: 69.8, instances: 312 },
          { repo: "matplotlib/matplotlib", passRate: 68.7, instances: 198 },
          { repo: "sympy/sympy", passRate: 71.1, instances: 267 },
          { repo: "pydata/pandas", passRate: 72.0, instances: 234 },
        ],
      },
      errorRate: 5.2,
      timeToFirstToken: 180,
      averageAttempts: 1.8,
      codeQualityScore: 7.5,
      testCoverageImprovement: 7.2,
    },
    "codewizard": {
      agent: "CodeWizard",
      organization: "NextGen AI",
      passRate: 68.9,
      instances: 2047,
      latency: {
        average: 1520,
        p50: 1180,
        p95: 2300,
        p99: 3600,
      },
      tokenCost: {
        total: 389.12,
        perInstance: 0.190,
        inputTokens: 1980000,
        outputTokens: 680000,
      },
      accuracy: {
        overall: 68.9,
        byRepository: [
          { repo: "django/django", passRate: 71.8, instances: 245 },
          { repo: "pytest-dev/pytest", passRate: 70.1, instances: 189 },
          { repo: "scikit-learn/scikit-learn", passRate: 67.5, instances: 312 },
          { repo: "matplotlib/matplotlib", passRate: 66.2, instances: 198 },
          { repo: "sympy/sympy", passRate: 68.7, instances: 267 },
          { repo: "pydata/pandas", passRate: 69.3, instances: 234 },
        ],
      },
      errorRate: 5.8,
      timeToFirstToken: 165,
      averageAttempts: 1.9,
      codeQualityScore: 7.2,
      testCoverageImprovement: 6.5,
    },
    "bughunter-agent": {
      agent: "BugHunter Agent",
      organization: "DebugTech",
      passRate: 65.3,
      instances: 2047,
      latency: {
        average: 1780,
        p50: 1380,
        p95: 2650,
        p99: 4100,
      },
      tokenCost: {
        total: 312.45,
        perInstance: 0.153,
        inputTokens: 1850000,
        outputTokens: 640000,
      },
      accuracy: {
        overall: 65.3,
        byRepository: [
          { repo: "django/django", passRate: 68.6, instances: 245 },
          { repo: "pytest-dev/pytest", passRate: 66.9, instances: 189 },
          { repo: "scikit-learn/scikit-learn", passRate: 63.8, instances: 312 },
          { repo: "matplotlib/matplotlib", passRate: 62.1, instances: 198 },
          { repo: "sympy/sympy", passRate: 65.2, instances: 267 },
          { repo: "pydata/pandas", passRate: 65.8, instances: 234 },
        ],
      },
      errorRate: 6.5,
      timeToFirstToken: 195,
      averageAttempts: 2.1,
      codeQualityScore: 6.9,
      testCoverageImprovement: 5.8,
    },
  };

  return agentMap[agentSlug] || null;
};

export default function AgentDetailPage({
  params,
}: {
  params: Promise<{ agent: string }>;
}) {
  const { agent: agentSlug } = use(params);
  const agentData = getAgentData(agentSlug);

  if (!agentData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Agent Not Found</h1>
            <p className="mt-4 text-lg text-gray-600">
              The agent you're looking for doesn't exist.
            </p>
            <Link
              href="/leaderboard"
              className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Leaderboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/leaderboard"
            className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Leaderboard
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {agentData.agent}
          </h1>
          <p className="mt-2 text-lg text-gray-600">{agentData.organization}</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pass Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {agentData.passRate.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Latency</p>
                <p className="text-2xl font-bold text-gray-900">
                  {(agentData.latency.average / 1000).toFixed(2)}s
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Cost</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${agentData.tokenCost.total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                <CheckCircle2 className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Instances</p>
                <p className="text-2xl font-bold text-gray-900">
                  {agentData.instances.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Sections */}
        <div className="space-y-6">
          {/* Latency Breakdown */}
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Latency Metrics</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <p className="text-sm text-gray-600">Average</p>
                <p className="text-lg font-semibold text-gray-900">
                  {(agentData.latency.average / 1000).toFixed(2)}s
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">P50</p>
                <p className="text-lg font-semibold text-gray-900">
                  {(agentData.latency.p50 / 1000).toFixed(2)}s
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">P95</p>
                <p className="text-lg font-semibold text-gray-900">
                  {(agentData.latency.p95 / 1000).toFixed(2)}s
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">P99</p>
                <p className="text-lg font-semibold text-gray-900">
                  {(agentData.latency.p99 / 1000).toFixed(2)}s
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Time to First Token</p>
              <p className="text-lg font-semibold text-gray-900">
                {agentData.timeToFirstToken}ms
              </p>
            </div>
          </div>

          {/* Token Cost Breakdown */}
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Token Cost Analysis</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm text-gray-600">Total Cost</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${agentData.tokenCost.total.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Cost per Instance</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${agentData.tokenCost.perInstance.toFixed(3)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Input Tokens</p>
                <p className="text-lg font-semibold text-gray-900">
                  {agentData.tokenCost.inputTokens.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Output Tokens</p>
                <p className="text-lg font-semibold text-gray-900">
                  {agentData.tokenCost.outputTokens.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Accuracy by Repository */}
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Accuracy by Repository</h2>
            <div className="space-y-4">
              {agentData.accuracy.byRepository.map((repo) => (
                <div key={repo.repo} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{repo.repo}</p>
                    <p className="text-xs text-gray-500">
                      {repo.instances} instances
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32">
                      <div className="h-2 rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: `${repo.passRate}%` }}
                        />
                      </div>
                    </div>
                    <span className="w-16 text-right text-sm font-semibold text-gray-900">
                      {repo.passRate.toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Performance Metrics</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Error Rate</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {agentData.errorRate}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Attempts</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {agentData.averageAttempts.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Code Quality Score</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {agentData.codeQualityScore}/10
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Test Coverage Improvement</span>
                  <span className="text-sm font-semibold text-green-600">
                    +{agentData.testCoverageImprovement}%
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Summary</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {Math.round((agentData.passRate / 100) * agentData.instances)} instances
                      passed
                    </p>
                    <p className="text-xs text-gray-500">
                      {agentData.passRate.toFixed(1)}% success rate
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {Math.round((agentData.errorRate / 100) * agentData.instances)} errors
                      encountered
                    </p>
                    <p className="text-xs text-gray-500">
                      {agentData.errorRate}% error rate
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Average {agentData.averageAttempts.toFixed(1)} attempts per instance
                    </p>
                    <p className="text-xs text-gray-500">
                      Lower is better
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
