import CkartNavigation from "../../Components/ckartNavigation"
import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {getProducts as listProducts} from "../../Redux/actions/productActions"
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"
import BannerSlider from "./slider"
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
            
        </section>
    </>
}
export default CkartHome;