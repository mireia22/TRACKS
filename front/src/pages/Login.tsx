import React from "react";

const Login = () => {
  return (
    <div className="">
      <form
        className="flex flex-col gap-4 py-4 px-2 bg-black text-white items-center w-[16rem] rounded-lg"
        action=""
      >
        <h2 className="text-xl font-semibold">Login Form</h2>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="text" className="p-1 rounded-sm" id="email" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="p-1 rounded-sm"
            id="password"
            required
          />
        </div>
        <button className=" px-2 bg-purple-800 rounded-lg text-white">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
