import React from "react";
import Link from "next/link";
import ReviewCard from "../components/ReviewCard"
import ReviewCard2 from "../components/ReviewCard2"
import ReviewCard3 from "../components/ReviewCard3"

export default function Reviews() {
    return (
      <main>
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
          </div>
          <div
            className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm/6 text-gray-900">
              <strong className="font-semibold">Fake Movie Theatre</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline size-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              Web Scripting Personal Project
            </p>
            <Link
              href={"/"}
              className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Return to Home <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
          <div>
                <h1>Reviews</h1>
                <ReviewCard/>
                <ReviewCard2/>
                <ReviewCard3/>
              </div>
      </main>
    );
  }