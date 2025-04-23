import React from 'react';

export  default function MovieCard(){
    return(
        <h1 className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          This Content is in the MovieCard Component
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          (pull movie information from https://www.omdbapi.com/)
        </p>
      </h1>
    )
}