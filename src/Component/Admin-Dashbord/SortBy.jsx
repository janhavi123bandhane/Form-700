import React, {  useState,useRef,useEffect} from 'react';

function SearchForm({ onSearch }) {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contentVisible, setContentVisible] = useState(true);
  const optionsRef = useRef(null);

  const handleToggleContent = () => {
    setContentVisible(!contentVisible);
  };
  
  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setContentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


 

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const searchData = { userId, name, phoneNumber, email };
    // Pass the search data to the parent component to perform the search action
    onSearch(searchData);
  };

  return (
    <div className={` mt-[40rem] flex justify-center  absolute font-Roboto ${
        contentVisible ? "" : "hidden"}`}
        ref={optionsRef}
        >
        <div className='bg-white w-[15rem] px-6 py-3 rounded-lg shadow-2xl'>
      <h2 className="text-xl font-semibold mb-4">Sort By</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="userId" className="block mb-1">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-1">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-[#EA5455] text-white py-2 rounded-md ">
          Search
        </button>
      </form>
      </div>
    </div>
  );
}

export default SearchForm;
