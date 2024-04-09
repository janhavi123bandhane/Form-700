import Button from '../ReuseableComponent/Button';
import { IoIosLogOut } from "react-icons/io";
import Logo from '/Images/Logo.jpg'
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <>
        <div className="absolute lg:w-full w-[60rem] md:w-[70rem] h-full mt-10 z-20">
           <div className='flex justify-between'>
           <div>
               <img 
               src={Logo}
               className='lg:w-40 md:w-30 w-20 md:ml-10 ml-4'
               alt="Logo"
               />
           </div>
             
            
           
            <Link to={"/login"}>
              <Button
                 item2="Login"
                 tailwindClasses="lg:pl-10 md:pl-8 pl-6"
               />
            </Link>
          
            
           
           </div>
           <div>
              <hr className='border-black mt-5'></hr>
           </div>
       </div>

     
      
        </>
    )
}
export default Nav;