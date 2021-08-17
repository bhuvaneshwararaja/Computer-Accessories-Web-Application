import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {getProducts as listProducts} from "../../Redux/actions/productActions"

const CarouselCards  = ({category,data,keyVal}) => {
   
    const specifiCategory = keyVal.filter((val,index) => {
        return data[val].productCatagory === "Audio & Video accessories"
    })
    

    console.log(specifiCategory)
    return <>
        hi
    </>
}

export default CarouselCards;