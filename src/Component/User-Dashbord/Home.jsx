import HomeButton from "../ReuseableComponent/HomeButton";
import { TiHomeOutline } from "react-icons/ti";

function Home() {
  const item1Classes1 = "bg-[#EA5455]";
  const item2Classes2 = "bg-[#0088cc]";

  const item1Classes3 = "bg-[#9747FF]";
  const item2Classes4 = "bg-[#83DA65]";

  const item1Classes5="bg-[#83DA65] ";
  const item2Classes6="bg-[#FDD819]"

  return (
    <>
      <div className="lg:w-full w-[50rem] md:w-[70rem]">
        <div className="bg-[#D9D9D9] lg:w-full w-[60rem] md:w-[70rem] h-[3rem] font-Roboto flex text-black text-lg pt-2">
          &nbsp;&nbsp;<TiHomeOutline className=" mt-[0.2rem] "></TiHomeOutline>
          &nbsp;Home
        </div>
        <div className="flex justify-around mt-20"> 
          <HomeButton
            item1="45"
            item2="Total Form"
            item1Classes={item1Classes1}
            item2Classes={item2Classes2}
          />
          <HomeButton
            item1="45"
            item2="Submit Form"
            item1Classes={item1Classes3}
            item2Classes={item2Classes4}
          />
          <HomeButton
            item1="45"
            item2="Save Form"
            item1Classes={item1Classes5}
            item2Classes={item2Classes6}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
