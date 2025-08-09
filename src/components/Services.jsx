 import { BsStack } from 'react-icons/bs'
 import { HiLightBulb } from 'react-icons/hi'
 import { FiSettings } from 'react-icons/fi'
 import { BiTime } from 'react-icons/bi'
 
 const services = [
    {
      icon: <BsStack className="w-5 h-5 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-5 h-5 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-5 h-5 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-5 h-5 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]
  export default services