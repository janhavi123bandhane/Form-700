import { TiHomeOutline } from "react-icons/ti";
import { PiListDashesBold } from "react-icons/pi";
import UserTable from "../ReuseableComponent/UserTable";
import UserFormNav from "../ReuseableComponent/UserFormNav";
import UserCom from "../ReuseableComponent/UserCom";

function SubmitForm() {
  return (
    <>
      <div className="font-Roboto lg:w-full w-[60rem] h-[100rem] md:w-[70rem]">

        <UserFormNav item1={" Home > Submit Form"}></UserFormNav>

        <div className="text-3xl ml-10 m-10 text-[#666363]">
          All Submit Form
        </div>

       <UserCom
       item1={"Submit Form List"}
       ></UserCom>

        {/* Table */}
        <table className="border-collapse border border-gray-300 w-full  mt-10">
          <tr className="bg-[#b4b1b1] text-center font-bold text-2xl">
            <td className="border border-gray-300 px-4 py-2 w-1/3">
              Form Submitted
            </td>
            <td className="border border-gray-300 px-4 py-2 w-1/3">Status</td>
            <td className="border border-gray-300 px-4 py-2 w-1/3">Action</td>
          </tr>
          <UserTable
            item1={"8978"}
            item2={"Submit"}
            item3={"View Form"}
          ></UserTable>
        </table>
        
      </div>
    </>
  );
}

export default SubmitForm;
