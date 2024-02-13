"use client";
import API from "@/api/index.api";
import LoginModal from "@/components/LoginModal";
import { useAuth } from "@/contexts/auth.context";
import { useUtil } from "@/contexts/util.context";
import Link from "next/link";
import { useEffect } from "react";

function HeaderMenus() {
  const { setModal } = useUtil();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleClickLogin = () => {
    setModal(<LoginModal />);
  };
  const handleClickLogOut = () => {
    API.authAPI.logOut();
    setIsLoggedIn(false);
  };
  useEffect(() => {
    API.authAPI.refreshToken().then((isLoggedIn) => setIsLoggedIn(isLoggedIn));
  }, []);
  return (
    <div className="ml-auto flex items-center gap-x-4">
      {!isLoggedIn ? (
        <>
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
        </>
      ) : (
        <>
          <Link
            href="/cart"
            className="text-[15px] font-medium text-gray-800 hover:text-black transition"
          >
            장바구니
          </Link>
          <span
            onClick={handleClickLogOut}
            className="text-[15px] font-medium text-gray-800 hover:text-black transition"
          >
            로그아웃
          </span>
        </>
      )}
    </div>
  );
}

export default HeaderMenus;
