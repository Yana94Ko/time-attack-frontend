import { Dispatch, SetStateAction, useId } from "react";

function InputPassword({
  password,
  setPassword,
}: {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-y-1.5 w-full">
      <label htmlFor={id} className="text-gray-700">
        비밀번호
      </label>
      <input
        id={id}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
      />
    </div>
  );
}

export default InputPassword;
