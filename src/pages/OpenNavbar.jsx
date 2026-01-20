
import { FiEdit } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import UserCart from '../components/UserCart';

const OpenNavbar = ({isOpen}) => {


  return (
    <section
      className={`border-r border-l border-l-[#0063cd] border-gray-300  bg-[#8e58fb00] backdrop-blur-2xl relative transition-all duration-600 ${isOpen? "w-[35%] px-4 max-sm:w-[100vw]":"w-[0%]"}`}
    >
      {isOpen &&
      <main>
      <div className="flex justify-between mt-2 mb-2">
        <h1 className='text-2xl font-bold'>Chats</h1>
        <div className="flex gap-4">
          <FiEdit className='text-3xl hover:bg-gray-300 p-1 w-10 rounded cursor-pointer' />
          <BiMenuAltRight className='text-3xl hover:bg-gray-300 p-1 w-10 rounded cursor-pointer' />
        </div>
      </div>

      <div className="flex items-center border border-gray-400 rounded focus-within:border-b-3 focus-within:border-blue-600">
        <input type="text" name="search" className='w-full outline-0 py-1 px-2' />
        <div className='h-[30px] flex items-center cursor-pointer'>
          <CiSearch />
        </div>
      </div>

      <div className='overflow-auto h-screen'>
        <UserCart />
      </div>

      </main>
}
    </section>
  )
}

export default OpenNavbar
