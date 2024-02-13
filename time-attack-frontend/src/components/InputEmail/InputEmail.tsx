"use client";
import { Dispatch, SetStateAction, useId } from "react";

function InputEmail({
  email,
  setEmail,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-y-1.5 w-full">
      <label htmlFor={id} className="text-gray-700">
        이메일
      </label>
      <input
        id={id}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
      />
    </div>
  );
}

export default InputEmail;
