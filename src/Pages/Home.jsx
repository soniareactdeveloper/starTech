import { IoMdLaptop } from "react-icons/io";
import { GiHazardSign } from "react-icons/gi";
import { IoIosHelpCircle } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../Slices/ProductSlices";



const Home = () => {
 const[state, setState]= useState([])
 const navigate = useNavigate()
 const dispatch = useDispatch()


  useEffect(()=>{
    axios.get('https://api.jsonbin.io/v3/b/6671e3e2e41b4d34e4053064')
    .then((res)=>setState(res.data.record))
  })
   
  const handleShow = (product)=>{
    navigate('/description')
    dispatch(incrementByAmount(product))
  }
  
  const handleBuy = (buy)=>{
    navigate('/buy')
    dispatch(incrementByAmount(buy))
  }
  return (
    <> 
      <Navbar/>
       <div className="banner flex gap-6">
        <div className="banner_img px-4 py-7"><img src="https://www.startech.com.bd/image/cache/catalog/home/banner/eid-salami/eid-salami-live-now-home-banner-982x500.webp" alt="banner Image"/></div>
        <div className="banner_left">
          <div className="compare_product w-[380px] mr-3 text-center bg-[#FFE8A1] rounded-md my-7">
            <h2 className="text-xl font-semibold pt-3">Compare Products</h2>
            <p className="text-sm font-semibold pt-1 text-[#7F7450]">Choose Two Products to Compare</p>
            <br />
            <input type="text" placeholder="Search and Select Product" className="p-2 w-[300px] rounded-md border-none outline-none text-l font-semibold"/>
            <br />
            <br />
            <input type="text" placeholder="Search and Select Product" className="p-2 w-[300px] rounded-md border-none outline-none text-l font-semibold"/>
            <br />
            <br />
            <button className="p-3 w-[300px] rounded-md border-2 border-blue-700 outline-none  text-blue-700 text-lg font-semibold hover:bg-blue-700 hover:text-white">View Comparison</button>
            <br />
            <br />
          </div>
          <div className="bannerImg mr-3 rounded-md"><img src="https://www.startech.com.bd/image/catalog/home/banner/notice/small/18-june-sm.webp" alt="Banner Image" /></div>
        </div>
      </div>
      <div className="information m-9 rounded-lg flex gap-9">
          <div className="information_card w-[300px] p-3 shadow-md bg-white flex justify-center items-center gap-5">
            <IoMdLaptop className="bg-[#EF4A23] text-white p-3 text-6xl rounded-full" />
            <div className="information_text">
              <h2 className="text-black text-xl font-bold">Laptop Finder</h2>
              <p className="text-[#444] font-light">Find your Laptop Easily</p>
            </div>
          </div>
          <div className="information_card w-[300px] p-3 shadow-md bg-white flex justify-center items-center gap-5">
            <GiHazardSign className="bg-[#EF4A23] text-white p-3 text-6xl rounded-full" />
            <div className="information_text">
              <h2 className="text-black text-xl font-bold">Raise a Complain</h2>
              <p className="text-[#444] font-light">Share your Experience</p>
            </div>
          </div>
          <div className="information_card w-[300px] p-3 shadow-md bg-white flex justify-center items-center gap-5">
            <IoIosHelpCircle className="bg-[#EF4A23] text-white p-3 text-6xl rounded-full" />
            <div className="information_text">
              <h2 className="text-black text-xl font-bold">Online Support</h2>
              <p className="text-[#444] font-light">Get Online Support</p>
            </div>
          </div>
          <div className="information_card w-[300px] p-3 shadow-md bg-white flex justify-center items-center gap-5">
            <MdMiscellaneousServices className="bg-[#EF4A23] text-white p-3 text-6xl rounded-full" />
            <div className="information_text">
              <h2 className="text-black text-xl font-bold">Service Center</h2>
              <p className="text-[#444] font-light">Repair your Device</p>
            </div>
          </div>
      </div>
      <marquee direction="left" className=" container shadow-xl bg-white p-3 ml-12 rounded-full text-black text-lg font-bold ">Eid Mubarak! Due to Eid Holiday our online activities and outlets are out of operation. For Eid holiday schedule please visit our contact page.</marquee>
      <div className="features mt-16 mb-20">
        <h2 className="text-center text-3xl font-semibold">Featured Category</h2>
        <p className=" text-center text-lg font-normal mt-2">Get Your Desired Product from Featured Category!</p>
        <div className="featuresCard container mt-4 flex flex-wrap justify-between items-center gap-1">
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/7969/7969763.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-2 hover:text-red-500 cursor-pointer">AC</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/90/90904.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">Drone</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/5109/5109504.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">Gimbal</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/4100/4100512.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">Laptop</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/7055/7055483.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">Laptop Accesories</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/7465/7465191.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">TV</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/545/545245.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">Mobile Phone</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col mt-4">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/7075/7075373.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">Mobile Accessories</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col mt-4">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/3978/3978898.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">Smart Watch</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col mt-4">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/937/937363.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">HeadPhone</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col mt-4">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/4291/4291409.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">EarBuds</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col mt-4">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/3776/3776753.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">BlueTooth Speaker</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col mt-4">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/4172/4172050.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">Action Camera</a>
           </div>
           <div className="ac w-[170px] h-[150px] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col mt-4">
              <img className="w-[60px]" src="https://cdn-icons-png.flaticon.com/128/9926/9926016.png" alt="Features Images" />
              <a href="#" className="text-black text-lg font-semibold mt-4 hover:text-red-500 cursor-pointer">Gaming Console</a>
           </div>
        </div>
      </div>
      <div className="store container h-[150px] w-full p-4 bg-blue-600 mb-20 rounded-lg flex items-center justify-between">
        <div className=" container flex items-center gap-4"> 
         <IoLocationSharp className="text-6xl text-white" />
         <div className="featureCardLeft">
            <div className="featureText">
              <h2 className="text-4xl font-bold text-white mb-2">20+ Physical Stores</h2>
              <h3 className="text-xl font-semibold text-white">Visit Our Store & Get Your Desired IT Product!</h3>
            </div>
         </div>
         </div>
         <h2 className=" w-[600px] p-3 text-xl font-bold text-white bg-[#ef9919] rounded-3xl mr-8">Find the Store</h2>
      </div>
      <div className="main container flex flex-wrap justify-between">
         {
          state.map((item,i)=>(
            <div key={i} className="flex justify-between flex-wrap">
            <div className="single_card w-[260px] p-2 bg-white shadow-xl mb-28 rounded-sm flex flex-col items-center">
              <div className="card_img w-[200px] h-[150px] bg-gray-200"><img src={item.photo_url} alt="" /></div>
               <div className="singleCardContent">
                 <div className="title text-black text-lg font-semibold mt-3">{item.brand}</div>
                 <ul className="list-[circle] mt-4">
                   <li>Id: {item.id}</li>
                   <li>Display: {item.display}</li>
                   <li>processor: {item.processor}</li>
                   <li>ram: {item.ram}</li>
                   <li>charger_capacity: {item.charger_capacity}</li>
                   <li>screen_size: {item.screen_size}</li>
                 </ul>
                 <div className="text-lg text-red-600 mt-4 font-bold">Price: {item.price}</div>
                 <button onClick={()=>handleShow(item)} className="text-xl text-black font-bold bg-yellow-300 w-[200px] p-2 rounded-md mt-3 hover:bg-[#059212] active:bg-yellow-300">Show More</button>
                 <br />
                 <button onClick={()=>handleBuy(item)} className="text-xl text-black font-bold bg-blue-300 w-[200px] p-2 rounded-md mt-3 hover:bg-[#FFD1E3] active:bg-blue-300 mb-6">Buy Now</button>
               </div>
            </div>
         </div>
          ))
         }
      </div>
      <div className="text">
        <h2 className="text-3xl text-black font-bold ml-7 mb-6">Leading Computer, Laptop & Gaming PC Retail & Online Shop in Bangladesh</h2>
        <p className="ml-7 text-[18px]">Technology has become a part of our daily lives, and we depend on tech products daily for a vast portion of our lives. There is hardly a home in Bangladesh without a tech product. This is where we come in. Star Tech Ltd. started as a Tech Product Shop in March 2007. We focus on giving the best customer service in Bangladesh, following our motto of “Customer Comes First.” This is why Star Tech is the most trusted computer shop in Bangladesh today, capturing the loyalty of a large customer base. After a long 16-year journey, Star Tech Ltd. was certified with the renowned  as a recognition for the best Quality Control Management System. As an ISO-certified organization, Star Tech Ltd. is now up to the international standards that specify a Quality Management System (QMS). This Certification denotes that the organization strictly maintains all sorts of regulatory requirements to provide customers with products and services of a global standard.</p>
        <h3 className="text-xl text-black font-semibold ml-7 mt-4 mb-5">Best Laptop Shop in Bangladesh</h3>
        <p className="ml-7 text-[18px]">Star Tech is the most popular Laptop Brand Shop in BD. Star Tech Laptop Shop has the perfect device, whether you are a freelancer, officegoer, or student. Gamers love our collection of Gaming Laptops because we always bring the latest laptops in Bangladesh. As the best laptop shop in BD, a budget is our first concern. We bring the latest Intel Laptop and AMD Laptop under budget for every customer - from starters to expert users. Star Tech is considered the most trusted laptop shop in BD, allowing you to buy the best laptops from top laptop brands in the world. Along with the best laptop brands, our experts provide you with the best buying decisions based on your needs and budget - making Star Tech the most trusted laptop shop in Bangladesh. Star Tech lets you buy an official Apple MacBook Air or MacBook Pro from Apple Store in Bangladesh. Star Tech sells the latest models of the most popular laptop brands, such as - Razer, HP, Dell, Apple MacBook, Asus, Acer, Lenovo, Microsoft Surface, MSI, Gigabyte, Infinix, Walton, Xiaomi MI, Huawei, Chuwi, etc.</p>
      </div>
    </>
  )
}

export default Home