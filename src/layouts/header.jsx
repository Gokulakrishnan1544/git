import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosNotifications } from "react-icons/io";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <>
        <div className="bg-dark text-white p-3">
          <nav className="container d-flex justify-content-between align-items-center px-2 "  >
            <FaBars/>
            <input type="text" placeholder="Search..." className='form-control' style={{ width: "40%" }} />
          
            <div className='text-white'>
              <IoIosNotifications size={35} />
              </div>
            </nav>
            </div>

        

        
    
      




    </>
  )
}
export default Header;