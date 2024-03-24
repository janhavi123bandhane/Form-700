// TableComponent.js
import React from 'react';
import AdminTable from '../ReuseableComponent/AdminTable';

const TableComponent = () => {
  return (
    <div className="lg:w-full w-[60rem] md:w-[70rem] h-[100rem]">
      <table className="lg:w-full w-[60rem] md:w-[70rem]">
        <thead>
          <tr className="bg-gray-200 h-24">
            <th className="border border-gray-400 px-2 py-2 w-24">Sr.no</th>
            <th className="border border-gray-400 px-4 py-2 w-60">Name</th>
            <th className="border border-gray-400 px-4 py-2 w-96">Email</th>
            <th className="border border-gray-400 px-4 py-2 w-60">Phone No.</th>
            <th className="border border-gray-400 px-4 py-2 w-52">User Id</th>
            <th className="border border-gray-400 px-4 py-2 w-52">Password</th>
            <th className="border border-gray-400 px-4 py-2">Function</th>
          </tr>
        </thead>
        <tbody>
            <AdminTable
            item1={""}
            item2={""}
            item3={""}
            item4={""}
            item5={""}
            item6={""}
            ></AdminTable>
       
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
