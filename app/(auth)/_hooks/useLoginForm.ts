"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "../_schemas/loginSchema";

type Props = {
  loginAction: (formData: FormData) => Promise<void>;
};

export const useLoginForm = ({ loginAction }: Props) => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@lh.sandbox",
      password: "pass",
    },
  });

  const onSubmit = handleSubmit((values) => {
    const formData = new FormData();

    formData.append("email", values.email);
    formData.append("password", values.password);

    startTransition(() => {
      loginAction(formData);
    });
  });

  return {
    register,
    errors,
    onSubmit,
    isPending,
  };
};