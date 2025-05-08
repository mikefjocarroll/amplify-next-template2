'use client'

import { useState, useEffect } from "react";
import Link from 'next/link'


// set my API URL
const URL = 'https://www.omdbapi.com/?i=tt3996208&apikey=' + process.env.NEXT_PUBLIC_API_KEY

export default function MovieCard3() {
  const [movieTitle, setMovieTitle] = useState(0)
  const [runTime, setRunTime] = useState(0)
  const [director, setDirector] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json)
        setMovieTitle(json.Title);
        setRunTime(json.Runtime);
        setDirector(json.Director);
      })
      
    }
    fetchData();
  },[])

  return (
    <div>
      <h1 className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title: {movieTitle} </p>
      <p>Director: {director}</p>
      <p>Runtime: {runTime} </p>
      <p>Showtimes: 3pm / 6pm / 9pm</p>
      <Link
                  href={"/reviews"}
                  className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  Reviews <span aria-hidden="true">&rarr;</span>
                </Link>
      </h1>
    </div>
  
  );
}
