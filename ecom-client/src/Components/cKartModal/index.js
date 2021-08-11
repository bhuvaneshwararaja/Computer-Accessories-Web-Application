const CKartUserModal = ({stateChanger}) => {
    return <> 
    <div  className="w-full h-screen bg-red-900 fixed z-50 " style={{background:"rgba(0,0,0,.5"}}>
            <div className="w-1/2 h-3/4 bg-white m-auto relative top-40">
                <form>
                <table>
                   <tr>
                       <td>Firstname</td>
                       <td><input type="text" className="border-2"></input></td>
                   </tr>
                   <tr>
                       <td>Email</td>
                       <td><input type="Email" className="border-2"></input></td>
                   </tr>
                   <tr>
                       <td>Password</td>
                       <td><input type="password" className="border-2"></input></td>
                   </tr>
                   <tr>
                       <td>Confirm-Password</td>
                       <td><input type="password" className="border-2"></input></td>
                   </tr>
                   <tr>
                       <td>Mobile Number</td>
                       <td><input type="text" className="border-2"></input></td>
                   </tr>
                   {/* field for otp verification */}
               </table>
               <button>Register</button>
                </form>
              
            </div>
    </div>
       
    </>
}

export default CKartUserModal;