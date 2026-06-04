"use client";

import { useState } from "react";
import { useLoginForm } from "../_hooks/useLoginForm";

type Props = {
  loginAction: (formData: FormData) => Promise<void>;
};

export const LoginForm = ({ loginAction }: Props) => {

  const { register, errors, onSubmit, isPending } = useLoginForm({
    loginAction,
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form onSubmit={onSubmit} className="border border-[#ccc] p-9 rounded-md">
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="font-bold mb-2.5">メールアドレス</label>
          <input id="email" type="email" {...register("email")} className="w-full rounded border border-[#ccc] px-3 py-2" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="password" className="font-bold mb-2.5">パスワード</label>
          <div className="relative">
            <input id="password" type={showPassword ? "text" : "password"} {...register("password")}  className="w-full rounded border border-[#ccc] px-3 py-2 pr-10" />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2">
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="flex items-center mb-8">
          <input id="remember" type="checkbox" {...register("remember")} className="mr-2.5 h-4 w-4 rounded border border-[#ccc] accent-[#ccc]" />
          <label htmlFor="remember">ログイン状態を保持する</label>
        </div>
        <button type="submit" disabled={isPending} className="w-full rounded-md bg-[#6d6d6d] p-3 text-white">
          {isPending ? "ログイン中..." : "ログイン"}
        </button>
      </form>
    </>
  );
};