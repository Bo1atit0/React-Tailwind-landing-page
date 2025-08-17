import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6"

const Footer = () => {

  const footerLinks = {
    Company: ['About', 'Terms of Use', 'Privacy Policy', 'How it Works', 'Contact Us'],
    GetHelp: ['Support Career', '24h Service', 'Quick Chat'],
    Support: ['FAQ', 'Policy', 'Business'],
    Contact: ['WhatsApp', 'Support24'],
  }

  return (
    <footer className="bg-gray-50 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl container mx-auto">
        {/* first row */}
        <div className=" space-y-5 col-span-1" >

          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className='flex '>
              <div className='h-4 w-4 bg-blue-600 rounded-full cursor-pointer opacity-75 hover:opacity-100 transition-opacity'></div>
              <div className='h-4 w-4 bg-red-600 rounded-full cursor-pointer opacity-100 hover:opacity-75 -ml-2 transition-opacity'></div>
            </div>
            <h1 className="text-lg font-semibold">The Next Design</h1>
          </div>
          <p className="text-gray-600 text-sm max-w-3/4" >The copy warmed the little Bind Text that where it came from it
            would have been rewritten a thousnd times
          </p>
          {/* icons */}
          <div className="flex gap-4">
            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-blue-400 cursor-pointer hover:text-white">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-blue-700 hover:text-white cursor-pointer">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* second row */}
        <div className="grid grid-cols-4 gap-8 col-span-2 pb-8">
          {
            Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={categoryIndex} >
                <h2 className="mb-2 font-bold">{category}</h2>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-600 hover:text-gray-800">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>

      </div>
      {/* footer bottom section */}
        <div className="container mx-auto  border-t border-gray-200">
          <div className=" flex flex-col md:flex-row justify-between">
            <p className="text-sm text-gray-600">Copyright © {new Date().getFullYear()} bo1atit0</p>
            <p className="text-sm text-gray-600">Created by bo1atit0</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer