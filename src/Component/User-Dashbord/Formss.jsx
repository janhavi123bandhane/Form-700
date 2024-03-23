import FormInput from "../ReuseableComponent/FormInput";

function Formss() {
  return (
    <>
      <div className="border-black border-spacing-3 flex justify-center lg:w-full w-[60rem] md:w-[70rem]">
        <div className="border border-black mt-4 lg:h-[50rem] lg:w-[60rem] md:w-[60rem] md:h-[50rem] h-[50rem] md:p-0 ">
          {/* view nav */}
          <div className="bg-[#817d7d] lg:w-[60rem] md:w-[60rem] w-[50rem] h-11 pl-12 md:mt-0">View Form [1]</div>

          {/* form content */} 
          <div className="flex justify-center mt-10 space-x-20">
            <div className="w-[20rem] h-[7rem] flex flex-col justify-between mr-4">
              {/* Column 1 */}
              <FormInput item1={"Fisrt Name"}></FormInput>
              <FormInput item1={"Email Id:"}></FormInput>
              <FormInput item1={"Phone No."}></FormInput>
              <FormInput item1={"Ac No."}></FormInput>
              <FormInput item1={"Address:"}></FormInput>
              <FormInput item1={"State:"}></FormInput>
              <FormInput item1={"Date Of Birth:"}></FormInput>
              <FormInput item1={"License State:"}></FormInput>
            </div>

            <div className="w-[20rem] h-[7rem] flex flex-col justify-between">
              {/* Column 2 */}
              <FormInput item1={"Last Name:"}></FormInput>
              <FormInput item1={"SSN:"}></FormInput>
              <FormInput item1={"Bank Name:"}></FormInput>
              <FormInput item1={"Loan Amount:"}></FormInput>
              <FormInput item1={"City:"}></FormInput>
              <FormInput item1={"Zip:"}></FormInput>
              <FormInput item1={"License Number:"}></FormInput>
              <FormInput item1={"IP Address:"}></FormInput>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Formss;
