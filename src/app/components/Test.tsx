"use client";
import { useState } from "react";

const Test = () => {
  const [inputValues, setInputValues] = useState<string>("");
  return (
    <div className="flex flex-col items-center gap-5 h-full w-full p-5 bg-purple-300">
      <div className="flex flex-col items-center justify-center gap-2 w-full p-5 text-black">
        <h1>Hello👋 I am Test NextJS application being used for</h1>
        <h1>Docker 🐳 containerization 🎉</h1>
      </div>

      <input
        type="text"
        placeholder="Enter text"
        className="h-10 w-96 px-3 outline-none  border-b-2 bg-transparent transition-all duration-100 ease-in focus-within:border-black text-black placeholder:text-black"
        value={inputValues}
        onChange={(e) => setInputValues(e.target.value)}
      />
      <div>
        <p className="text-xl text-black">{inputValues}</p>
      </div>
      <p>Hello world</p>
      <p>Initiated self hosted runners as service</p>
      <p> - name: Login to docker hub uses: docker/login-action@v2</p>
      <p>jabsdjlabasdasdasda</p>
    </div>
  );
};

export default Test;
