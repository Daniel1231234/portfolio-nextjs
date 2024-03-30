import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"

interface PageProps {}

const NotfoundPage: React.FC<PageProps> = ({}) => {
  //   notFound()
  return (
    <div className="flex items-center justify-center h-screen bg-body text-mainLight">
      <div className="text-center">
        <h1 className="text-6xl font-bold ">Oops!</h1>
        <p className="text-4xl  mt-4">404 - Page Not Found</p>
        <p className="mt-6 ">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <p className="mt-4 ">
          Here’s a joke to lighten your mood: <br />
          <em>
            Why do programmers prefer dark mode? Because light attracts bugs!
          </em>
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default NotfoundPage
