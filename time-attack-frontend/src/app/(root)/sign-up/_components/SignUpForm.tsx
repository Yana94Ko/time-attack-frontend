"use client";

import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  return (
    <form className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
      <InputEmail email={email} setEmail={setEmail} />
      <InputPassword password={password} setPassword={setPassword} />
      <InputPassword password={passwordCheck} setPassword={setPasswordCheck} />
      <button className="bg-black text-white w-full h-14">회원가입하기</button>
    </form>
  );
}

export default SignUpForm;
