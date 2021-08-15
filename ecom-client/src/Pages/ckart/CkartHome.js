import CkartNavigation from "../../Components/ckartNavigation"
import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {getProducts as listProducts} from "../../Redux/actions/productActions"
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"
import BannerSlider from "./slider"
import FeaturedCard from "../../Components/featured/featuredCard"
const CkartHome = () => {
    
    const dispatch = useDispatch()
    const getProductList =useSelector((state) => state.getProduct)
   
    const {loading,products} = getProductList
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])
     


    return <>

    <CkartNavigation />   
        <section className="w-11/12 h-screen  relative top-52 m-auto">
        {loading === false ? (

            <BannerSlider product={products.products}/>
        ) :""}
        <h1 className="font-heading text-center mt-3 text-4xl">Featured Catagory</h1>
        <FeaturedCard image={["Adaptors","Audio&VideoAccessories","Components","Keyboard&Mouse","LaptopAccessories","StorageDevices"]} />
        </section>
    </>
}
export default CkartHome;