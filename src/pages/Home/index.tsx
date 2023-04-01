import React, { useState } from "react";
import Button from "../../components/Button";
import LabelInput from "../../components/LabelInput";

const Home = () => {
  const [test, setTest] = useState("");

  function oddNumbers(l: number, r: number) {
    // Write your code here
    let oddArr = [];
    for (let i = l; i <= r; i++) {
      if (!(i % 2 == 0)) {
        oddArr.push(i);
      }
    }
    return oddArr;
  }

  console.log(oddNumbers(1, 5));
  return (
    <div className="h-[1000px]">
      Home
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
      ></input>
      <button className="px-4 py-2 bg-teal-700 rounded text-white font-bold font-roboto uppercase text-xs">
        Test Button
      </button>
      <button className="px-4 py-2 bg-teal-700 rounded text-white font-bold font-roboto uppercase text-sm">
        Test Button
      </button>
      <button className="px-4 py-2 bg-teal-700 rounded text-white font-bold font-roboto uppercase">
        Test Button
      </button>
      <Button variant="text" size="small" onClick={() => console.log("hola")}>
        boton pequeño
      </Button>
      <Button variant="outlined" onClick={() => console.log("hola")}>
        boton mediano
      </Button>
      <Button
        variant="outlined"
        size="large"
        onClick={() => console.log("hola")}
      >
        boton grande
      </Button>
      <div className="w-[560px] border border-red-900 flex flex-col gap-4 p-5">
        {" "}
        <input
          className="border rounded border-red-900 p-2"
          placeholder="user"
        />
        <input
          className="border rounded border-red-900 p-3"
          placeholder="password"
        />
        <LabelInput
          labelText="username"
          placeholder="Username"
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
        <Button
          variant="outlined"
          size="large"
          onClick={() => console.log("hola")}
          className=""
        >
          boton grande Carlos
        </Button>
      </div>
    </div>
  );
};

export default Home;
