import Link from "next/link";
import { ArrowRight, Github, BarChart3, BookOpen, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            SWE-bench
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            A benchmark for evaluating large language models on real-world
            software engineering tasks
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/leaderboard"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Leaderboard
            </Link>
            <Link
              href="/docs"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What is SWE-bench?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            SWE-bench provides a comprehensive evaluation framework for
            assessing the capabilities of AI agents in real-world software
            engineering scenarios.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Github className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
              Real GitHub Issues
            </h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Test your models on actual issues from popular open-source
              repositories, ensuring realistic evaluation scenarios.
            </p>
          </div>
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
              Comprehensive Metrics
            </h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Track performance across multiple dimensions including code
              correctness, test coverage, and solution quality.
            </p>
          </div>
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
              Easy Integration
            </h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Simple API and evaluation tools make it easy to benchmark your
              models and compare results with the community.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">2,294</div>
              <div className="mt-2 text-sm font-medium text-gray-400">
                Test Instances
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">12</div>
              <div className="mt-2 text-sm font-medium text-gray-400">
                Repositories
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="mt-2 text-sm font-medium text-gray-400">
                Models Evaluated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-blue-600 px-6 py-16 sm:px-12 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Explore the documentation to learn how to evaluate your models or
              check out the leaderboard to see current results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/docs"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Read Documentation
              </Link>
              <Link
                href="/leaderboard"
                className="text-base font-semibold leading-6 text-white"
              >
                View Leaderboard <ArrowRight className="ml-2 inline h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
