
import { BsStack } from "react-icons/bs";

const Card = (icon, title, paragraph ) => {
  return (
    <div className="bg-white shadow-lg flex flex-col gap-2  py-3 max-w-60 px-2">
      <div>
      <BsStack className="w-4 h-4 text-indigo-600"/>
      </div>
      <h1 className="font-bold text-xl">Title</h1>
      <p className="text-gray-700 text-sm"  >One for all and all for one, Muskhounds are always ready</p>
      <a href="#" className="text-blue-600">Learn More</a>
    </div>
  )
}

export default Card