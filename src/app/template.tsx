"use client";
import React, { useCallback, useEffect } from "react";
import Header from "@/components/Header";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { checkForUserTokenAndPersistSession } from "@/redux/reducers/user";

export default function Template({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const user = useSelector((state: RootState) => state.user);
  const { push } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  const checkUserSession = useCallback(async () => {
    try {
      if (user.token) return;
      await dispatch(checkForUserTokenAndPersistSession()).unwrap();
      push("/home");
    } catch (error) {
      push("/login");
    }
  }, [dispatch, push, user.token]);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  if (pathname === "/login" || pathname === "/register") {
    return children;
  }

  return (
    <div className="h-screen w-full">
      <Header />
      {children}
    </div>
  );
}
