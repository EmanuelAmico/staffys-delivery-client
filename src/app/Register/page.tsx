import React, { FC } from "react";
import Image from "next/image";
import Button from "@/commons/Button";

const page: FC = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex w-full justify-center h-[18rem]  items-center">
        <Image
          src={"/images/motorcyclewithletters2.svg"}
          alt="Moto"
          width={20}
          height={20}
          className="w-[200px] h-[100px]"
        />
      </div>
      <div className="flex flex-col">
        {/* <InputText placeHolder="Name" label="Name"></InputText> */}
        <label className=" mb-1  ml-2 text-xs text-yellowText font-medium border-0">
          Last Name
        </label>
        <input
          type="text"
          id="first_name"
          className="ml-2 text-base w-11/12 p-2.5 border-solid border-primaryBlue p-2.5 border-b-2 pb-1 pl-0 ring-0 outline-0  mb-6"
          placeholder="Last Name"
          required
        />
        <label className=" mb-1  ml-2 text-xs text-yellowText font-medium border-0">
          Email
        </label>
        <input
          type="text"
          id="first_name"
          className="ml-2 text-base w-11/12 p-2.5 border-solid border-primaryBlue p-2.5 border-b-2 pb-1 pl-0 ring-0 outline-0  mb-6"
          placeholder="Email"
          required
        />
        <label className=" mb-1  ml-2 text-xs text-yellowText font-medium border-0">
          Password
        </label>
        <input
          type="text"
          id="first_name"
          className="ml-2 text-base w-11/12 p-2.5 border-solid border-primaryBlue p-2.5 border-b-2 pb-1 pl-0 ring-0 outline-0 mb-6"
          placeholder="Password"
          required
        />
        <label className=" mb-1  ml-2 text-xs text-yellowText font-medium border-0">
          Second Password
        </label>
        <input
          type="text"
          id="first_name"
          className="ml-2 text-base w-11/12 p-2.5 border-solid border-primaryBlue p-2.5 ring-0 outline-0 border-b-2 pb-1 pl-0  mb-4"
          placeholder="Second Password"
          required
        />
      </div>
      <div className="w-full flex justify-center ">
        <Button className="mt-8 w-11/12 ">Registrar</Button>
      </div>
    </div>
  );
};

export default page;
