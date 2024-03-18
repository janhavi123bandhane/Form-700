import Button from '../../ReuseableComponent/Button';
import { IoIosLogOut } from "react-icons/io";
import Logo from '/Images/Logo.jpg'

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
           
           {/* <div className='lg:w-[8.5rem] lg:h-14 md:w-[6.5rem] md:h-12 w-[5rem] h-8 bg-[#FEB692] text-center hover:bg-[#FDD819] md:mr-10 mr-4 rounded-lg transition duration-300'>
           <button className='mt-2 md:text-[20px] text-[13px] font-semibold text-white font-Roboto'>Login</button>
           </div> */}
           <Button
           item2={"Login"}
           tailwindClasses="lg:pl-10 md:pl-8 pl-6"
           ></Button>
            
           </div>
           <div>
              <hr className='border-black mt-5'></hr>
           </div>
       </div>

     
      
        </>
    )
}
export default Nav;