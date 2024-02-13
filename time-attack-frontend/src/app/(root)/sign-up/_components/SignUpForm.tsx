"use client";

import API from "@/api/index.api";
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const handleClickSignUp = () => {
    if (email || password || passwordCheck) {
      alert("이메일, 비밀번호, 비밀번호 확인을 입력하세요");
    }
    API.authAPI.signUp({ email: email, password: password });
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full"
    >
      <InputEmail email={email} setEmail={setEmail} />
      <InputPassword
        password={password}
        setPassword={setPassword}
        labelName="비밀번호"
      />
      <InputPassword
        password={passwordCheck}
        setPassword={setPasswordCheck}
        labelName="비밀번호 확인"
      />
      <button
        onClick={handleClickSignUp}
        className="bg-black text-white w-full h-14"
      >
        회원가입하기
      </button>
    </form>
  );
}

export default SignUpForm;
