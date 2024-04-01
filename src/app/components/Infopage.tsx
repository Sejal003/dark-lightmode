import ThemeToggle from "./ThemeToggle";
import Players from "./Players";
import Spotlight from "./Spotlight";
const Infopage = () => {
  return (
    <div className="bg-[#F7F7F8] dark:bg-[#292B32]">
        <div className='lg:mx-24 md:mx-12 sm:mx-4'>
          <div className="flex justify-between">
          <div className='py-7'>
            <h3 className=' text-2xl text-[#000000] dark:text-[#FFFFFF] font-bold'>Sports</h3>
            <hr className="w-20 h-px my-1 bg-[#738FFF] border-0 "></hr>
          </div>
          <div className="py-7">
          <ThemeToggle/>
          </div>
          </div>
          <Players></Players>
          <div className="flex justify-center pb-12">
            <button className="bg-[#2C9CF0] selection:duration-300 px-5 py-2.5 
           rounded-md text-white text-sm mt-2">See more</button>
          </div>
        </div>
        <div className="lg:mx-24 md:mx-12 sm:mx-4 bg-[#F9F8FF] dark:bg-gradient-to-b from-[#18282A] to-[#221A2C]">
          <div className='py-8'>
            <h3 className="text-5xl text-[#000000] dark:text-[#ffffff] font-bold text-center pt-8">Collection Spotlight</h3>
            <p className="mx-24 lg:mx-40 sm:mx-24 text-sm font-normal text-[#000000] dark:text-[#ffffff] text-center py-4">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
          </div>
          <Spotlight></Spotlight>
        </div>
      </div>
  )
}
export default Infopage
