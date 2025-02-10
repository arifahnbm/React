import React from "react"

const Button = (props) => {
  const {textcolor, children} = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${props.color} ${textcolor}`} type="submit">
        {children}
    </button>
  )
}

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
