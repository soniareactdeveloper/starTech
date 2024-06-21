import { useSelector } from "react-redux"
import Navbar from "../Components/Navbar/Navbar"

const Description = () => {
 const data = useSelector((state)=>state.counter.value)
 

  return (

    <>
     <Navbar/>
     <div className="main w-full p-6 rounded-lg mt-24 bg-white shadow-xl flex gap-12 mb-8">
       <div className="productImg w-[500px] h-[400px] shadow-md mt-6"><img src={data.photo_url} alt="product image" /></div>
       <div className="description mb-8">
        <h2 className="text-2xl ">{data.description}</h2>
        <h2 className="text-xl font-semibold mt-8 ">Key Features</h2>
        <h3 className="text-lg font-normal mt-3">model: {data.model}</h3>
        <h3 className="text-lg font-normal mt-3">processor: {data.processor}</h3>
        <h3 className="text-lg font-normal mt-3">storage: {data.storage}</h3>
        <h3 className="text-lg font-normal mt-3">ram: {data.ram}</h3>
        <h3 className="text-lg font-normal mt-3">display: {data.display}</h3>
        <h3 className="text-lg font-normal mt-3">screen_size: {data.screen_size}</h3>
        <h3 className="text-lg font-normal mt-3">color: {data.color}</h3>
        <h2 className="text-xl font-semibold mt-8 text-red-500 hover:text-black cursor-pointer">View More Info</h2>
        <div className="text-3xl text-red-600 mt-4 font-bold">Price: {data.price}</div>
       </div>
    </div>
    <div className="flex gap-5">
    <div className="specification w-[900px] p-6 bg-white shadow-lg ml-3 mb-9 rounded-sm">
      <h2 className="text-[30px] text-black font-semibold">Specification</h2>
      <h3 className="text-lg text-gray-800 mt-5">Processor: {data.processor}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">charger_capacity: {data.charger_capacity}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">display_resolution: {data.display_resolution}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">storage: {data.storage}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">charger_capacity: {data.charger_capacity}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">cpu_cache: {data.cpu_cache}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">touch_screen: {data.touch_screen}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">bus_speed: {data.bus_speed}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">graphics: {data.graphics}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">lan: {data.lan}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">software: {data.software}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">power: {data.power}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">warranty: {data.warranty}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">weight: {data.weight}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">size: {data.size}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">chipset: {data.chipset}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">speaker: {data.speaker}</h3>
      <hr />
    </div>
      <div className="flex flex-col gap-3 ml-12">
          <h2 className="text-2xl text-black font-bold ml-12">Similar Product</h2>
          <div className="sideProduct w-[400px] p-4 h-[400px] bg-white shadow-2xl">
             <div className="w-[200px] h-[150px]"><img src={data.photo_url} alt="product" /></div>
             <h3 className="text-lg text-black font-medium mt-10">{data.description}</h3>
             <h3 className="text-lg text-black font-medium mt-4">{data.price}</h3>
          </div>
      </div>
    </div>
    </>
  )
} 

export default Description