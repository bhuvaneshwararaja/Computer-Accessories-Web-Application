import {useState,useEffect} from "react"
import AdminNavBar from "../../Components/AdminNavBar"
const ProductView = () => {
    useEffect(() => {
        fetch("/admin/view/")
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