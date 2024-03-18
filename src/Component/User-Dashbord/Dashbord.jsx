import { TiHomeOutline } from "react-icons/ti";
import { HiBriefcase } from "react-icons/hi2";
import { SiGoogleforms } from "react-icons/si";
import { AiOutlineForm } from "react-icons/ai";
import { LiaWpforms } from "react-icons/lia";
function Dashbord(){
    return(
        <>
        <div className="bg-[#101D30] md:w-[15rem] w-[10rem] h-[53rem] text-white font-semibold space-y-16 font-Inter pt-20 md:text-lg text-[0.9rem]">

           <div className="flex justify-center hover:bg-[#FEB692] h-14 pt-5 transition duration-300">
              <TiHomeOutline></TiHomeOutline>
              <h1 className="mt-[-0.2rem]">Dashbord</h1>
           </div>

           <div className="flex justify-center hover:bg-[#FEB692] h-14 pt-5 transition duration-300">
              < HiBriefcase></HiBriefcase>
              <h1 className="mt-[-0.2rem]">Current Work Load</h1>
            </div>
           <div className="flex justify-center  hover:bg-[#FEB692] h-14 pt-5 transition duration-300">
              <AiOutlineForm></AiOutlineForm>
              <h1 className="mt-[-0.2rem]">Save Form</h1>
           </div>
           <div className="flex justify-center  hover:bg-[#FEB692] h-14 pt-5 transition duration-300">
              <SiGoogleforms></SiGoogleforms>
              <h1 className="mt-[-0.2rem]">Submit Form</h1>
            </div>
           <div className="flex justify-center  hover:bg-[#FEB692] h-14 pt-5 transition duration-300">
           <LiaWpforms></LiaWpforms>
           <h1 className="mt-[-0.2rem]">Agreement</h1>
           </div>
        </div>
        </>
    )
}
export default Dashbord;