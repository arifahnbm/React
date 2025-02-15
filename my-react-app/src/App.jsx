import React from "react"
import Button from "./components/Elements/Button"

function App() {
  return (
    <div className="flex justify-center bg-yellow-300 items-center min-h-screen">
      <div className="flex gap-x-3">
        <Button color="bg-black" textcolor="text-white">Buy now</Button>
        <Button color="bg-white" textcolor="text-black">Login</Button>
        <Button color="bg-red-500" textcolor="text-white">Register</Button>
      </div>
    </div>
  )
}

export default App
