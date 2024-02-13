"use client";
import { useState } from "react";
import InputEmail from "../InputEmail";
import InputPassword from "../InputPassword";
import Modal from "../Modal";

function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Modal title="로그인">
      <InputEmail email={email} setEmail={setEmail} />
      <InputPassword
        password={password}
        setPassword={setPassword}
        labelName="비밀번호"
      />
      <button className="bg-black text-white w-full h-14 my-4">
        로그인하기
      </button>
    </Modal>
  );
}

export default LoginModal;
