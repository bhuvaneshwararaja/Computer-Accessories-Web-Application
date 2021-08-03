import {useState,useEffect} from "react"
import AdminNavBar from "../../Components/AdminNavBar"
import Product from "../Admin/product"
const ProductView = () => {
    const [data,setData] = useState()
    const [categoryKey,setCategoryKey] = useState()
    useEffect(() => {
        fetch("/admin/view/")
        .then(res => res.json())
        .then((data) => {
           setData(data)
            setCategoryKey(Object.keys(data))
            console.log(data)
            
        })
    },[])
    let count =0
    if(data != undefined && categoryKey != undefined){
        //const {productName,productDescription,productPrice,productCatagory} = data[categoryKey[1]][Object.keys(data[categoryKey[1]])[0]]
       
        
    }
        
    
    return <>
        <AdminNavBar />
        {/* <Product /> */}
        <div></div>
        <section className="relative top-28">
            <div className="h-12 md:w-1/2 2xl:w-1/3 mb-5 mr-5 flex float-right justify-around flex-row-reverse rounded-2xl ">
                <button className="bg-green-600 px-5 py-3 text-white  rounded-2xl float-right shadow-xl">Addproduct</button>
                <select className="bg-white shadow-xl border-2  px-6 py-3 rounded-2xl">
                    <option default hidden>Select range</option>
                    <option>6 per row</option>
                    <option>12 per row</option>
                    <option>18 per row</option>
                    <option>24 per row</option>
                    <option>15 per row</option>
                    <option>All per row</option>
                </select>
                <select className="bg-white shadow-xl border-2 mx-5 px-6 py-3 rounded-2xl">
                    <option default hidden>Select Catagory</option>
                    <option>Adaptors</option>
                    <option>Audio & Video Accessories</option>
                    <option>Board</option>
                    <option>Hardisk</option>
                    <option>Keyboard & Mouse</option>
                    <option>Laptop Skins</option>
                </select>
            </div>
            <section className="w-full overflow-x-auto overflow-y-scroll" style={{"height":"45rem"}}>
            <table className="w-full shadow-xl ">
            <tr>
                {['SINO','Image','productName','Category','Description','Price','Edit','Delete','view'].map((header,index) => {
                    return <th className="text-left p-4 bg-white border-b-2 border-r-2">{header.toUpperCase()}</th>
                })}
              
            </tr>
            {data !== undefined && categoryKey !== undefined ?(
                 categoryKey.map((keys,index) => {
                    const key = Object.keys(data[keys])
                    console.log(key)
                    
                    return <>{
                        key.map((productKey,index) => {
                            const {productName,productDescription,productPrice,productCatagory,productImage} = data[keys][productKey]
                            count++
                                return <tr>
                                    <td className="text-left p-4 bg-white border-b-2 border-r-2">{count} <input type="checkbox" value={data[keys][productKey]}></input></td>
                                    <td className="text-left p-4 bg-white border-b-2 border-r-2"><img src={productImage[0]} alt="" className="w-20"></img></td>
                                    <td className="text-left p-4 bg-white border-b-2 border-r-2">{productName}</td>
                                    <td className="text-left p-4 bg-white border-b-2 border-r-2">{productCatagory}</td>
                                    <td className="text-left p-4 bg-white border-b-2 border-r-2">{productDescription.slice(0,50)+"..."}</td>
                                    <td className="text-left p-4 bg-white border-b-2 border-r-2">{productPrice}</td>
                                    <td className="text-left p-4 bg-white border-b-2 border-r-2"><button className="transition-all duration-500 bg-green-500 px-5 text-white rounded-xl text-xl hover:bg-green-600">Edit</button></td>
                                    <td className="text-left p-4 bg-white border-b-2 border-r-2"><button className="transition-all duration-500 bg-red-500 px-5 text-white rounded-xl text-xl hover:bg-red-600">Delete</button></td>
                                    <td className="text-left p-4 bg-white border-b-2 border-r-2"><button className="transition-all duration-500 bg-yellow-500 px-5 text-white rounded-xl text-xl hover:bg-yellow-600">View</button></td>
                                </tr>
                            })
                        }</>
            })
            ):("")}
        </table>
            </section>
        </section>

    </>
}

export default ProductView;