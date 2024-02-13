"use client";
import LoginModal from "@/components/LoginModal";
import { useUtil } from "@/contexts/util.context";
import Link from "next/link";

function HeaderMenus() {
  const { setModal } = useUtil();
  const handleClickLogin = () => {
    setModal(<LoginModal />);
    console.log(LoginModal);
  };
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link
        href="/sign-up"
        className="text-[15px] font-medium text-gray-800 hover:text-black transition"
      >
        회원가입
      </Link>
      <button
        onClick={handleClickLogin}
        className="text-[15px] font-medium text-gray-800 hover:text-black transition"
      >
        로그인
      </button>
      <Link
        href="/cart"
        className="text-[15px] font-medium text-gray-800 hover:text-black transition"
      >
        장바구니
      </Link>
      <span className="text-[15px] font-medium text-gray-800 hover:text-black transition">
        로그아웃
      </span>
    </div>
  );
}

export default HeaderMenus;
