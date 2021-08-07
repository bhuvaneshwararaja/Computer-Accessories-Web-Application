import {FaShoppingCart,FaUserCircle} from "react-icons/fa"
const UserNav = () => {
    return <>
        <nav className="flex justify-between items-center py-2 px-20 h-14 mt-2 rounded-3xl shadow-lg  fixed w-11/12 bg-white">
            <a href="/user/home" className="font-logo text-2xl" alt="">C-KART</a>
            <ul className="flex justify-around w-1/2 font-heading items-center text-2xl">
                <li className="bg-gradient-to-r hover:from-green-400 rounded-xl px-2 transition-all duration-500">
                    <a href="/user/home" alt="">Home</a>
                </li>
                <li className="bg-gradient-to-r hover:from-green-400 rounded-xl px-2 transition-all duration-500">
                    <a href="/user/home" alt="">Category</a>
                </li>
                <li className="bg-gradient-to-r hover:from-green-400 rounded-xl px-2 transition-all duration-500">
                    <a href="/user/home" alt="">support</a>
                </li>
                <li>
                    <a href="/user/home" alt=""><FaShoppingCart /></a>
                </li>
                <li>
                    <a href="/user/home" alt=""><FaUserCircle /></a>
                </li>
                <li>
                    <button className="bg-green-400 text-white px-2 rounded-xl hover:bg-green-600 transition-all duration-500 ">SignIn</button>
                </li>
            </ul>
        </nav>
    </>
}

export default UserNav;