import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {getProducts as listProducts} from "../../Redux/actions/productActions"
import { IoIosEye,IoIosCart,IoIosHeart,IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"
const CarouselCards  = ({category,data,keyVal,keys}) => {
    const [sliderWidth,setSliderWidth] = useState()
   
    const specifiCategory = keyVal.filter((val,index) => {
        return data[val].productCatagory === category
    })
    useEffect(() => {
      
    setSliderWidth(document.querySelector(".slider").offsetWidth)
    function handleResize(){
        setSliderWidth(document.querySelector(".slider").offsetWidth)
    }
    window.addEventListener('resize', handleResize)
    return _ => {
        window.removeEventListener("resize", handleResize)
    }
    
},[sliderWidth])
    
    return <>
   <div className="w-11/12 m-auto mt-5 relative  overflow-hidden card-slider" style={{height:"auto"}}>
   <div className="flex h-ful" style={{width:"2720px"}}>
    {specifiCategory.slice(0,10).map((val,index) => {
    const {productName,productPrice,offer,quantity,productImage,subCategory} = data[val]

         return   <div className="w-64 h-auto p-4 border-2 rounded-2xl shadow-md m-2" >
            <div>
                <img src={productImage[0]} alt="" className="w-48 h-48 transition-all duration-900" onMouseOver={(e) => { 
                    e.target.src = productImage[1]
                }} onMouseLeave={(e) => {
                    e.target.src=productImage[0]
                }}></img>
            </div>
           <div>
           <h1 className="font-para text-xl text-center font-bold">{productName.slice(0,10)+".."}</h1>
            <h2 className="font-para  text-center font-500">{subCategory}</h2>
            <h3 className="font-para line-through">M.R.P : {productPrice}</h3>
            <h4 className="font-para text-xl font-bold">Price : {Math.round(productPrice-(productPrice *offer)/100)} </h4>
            <h5 className="font-para text-gray-500 ">You saved Rs.{Math.round((productPrice *offer)/100)}({offer}%)</h5>
           </div>
            <div className="flex btns justify-center mt-2 ">
                <button className="bg-indigo-500 px-2 py-1 text-xl text-white m-1"><IoIosHeart /></button>
                <button className="bg-indigo-500 px-2 py-1 text-xl text-white m-1"><IoIosCart /></button>
                <button className="bg-indigo-500 px-2 py-1 text-xl text-white m-1"><IoIosEye /></button>
            </div>
        </div>
       })}
    </div>
    
   </div>
   <div className="w-11/12 m-auto relative -top-64">
 <button className="text-5xl relative -left-10 float-left rounded-full text-black bg-white my-2 mx-5 shadow-xl hover:bg-indigo-700 hover:text-white transition-all duration-500" onClick={() => {
                                 document.querySelectorAll(".card-slider")[keys].scrollLeft-=sliderWidth
                        }} ><IoMdArrowDropleft /></button>
                        <button className="bg-white relative -right-10 float-right text-black text-5xl rounded-full my-2 mx-5 shadow-xl translate-y-0 shadow-xl hover:bg-indigo-700 hover:text-white transition-all duration-500" onClick={() => {
                            
                                document.querySelectorAll(".card-slider")[keys].scrollLeft+=sliderWidth
                        }}><IoMdArrowDropright/></button>
 </div>
 
     
    </>
}

export default CarouselCards;

