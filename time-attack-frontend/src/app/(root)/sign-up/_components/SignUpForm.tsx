"use client";

import { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  return (
    <form className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
      <div className="flex flex-col gap-y-1.5 w-full">
        <label className="text-gray-700">이메일</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
        />
      </div>
      <div className="flex flex-col gap-y-1.5 w-full">
        <label className="text-gray-700">비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
        />
      </div>
      <div className="flex flex-col gap-y-1.5 w-full">
        <label className="text-gray-700">비밀번호 확인</label>
        <input
          type="password"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
        />
      </div>
      <button className="bg-black text-white w-full h-14">회원가입하기</button>
    </form>
  );
}

export default SignUpForm;
