const FormInput=({item1})=>{
    return(
        <>
         <div className="flex flex-col mb-2">
                <label >{item1}</label>
                <input
                  type="text"
                  id="firstName"
                  className="border border-black p-2 rounded-md"
                ></input>
              </div>
        </>
    )
}
export default FormInput;