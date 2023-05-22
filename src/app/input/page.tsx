import React from "react";
import InputText from "@/commons/InputText";
function page() {
  return (
    <div className="bg-[#F5F5F5] w-full h-screen flex justify-center items-center flex-col">
      <InputText name="user" label="Email" placeHolder="Email" />
      <InputText name="password" hidden label="Password" />
      <InputText name="dni" label="DNI" />
    </div>
  );
}

export default page;
