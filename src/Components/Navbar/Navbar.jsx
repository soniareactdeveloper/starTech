import { CiGift } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
      <div className='p-3 bg-[#081621]'>
            <div className="container">
                <div className="menu_row flex justify-between items-center gap-2">
                    <div className="logo_col p-1 "><img src="https://www.startech.com.bd/image/catalog/logo.png" alt="Logo"/></div>
                    <div className="input">
                      <input className="p-2 w-[450px] rounded-md text-xl border-0 outline-none" type="text" placeholder="Search"/>
                    </div>
                    <div className="menu_card flex gap-5">
                       <div className="cardContent flex gap-2 items-center">
                        <CiGift className="text-[#EF4A23] text-4xl" />
                        <div className="menuText">
                          <h2 className="text-lg text-white font-bold">Offers</h2>
                          <p className="text-[#848B90] text-sm font-semibold">Latest Offer</p>
                        </div>
                       </div>
                       <div className="cardContent flex gap-2 items-center">
                        <AiOutlineThunderbolt className="text-[#EF4A23] text-4xl" />
                        <div className="menuText">
                          <h2 className="text-lg text-white font-bold">Eid Salami</h2>
                          <p className="text-[#848B90] text-sm font-semibold">Special Deals</p>
                        </div>
                       </div>
                       <div className="cardContent flex gap-2 items-center">
                        <FaUserAlt className="text-[#EF4A23] text-2xl" />
                        <div className="menuText">
                          <h2 className="text-lg text-white font-bold">Accounts</h2>
                          <p className="text-[#848B90] text-sm font-semibold">Register or Login</p>
                        </div>
                       </div>
                       <div className="button">
                        <button className="w-[160px] p-3 text-white text-lg font-bold bg-[#29459A] rounded-lg scroll-pl-6">PC Builder</button>
                       </div>
                    </div>
                </div>
            </div>
      </div>
      <nav className="p-4 shadow-xl">
        <ul className="flex items-center justify-between gap-3 font-semibold text-black">
          <li><a href="#">Desktop</a></li>
          <li><a href="#">Laptop</a></li>
          <li><a href="#">Component</a></li>
          <li><a href="#">Monitor</a></li>
          <li><a href="#">Ups</a></li>
          <li><a href="#">Phone</a></li>
          <li><a href="#">Tablet</a></li>
          <li><a href="#">Office Equipment</a></li>
          <li><a href="#">Camera</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Networking</a></li>
          <li><a href="#">Software</a></li>
          <li><a href="#">Server and Store</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Gadget</a></li>
          <li><a href="#">Gaming</a></li>
          <li><a href="#">Tv</a></li>
          <li><a href="#">Appliance</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar