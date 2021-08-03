import {useState} from "react";
import AdminNavBar from "../../Components/AdminNavBar"

const Product = () => {
    const catagories = ["Adaptors","Audio & Video accessories","Keyboard & Mouse","Hardisk","Boards","Laptop Skins"]
    const productDetails = {
        productName:"",
        productDescription:"",
        productPrice:"",
        productCatagory:"",
        productImage:[]
    }
    const [product,setProduct] = useState(productDetails)
    const HandleInputChange = (e) => {
            const {name,value} = e.target;
            console.log(e.target)
            setProduct({
                ...product,
                [name]:value
            })
           
            console.log(product)
    }

    const uploadCloudinary = async (e) =>{
        const files = e.target.files[0]

                    let formData = new FormData();
                    formData.append('file',files);
                    formData.append('upload_preset','o2e0xoco')
                    for (var key of formData.entries()) {
                        console.log(key[0] + ', ' + key[1]);
                    }
                 await fetch("https://api.cloudinary.com/v1_1/da8ygcsci/image/upload",{
                        method:"POST",
                        body:formData
                    }).then((res) => {return res.json()})
                    .then((res) => {
                        
                        setProduct({
                            ...product,
                            "productImage":[...product.productImage,res.secure_url]
                        })
                        e.target.classList.add("bg-green-100")
                    })
        }
    return <>
        <AdminNavBar />
        <section className="w-full h-screen flex justify-center">
            <form className=" flex flex-col md:w-9/12 2xl:w-1/2 my-auto bg-white h-4/5 justify-evenly shadow-xl">
            <div className="flex flex-row justify-around">
                <label className="w-40 text-2xl">ProductName</label>
                <input type="text" name="productName" className="transition-all duration-500 focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" placeholder="Product Name"onChange={HandleInputChange}></input>
                </div>
                
                
                <div className="flex flex-row justify-around">
                <label className="w-40 text-2xl">ProductCatagory</label>
                <select className="transition-all duration-500 bg-white focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" name="productCatagory" onChange={HandleInputChange}>
                    <option value="" default hidden>select catagory</option>
                    {catagories.map((data,index) => {
                        return <option key={index} value={data}>{data}</option>
                    })}
                </select>
                </div>
                
               
                <div className="flex flex-row justify-around" >

                <label className="w-40 text-2xl">ProductDescription</label>
                <textarea type="text" name="productDescription" className="transition-all duration-500 focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700 resize-none" placeholder="Product description"onChange={HandleInputChange}></textarea>
                </div>
                <div className="flex flex-row justify-around">
                <label className="w-40 text-2xl">ProdutPrice</label>
                <input type="text" name="productPrice" className="transition-all duration-500 focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" placeholder="product price" onChange={HandleInputChange}></input>
                </div>
                    <div className="flex flex-row justify-around">
                    <label className="w-40 text-2xl">ProductImage</label>
                <div className="flex flex-col">
                <input type="file" name="productImage" onChange={uploadCloudinary} className="w-96 p-2 "></input>
                <input type="file" name="productImage" onChange={uploadCloudinary} className="w-96 p-2 "></input>
                </div>
                </div>
                <div className="text-center">
               <button className="border-transparent rounded-xl transition-all duration-500 text-2xl px-3 bg-green-600 text-white hover:bg-green-700 m-3 " onClick={(e) => {
                   e.preventDefault()
                   fetch("/admin/add/",{
                    'method':"POST",
                       headers:{
                            
                           'Content-Type':"application/json",
                           'accept':"application/json"
                       },
                       body:JSON.stringify({test:product})
                   })
                   .then(res => res.json())
                   .then((data) => {
                       console.log(data)
                       product.productImage = []
                       document.querySelector("form").reset();
                   })
               }}>Save</button>
               <button className="border-transparent rounded-xl transition-all duration-500 text-2xl px-3 bg-red-600 text-white hover:bg-red-700 m-3 ">Cancel</button>
                </div>
                 
               
            </form>
        </section>
    </>
}
export default Product;