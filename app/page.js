"use client"

import { useSelector } from "react-redux"

export default function Home() {
  const data = useSelector((state) => state.auth);

  console.log('data::::', data);
  return (
    <div className="text-xl text-center drop-shadow-xl flex items-center justify-center font-medium w-full h-screen text-white bg-gradient-to-tr from-purple-500 to-blue-500">
      Hey mom! i am doing nextjs 13 with redux and tailwindcss
    </div>
  )
}

