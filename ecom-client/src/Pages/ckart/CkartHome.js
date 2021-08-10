import CkartNavigation from "../../Components/ckartNavigation"
import {useState,useEffect} from "react"
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"
const CkartHome = () => {
    const [data,setData] = useState()
    const [key,setKey] = useState()
    const [sliderWidth,setSliderWidth] = useState()
    useEffect(() => {

        fetch("/admin/view/")
        .then(res => res.json())
        .then((data) => {
           setData(data.products)
           
            setKey(Object.keys(data.products))  
        })
        function handleResize(){
            setSliderWidth(document.querySelector(".slider").offsetWidth)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener("resize", handleResize)
        }
        
    },[])
    return <>

    <CkartNavigation />
        <section className="w-11/12 h-screen  relative top-52 m-auto">
            <div className="w-inherit bg-white shadow-md rounded-2xl border-2 overflow-x-hidden slider overflo-y-hidden"style={{height:"60%"}} >
                    <div className="h-full flex " style={{width: "300%"}}>
                       {data !== undefined && key !== undefined ?(
                            key.slice(0,3).map((productKey,index) => {
                                const {productName,productDescription,productImage,productPrice} = data[productKey]
                                return <>
                                    <div className={`w-full h-full flex p-4 items-center`} >
                                        <div className="w-1/2 flex flex-col pl-10">
                                        <h1 className="font-logo text-5xl p-2">{productName}</h1>
                                           <p className="font-para p-2 text-2xl">{productDescription}</p>
                                           <h3 className="font-heading p-2 text-xl">{"Rs"+ " " +productPrice}</h3>
                                           <div>
                                           <button className="py-2 px-10 rounded-2xl text-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 text-white hover:shadow-xl transition-all duration-500">OrderNow</button>

                                           </div>
                                        </div>
                                         
                                   
                                    {productImage.map((image,index) => {
                                        return <>
                                        <div>
                                          {index === 0 ?   <img src={`${image}`} className="w-80 border-8 p-3 relative top-10 z-10 bg-white border-indigo-500 rounded-full" alt=""></img>:
                                            <img src={`${image}`} className="w-80 border-8 p-3 border-indigo-500 relative -top-8 z-0 -left-10 rounded-full" alt=""></img>
                                          }
                                      
                                        </div>
                                           
                                        </>
                                    })}
                                     </div>
                                </>
                            })
                       ):("")}
                    </div>
            </div>
            <div className="flex justify-center">
                        <button className="bg-indigo-500 text-5xl rounded-full text-white my-2 mx-5 shadow-xl" onClick={() => {
                                 document.querySelector(".slider").scrollLeft-=sliderWidth
                        }}><IoMdArrowDropleft /></button>
                        <button className="bg-indigo-500 text-5xl rounded-full text-white my-2 mx-5 shadow-xl translate-y-0 shadow-xl" onClick={() => {
                            
                                document.querySelector(".slider").scrollLeft+=sliderWidth
                        }}><IoMdArrowDropright /></button>
            </div>
            
        </section>
    </>
}
export default CkartHome;