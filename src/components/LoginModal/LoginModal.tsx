"use client";
import API from "@/api/index.api";
import { useAuth } from "@/contexts/auth.context";
import { useUtil } from "@/contexts/util.context";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import InputEmail from "../InputEmail";
import InputPassword from "../InputPassword";
import Modal from "../Modal";

function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending } = useMutation({ mutationFn: API.authAPI.logIn });
  const { setIsLoggedIn } = useAuth();
  const { setModal } = useUtil();

  const handleClickLogin = () => {
    if (email === "" || password === "") {
      alert("이메일과 비밀번호를 입력하세요");
      return;
    }
    console.log("새ㄹㅇㄴㄹㄹㄴㅇ");
    mutate(
      { email, password },
      {
        onSuccess: () => {
          setIsLoggedIn(true);
          setModal(<></>);
        },
      }
    );
  };
  return (
    <Modal title="로그인">
      <InputEmail email={email} setEmail={setEmail} />
      <InputPassword
        password={password}
        setPassword={setPassword}
        labelName="비밀번호"
      />
      <button
        onClick={handleClickLogin}
        disabled={isPending}
        className="bg-black text-white w-full h-14 my-4"
      >
        로그인하기
      </button>
    </Modal>
  );
}

export default LoginModal;
