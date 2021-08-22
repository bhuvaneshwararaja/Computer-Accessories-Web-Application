import CkartNavigation from "../../Components/ckartNavigation"
import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {getProducts as listProducts} from "../../Redux/actions/productActions"
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"
import { RiMoneyDollarCircleLine,RiTruckLine,Ri24HoursLine,RiSecurePaymentLine } from "react-icons/ri";
import BannerSlider from "./slider"
import FeaturedCard from "../../Components/featured/featuredCard"
import CarouselCards from "../../Components/Carousel"
import CkartFooter from "../../Components/Footer"
const CkartHome = () => {
    
    const dispatch = useDispatch()
    const getProductList =useSelector((state) => state.getProduct)
   
    const {loading,products} = getProductList
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])
     


    return <>

    <CkartNavigation />   
        <section className="w-full h-screen  relative top-52 m-auto">
        {loading === false ? (  
            <>
            <BannerSlider product={products.products}/>
            <h1 className="font-heading text-center mt-3 text-4xl">Featured Catagory</h1>
            <FeaturedCard image={["Adaptors","Audio&VideoAccessories","Components","Keyboard&Mouse","LaptopAccessories","StorageDevices"]} />
            {["Audio & Video accessories","Components"].map((catagory,index) => {
                return <div className="mt-10">
                          <h1 className="font-heading w-11/12 m-auto text-center text-2xl">{catagory}</h1>
                          <CarouselCards keys={index} data={products.products} category={catagory} keyVal={Object.keys(products.products)}/>
                          </div>
            })}
  
         
            </>
        ) :""}
        <section className="w-11/12 h-auto border-t-2 border-b-2 mt-10 m-auto">
            <ul className="flex w-full justify-around items-center  mt-4 mb-4">
                <li className="p-2 text-xl w-full">
                    <RiTruckLine className="text-4xl w-full mb-2 text-indigo-700"/>
                    <h3 className="font-para text-gray-500 text-center">Free Shipping over Rs.1000</h3>
                </li>
                <li className="p-2 border-l-2 text-xl w-full">
                    <RiMoneyDollarCircleLine className="text-4xl w-full mb-2 text-indigo-700" />
                    <h3 className="font-para text-gray-500 text-center">100% money back guaranteed</h3>
                </li>
                <li className="p-2 border-l-2 text-xl w-full">
                    <RiSecurePaymentLine className="text-4xl w-full mb-2 text-indigo-700"/>
                    <h3 className="font-para text-gray-500 text-center">Fast & Secure Payment</h3>
                </li>
                <li className="p-2 border-l-2 text-xl w-full">
                    <Ri24HoursLine className="text-4xl w-full mb-2 text-indigo-700"/>
                    <h3 className="font-para text-gray-500 text-center">24/7 Assistant</h3>
                </li>
            </ul>
        </section>

        <CkartFooter />
        </section>

       
        
    </>
}
export default CkartHome;