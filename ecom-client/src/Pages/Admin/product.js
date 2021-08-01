import AdminSideBar from "../../Components/AdminSideBar"
import Button from "../../Components/Button"

const Product = () => {
    return <>
        <AdminSideBar />
        <section className="relative left-48 h-screen w-4/5">
            <Button btnName="LogOut" className="float-right"/>
        </section>
    </>
}
export default Product;