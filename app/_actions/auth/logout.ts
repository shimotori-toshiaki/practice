"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const cookieStore = await cookies();

  const userToken = cookieStore.get("user-token")?.value;
  const adminToken = cookieStore.get("admin-token")?.value;

  const token = adminToken ?? userToken;

  try {
    if (token) {
      await fetch("http://localhost:8080/api/auth/signout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });
    }
  } finally {
    cookieStore.delete("user-token");
    cookieStore.delete("admin-token");
  }

  redirect("/");
}