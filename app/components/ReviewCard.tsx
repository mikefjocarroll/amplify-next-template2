'use client'

import { useState, useEffect } from "react";
import Link from 'next/link'



export default function ReviewCard() {

  return (
    <div>
      <h1 className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title: Guardians of the Galaxy Vol. 2 </p>
      <p>Review: The new film is more expansive, more beautiful, funnier, nuttier and — this is the most difficult trick for any comic-book movie to pull off — more touching than the first film.</p>
      </h1>
    </div>
  
  );
}
