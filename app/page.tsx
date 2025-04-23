"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
//import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Link from 'next/link'

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
    
  const { signOut } = useAuthenticator();

  return (
    <main>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
  <div className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
    <div className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
  <div className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
    <div className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
    <p className="text-sm/6 text-gray-900">
      <strong className="font-semibold">Fake Movie Theatre</strong><svg viewBox="0 0 2 2" className="mx-2 inline size-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Web Scripting Personal Project
    </p>
    <Link href={'/movies'} className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">View Showtimes <span aria-hidden="true">&rarr;</span></Link>
  </div>
  <div className="flex flex-1 justify-end">
  <button onClick={signOut}>Sign out</button>
  </div>
</div>

<h1 className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">

<p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mike OCarroll Personal Project Idea</p>
<p className="font-normal text-gray-700 dark:text-gray-400">Ideally this will be a fake website for a local movie theatre where a signed in user can view showtimes (pulling movie information from https://www.omdbapi.com/)  Other features will be implemented to try and meet project requirements</p>
</h1>
    </main>
  );
}
