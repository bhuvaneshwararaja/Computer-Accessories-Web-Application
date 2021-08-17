import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {getProducts as listProducts} from "../Redux/actions/productActions"

const CarouselCards  = ({category}) => {
    const dispatch = useDispatch()
    const getProductList = useSelector((state) => state.getProduct)
    return <>
        hi
    </>
}

export default CarouselCards;