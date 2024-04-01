import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Spotlight = () => {
  return (
    <div className="lg:flex md:flex sm:flex justify-center gap-8 pb-12">
    <div className='text-center justify-center align-middle pt-52 pr-12'>
      <FaChevronLeft className="text-xl h-12 w-8  text-[#2C9CF0] border border-[#2C9CF0]" />
    </div>
    <div className="card">
      <div className="flex flex-col p-2 gap-3">
        <div className="w-full flex justify-center">
          <img src="/pic5.png" alt="image" className=" px-2" />
        </div>
        <div className="flex justify-between">
          <div className="w-8 h-8 ml-[-24px] bg-[#eaf3fd] dark:bg-[#221A2C] rounded-[50%]"></div>
          <div className="w-8 h-8 mr-[-24px] bg-[#eaf3fd] dark:bg-[#221A2C] rounded-[50%]"></div>
        </div>
        <hr className="border-dashed border-[1px] mx-4 mt-[-30px] border-[#A9ACB2] dark:border-[#818A97]" />
        <div className="flex justify-center">
          <h2 className="text-base font-medium text-[#000000] dark:text-[#FFFFFF]">Las Vegas Aviators</h2>
        </div>
        <div className="flex justify-center">
          <h4 className="text-sm font-normal text-[#000000] dark:text-[#FFFFFF]">Oct 15 | SUN | 4:30 PM</h4>
        </div>
        <div className="flex justify-center text-center">
          <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Las Vegas Ballpark, Las Vegas, Nevada</h4>
        </div>
        <button className="bg-[#1D1D1F] dark:bg-[#000000] px-5 py-2.5 text-[#FFFFFF] text-xs mx-4">Take Flight Collection</button>
      </div>
    </div>
    <div className="card">
      <div className="flex flex-col p-2 gap-3">
        <div className="w-full flex justify-center">
          <img src="/pic7.png" alt="image" className=" px-2" />
        </div>
        <div className="flex justify-between">
          <div className="w-8 h-8 ml-[-24px] bg-[#eaf3fd] dark:bg-[#221A2C] rounded-[50%]"></div>
          <div className="w-8 h-8 mr-[-24px] bg-[#eaf3fd] dark:bg-[#221A2C] rounded-[50%]"></div>
        </div>
        <hr className="border-dashed border-[1px] mx-4 mt-[-30px] border-[#A9ACB2] dark:border-[#818A97]" />
        <div className="flex justify-center">
          <h2 className="text-base font-medium text-[#000000] dark:text-[#FFFFFF]">Sacramento River Cats</h2>
        </div>
        <div className="flex justify-center">
          <h4 className="text-sm font-normal text-[#000000] dark:text-[#FFFFFF]">Oct 15 | SUN | 4:30 PM</h4>
        </div>
        <div className="flex justify-center text-center">
          <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Sutter Health Park, Sacramento, California</h4>
        </div>
        <button className="bg-[#1D1D1F] dark:bg-[#000000] px-5 py-2.5 text-[#FFFFFF] text-xs mx-4">Orange Collection</button>
      </div>
    </div>
    <div className="card">
      <div className="flex flex-col p-2 gap-3">
        <div className="w-full flex justify-center">
          <img src="/pic5.png" alt="image" className=" px-2" />
        </div>
        <div className="flex justify-between">
          <div className="w-8 h-8 ml-[-24px] bg-[#eaf3fd] dark:bg-[#221A2C] rounded-[50%]"></div>
          <div className="w-8 h-8 mr-[-24px] bg-[#eaf3fd] dark:bg-[#221A2C] rounded-[50%]"></div>
        </div>
        <hr className="border-dashed border-[1px] mx-4 mt-[-30px] border-[#A9ACB2] dark:border-[#818A97]" />
        <div className="flex justify-center">
          <h2 className="text-base font-medium text-[#000000] dark:text-[#FFFFFF]">Las Vegas Aviators</h2>
        </div>
        <div className="flex justify-center">
          <h4 className="text-sm font-normal text-[#000000] dark:text-[#FFFFFF]">Oct 15 | SUN | 4:30 PM</h4>
        </div>
        <div className="flex justify-center text-center">
          <h4 className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF]">Las Vegas Ballpark, Las Vegas, Nevada</h4>
        </div>
        <button className="bg-[#1D1D1F] dark:bg-[#000000] px-5 py-2.5 text-[#FFFFFF] text-xs mx-4">Take Flight Collection</button>
      </div>
    </div>

    <div className='text-center justify-center align-middle pt-52 pl-12 '>
      <FaChevronRight className="text-xl h-12 w-8  text-[#2C9CF0] border border-[#2C9CF0]" />
    </div>
  </div>
  )
}

export default Spotlight
