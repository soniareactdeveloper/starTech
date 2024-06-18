import Navbar from "../Components/Navbar/Navbar"

const Description = () => {
  return (
    <>
     <Navbar/>
     <div className="main w-full p-6 rounded-lg mt-24 bg-white shadow-xl flex gap-12 mb-8">
       <div className="productImg w-[500px] h-[400px] shadow-md mt-6"></div>
       <div className="description mb-8">
        <h2 className="text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas velit officiis</h2>
        <h2 className="text-xl font-semibold mt-8 ">Key Features</h2>
        <h3 className="text-lg font-normal mt-3">model:</h3>
        <h3 className="text-lg font-normal mt-3">processor:</h3>
        <h3 className="text-lg font-normal mt-3">storage:</h3>
        <h3 className="text-lg font-normal mt-3">ram:</h3>
        <h3 className="text-lg font-normal mt-3">display:</h3>
        <h3 className="text-lg font-normal mt-3">screen_size:</h3>
        <h3 className="text-lg font-normal mt-3">color:</h3>
        <h2 className="text-xl font-semibold mt-8 text-red-500 hover:text-black cursor-pointer">View More Info</h2>
        <button className="w-[200px] p-3 bg-blue-500 text-white mt-5 rounded-md text-lg font-semibold hover:bg-amber-300 hover:text-black active:bg-blue-500 active:text-white">Buy Now</button>
       </div>
    </div>
    <div className="specification w-[900px] p-6 bg-white shadow-lg ml-3 mb-9 rounded-sm">
      <h2 className="text-[30px] text-black font-semibold">Specification</h2>
      <h3 className="text-lg text-gray-800 mt-5">Processor:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">charger_capacity:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">display_resolution:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">storage:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">charger_capacity:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">cpu_cache:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">touch_screen:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">bus_speed:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">graphics:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">lan:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">software:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">power:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">warranty:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">weight:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">size:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">chipset:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">speaker:</h3>
      <hr />
    </div>
    </>
  )
} 

export default Description