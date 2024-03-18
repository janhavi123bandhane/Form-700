import { useState } from "react";
import Logo from "/Images/Logo.jpg";
import { LuFolderInput } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import Button from "../ReuseableComponent/Button";
import { IoIosLogOut } from "react-icons/io";
import { FaSortAmountDownAlt } from "react-icons/fa";
import Input from "./Input";
import SearchForm from "./SortBy";

function Nav03() {
  let [Incount, setInCount] = useState(false);
  let [Sort,setSort]=useState(false);

  let New = () => {
    setInCount(!Incount);
  };
  let New1=()=>{
    setSort(!Sort);
  }
  return (
    <>
      <div>
        <nav className="lg:w-full w-[60rem] md:w-[70rem] bg-[#101D30] h-[6rem] font-Roboto ">
          <div className="text-center text-white text-2xl font-bold">ADMIN</div>
          <div className="flex justify-between ml-20 mr-20">
            {/* left side */}

            <div className="flex space-x-20">
              <img src={Logo} className=" w-28"></img>
              <div
                className="hover:bg-white w-[8rem] h-[3rem]  text-center flex justify-center text-xl pt-2 hover:text-[#EA5455] rounded-lg text-white cursor-pointer"
                onClick={New}
              >
                <LuFolderInput className="mt-1"></LuFolderInput>
                Input
              </div>
              {Incount && <Input></Input>}
            </div>

            {/* right side */}

            <div className="flex items-center mt-[-2rem]">
              <FaSearch className="text-white text-3xl mr-4" />
              <div className="flex flex-col cursor-pointer"
              onClick={New1}
              >
                <FaSortAmountDownAlt className="text-white w-20 h-10 mr-4" />
                <div className="ml-6 text-white">Sort By</div>
              </div>
              {Sort&&<SearchForm />}

              <div className="bg-white lg:w-[8.5rem] lg:h-14 md:w-[6.5rem] md:h-12 w-[5rem] h-8 rounded-lg transition duration-300 md:text-xl text-sm text-center lg:pt-3 md:pt-2 pt-1 text-[#EA5455] font-semibold border-[#EA5455]  border-2 hover:bg-[#EA5455] hover:border-white hover:text-white mr-4">
                Agreement
              </div>
              <Button
                item1={
                  <IoIosLogOut className="lg:text-3xl md:text-2xl text-xl md:ml-3 ml-2" />
                }
                item2={"Logout"}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Nav03;
