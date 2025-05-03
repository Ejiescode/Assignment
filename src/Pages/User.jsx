import { useState } from "react";

function User () {
    // const [name, setName] = useState("Joy Ejiro");
    // const [country, setCountry] = useState ("Canada")

    // const updateName = () => {
    //     setName ("Hope");
    // };
    // const updateCountry = () => {
    //     setCountry ("South Africa");
    // };
    const [count, setCount] = useState (0);
    function Add () {
       setCount (count + 1);
    }
    function Remove () {
        if (count > 0) {
            setCount (count - 1);
        }
        }
    function Reset () {
        setCount (0);
    }
    return (
    <div className="p-[200px] w-fit flex gap-3]">
        {/* <button onClick={updateName}>change name</button>
        <p className="text-2xl">{country}</p>
        <p className="text-4xl p-[200px]">{name}</p>
        <button onClick={updateCountry}>Change country</button> */}
        <button onClick={Remove} className="px-6 bg-red-400 hover:bg-red-200 py-2 text-white shadow-lg font-semibold">
            Remove</button>
        <span className="text-3xl font-bold">{count}</span>
        <button onClick={Add} className="px-6 bg-green-400 hover:bg-green-200 
        py-2 text-white shadow-lg font-semibold">
         Add</button>
         {count > 0 ? (
         <button onClick={Reset} className="px-6 bg-green-400 hover:bg-blue-200 py-2 text-white shadow-lg rounded-md font-semibold">
         Reset</button>
           ): (
         <button onClick={Reset} className="px-6 ml-[10px]
         bg-green-400 hover:bg-blue-200 py-2
          text-white shadow-lg rounded-md font-semibold">
        Not set</button>
           )}
    </div>
        )
};
export default User 