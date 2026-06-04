"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLoginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const remember = formData.get("remember") === "true";
  const res = await fetch("http://localhost:8080/api/auth/admin/signin",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });
  if(!res.ok){
    throw new Error("ログインに失敗しました");
  }
  const data = await res.json();
  
  const cookieStore = await cookies();
  cookieStore.delete("user-token");
  
  cookieStore.set("admin-token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    ...(remember && {
      maxAge: 60 * 60 * 24 * 30,
    })
  });
  
  redirect("/");
}