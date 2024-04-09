import { Link } from "react-router-dom";
import UserCom from "../ReuseableComponent/UserCom";
import UserFormNav from "../ReuseableComponent/UserFormNav";
import UserTable from "../ReuseableComponent/UserTable";

function SaveForm() {
  return (
    <>
      <div>
        <div className="font-Roboto lg:w-full w-[60rem] h-[100rem] md:w-[70rem]">
          <Link to={"/user"}><UserFormNav item1={" Home > Save Form"}></UserFormNav></Link>

          <div className="text-3xl ml-10 m-10 text-[#666363]">
            All Save Form
          </div>

          <UserCom item1={"Save Form List"}></UserCom>


          <table className="border-collapse border border-gray-300 w-full  mt-10">
            <tr className="bg-[#b4b1b1] text-center font-bold text-2xl">
              <td className="border border-gray-300 px-4 py-2 w-1/3">Form Save</td>
              <td className="border border-gray-300 px-4 py-2 w-1/3">Status</td>
              <td className="border border-gray-300 px-4 py-2 w-1/3">Action</td>
            </tr>
            <UserTable
            item1={"12"}
            item2={"2"}
            item3={"2"}
            ></UserTable>
          </table>
        </div>
      </div>
    </>
  );
}
export default SaveForm;
