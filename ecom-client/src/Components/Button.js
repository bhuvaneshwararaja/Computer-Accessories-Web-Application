const Button = (props) => {
    const {btnName} = props;
    return <> <button className="border-transparent rounded-xl transition-all duration-500 text-2xl pl-3 pr-3 bg-green-600 text-white hover:bg-green-700 m-3">{btnName}</button></>
}
export default Button;