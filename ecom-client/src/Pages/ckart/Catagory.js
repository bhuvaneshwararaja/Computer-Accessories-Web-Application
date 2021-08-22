import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import CkartNavigation from "../../Components/ckartNavigation"
import CkartFooter from "../../Components/Footer"
import ProductCards from "../../Components/ProductCards"
import {getProducts as listProducts} from "../../Redux/actions/productActions"


const Catagory = () => {
    const dispatch = useDispatch()
    const getProductList =useSelector((state) => state.getProduct)
   
    const {loading,products} = getProductList
    console.log(products.products)
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])
    return <>
    <CkartNavigation />
        {loading === false ? (<>
            <div className="w-11/12  h-auto mt-32 m-auto flex justify-center flex-wrap ">
            
            {Object.keys(products.products).map((val,index) => {
                return <ProductCards product={products.products[val]} id={val}/>
            })}

            </div>
            <CkartFooter/>
            
        </>):""}
        
    </>
}

export default Catagory;