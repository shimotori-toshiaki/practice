"use client";

import { useLoginForm } from "../_hooks/useLoginForm";
import { LoginFormData } from "../_schemas/loginSchema";

type Props = {
  loginAction: (formData: FormData) => Promise<void>;
};

export const LoginForm = ({ loginAction }: Props) => {
  const { register, errors, onSubmit, isPending } = useLoginForm({
    loginAction,
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "ログイン中..." : "ログイン"}
      </button>
    </form>
  );
};