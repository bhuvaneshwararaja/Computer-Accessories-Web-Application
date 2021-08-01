import {Link} from 'react-router-dom'
import {RiDashboardLine,RiOrderPlayLine,RiProductHuntLine,RiQuestionnaireLine,RiFeedbackLine} from "react-icons/ri"
const AdminSideBar = () =>{
    return<>
        <aside className="text-black  font-body flex flex-col h-screen fixed w-40 text-xl ">
            <Link to="#" className="text-3xl m-3 text-center">OShop</Link>
            <ul className="flex rounded-3xl flex-col h-3/6 justify-evenly  relative top-1/4 bg-white text-black shadow-xl">
                <li >
                    <Link to="#" class="p-3 transition-all duration-500 flex items-center border-transparent border-r-4 hover:border-green-900 hover:bg-green-100 "><RiDashboardLine className="mr-2" /> Dashboard</Link>
                </li>
                <li>
                    <Link to="#" className="p-3 transition-all duration-500 flex items-center  border-transparent border-r-4 hover:border-green-900 hover:bg-green-100"><RiOrderPlayLine className="mr-2"  />Orders</Link>
                </li>
                <li>
                    <Link to="#" className="p-3 transition-all duration-500 flex items-center border-transparent border-r-4 hover:border-green-900 hover:bg-green-100" ><RiProductHuntLine className="mr-2"  /> Product</Link>
                </li>
                <li>
                    <Link to="#" className="p-3 transition-all duration-500 flex items-center border-transparent border-r-4 hover:border-green-900 hover:bg-green-100"><RiFeedbackLine className="mr-2"  /> Reviews</Link>
                </li>
                <li>
                    <Link to="#" className="p-3  transition-all duration-500 flex items-center border-transparent border-r-4 hover:border-green-900 hover:bg-green-100"><RiQuestionnaireLine className="mr-2"  /> Queries</Link>
                </li>
            </ul>
        </aside>
    </>
}

export default AdminSideBar;