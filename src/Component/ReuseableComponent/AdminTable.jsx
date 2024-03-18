import { FaRegSquare } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
let AdminTable = ({ item1, item2, item3, item4, item5, item6 }) => {
  return (
    <>
      <tr className=" h-24 text-center">
        <td className="border border-gray-400 px-4 py-2 w-24">{item1}</td>
        <td className="border border-gray-400 px-4 py-2">{item2}</td>
        <td className="border border-gray-400 px-4 py-2">{item3}</td>
        <td className="border border-gray-400 px-4 py-2">{item4}</td>
        <td className="border border-gray-400 px-4 py-2">{item5}</td>
        <td className="border border-gray-400 px-4 py-2">{item6}</td>
        <td className="border border-gray-400 px-4 py-2">
          <div className=" space-x-10">
            <select className="border  px-2 py-1 rounded hover:text-[#EA5455]">
              <option value="option1" className="">
                Option 1
              </option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="border  px-2 py-1 rounded hover:text-[#EA5455]">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="flex justify-center space-x-12 mt-5 ml-20">
            <button className="flex hover:text-[#EA5455] border  px-2 py-1 "><FaRegSquare className="mt-[0.3rem] bg-slate-200 "></FaRegSquare> Approve</button>
            <button className="flex hover:text-[#EA5455] border  px-6 py-1"><FaRegSquare className="mt-[0.3rem] bg-slate-200 "></FaRegSquare>Block</button>
            <RiDeleteBinLine className="text-2xl mt-1 hover:text-[#EA5455]"></RiDeleteBinLine>
          </div>
        </td>
      </tr>
    </>
  );
};
export default AdminTable;
