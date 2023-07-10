"use client";
import React, { useCallback, useEffect, useMemo } from "react";
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
  const allowedPathnames = useMemo(
    () => ["/login", "/register", "/forgot-password"],
    []
  );

  const checkUserSession = useCallback(async () => {
    try {
      if (user.token || allowedPathnames.includes(pathname)) return;
      await dispatch(checkForUserTokenAndPersistSession()).unwrap();
      if (pathname === "/") push("/home");
    } catch (error) {
      push("/login");
    }
  }, [dispatch, push, user.token, allowedPathnames, pathname]);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  if (allowedPathnames.includes(pathname)) {
    return children;
  }

  if (!user.token && !allowedPathnames.includes(pathname)) {
    return null;
  }

  return (
    <div className="h-screen w-full">
      <Header />
      {children}
    </div>
  );
}
