import { useRef, useState } from "react"

const Boxref = () => {
  const boxref = useRef(null)

  const [position, setPosition] = useState(0)

  const moveLeft = () => {
    setPosition((prev) => prev - 20)
}
  const moveRight = () => {
    setPosition((prev) => prev + 20)
}

  if (boxref.current) {
    boxref.current.style.transform = `translateX(${position}px)`;
  }
  return (
    <section className='flex flex-col gap-4 items-center justify-center py-8'>
       <div 
       ref={boxref} 
        className='bg-amber-950 h-28 w-28 text-center flex items-center justify-center  text-white  font-semibold transition-all duration-500 ease-in-out'>Move Me</div>

       <div>
        <button onClick={moveLeft} className="bg-amber-500 py-3 px-8 rounded-lg font-bold hover:bg-amber-800 shadow-lg text-white transition-colors duration-500 ease-in-out cursor-pointer mr-4">Left</button>
        <button onClick={moveRight} className="ml-4 bg-amber-500 py-3 px-8 rounded-lg font-bold hover:bg-amber-800 shadow-lg text-white transition-colors duration-500 ease-in-out cursor-pointer">Right</button>

       </div>
    </section>
   
  )
}

export default Boxref