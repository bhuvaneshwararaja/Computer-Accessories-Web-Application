import {useState,useEffect} from "react"
import AdminNavBar from "../../Components/AdminNavBar"
const ProductView = () => {
    useEffect(() => {
        fetch("/admin/view",{
            headers:{
            method:"GET",
            'Content-Type':"application/json",
           ' Accept':"application/json"
        }})
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })
    },[])
    return <>
        <AdminNavBar />

    </>
}

export default ProductView;