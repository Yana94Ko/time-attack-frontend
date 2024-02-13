"use client";

import API from "@/api/index.api";
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { FormEventHandler, useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const auth = useAuth();
  const { mutate, isPending } = useMutation({ mutationFn: API.authAPI.signUp });

  const handleClickSignUp: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || passwordCheck === "") {
      alert("이메일, 비밀번호, 비밀번호 확인을 입력하세요");
      return;
    }
    if (password !== passwordCheck) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
    mutate(
      { email, password },
      {
        onSuccess: () => {
          auth.setIsLoggedIn(true);
        },
      }
    );
  };
  return (
    <form
      onSubmit={handleClickSignUp}
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
      <button disabled={isPending} className="bg-black text-white w-full h-14">
        회원가입하기
      </button>
    </form>
  );
}

export default SignUpForm;
