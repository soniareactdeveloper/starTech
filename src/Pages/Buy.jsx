import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Buy = () => {
  const product= useSelector((state)=>state.counter.value)
  const navigate = useNavigate()

  
  const handleButton = ()=>{
     navigate('/confirm')
  }
  

  return (
    <>
     <div className="flex justify-center items-center">
        <div className="main w-[800px] p-6 rounded-lg mt-24 bg-white flex shadow-xl gap-12 mb-8">
            <div className="productImg w-[300px] h-[200px] shadow-md mt-6"><img src={product.photo_url} alt="product img" /></div>
            <div className="description">
                <h2 className="text-md font-bold ">{product.description}</h2>
                <h2 className="text-md font-bold ">Ram: {product.ram}</h2>
                <h2 className="text-md font-bold ">Processor: {product.processor}</h2>
                <h2 className="text-md font-bold ">Color: {product.color}</h2>
                <h2 className="text-md font-bold ">Size: {product.size}</h2>
                <h2 className="text-md font-bold ">Display: {product.display}</h2>
                <h2 className="text-xl font-bold mt-9 text-red-800">Price:{product.price}  x1</h2>
                <button onClick={handleButton} className="w-[200px] p-3 bg-blue-500 text-white mt-16 rounded-md text-lg font-semibold hover:bg-amber-300 hover:text-black active:bg-blue-500 active:text-white">Confirm</button>
            </div>
         </div>
      </div> 
    </>
  )
}

export default Buy