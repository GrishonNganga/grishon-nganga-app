"use client";

import { redirect } from "next/navigation";

export default function WithAuth({ children }: { children: React.ReactNode }) {
  const storedUser = window.sessionStorage.getItem("userLoggedIn");
  if (storedUser) {
    return <>{children}</>;
  } else {
    redirect("/auth/signin");
  }
}
