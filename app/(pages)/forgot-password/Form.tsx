"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { cn } from "@/lib/utils"
import { Loader2 } from 'lucide-react';
import { classicloginUser, forgotPasswordAction, loginUser, resetPasswordAction } from '@/action/auth-action';
import { toast } from "sonner"
import { useRouter } from 'next/navigation';

type ForgotPasswordFormProps = Partial<{
  email:string;
  resetPassword: boolean;
  token: any;
}>;

const resetPasswordSchema = z.object({
  email: z.string().email({ message: "Your email is invalid." }),
  password: z.string().min(1, { message: "Password must not be empty." }),
  confirmPassword: z.string().min(1, { message: "Confirm Password must not be empty." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Your email is invalid." }),
});

const ForgotPasswordForm = ({email="",resetPassword=false,token=""}:ForgotPasswordFormProps) => {
  

  const schema = resetPassword ? resetPasswordSchema : forgotPasswordSchema;

  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const [passwordType, setPasswordType] = React.useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = React.useState("password");

  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };

  const toggleConfirmPasswordType = () => {
    if (confirmPasswordType === "text") {
      setConfirmPasswordType("password");
    } else if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    }
  }


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "all",
    defaultValues: {
      email: `${email || ""}`,
      password: "",
      confirmPassword: "",
    },
  });
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (data: z.infer<typeof forgotPasswordSchema>) => {
    startTransition(async () => {
      try {
        let response:any;
        if(resetPassword){
          response = await resetPasswordAction(data);
        }
        else{
          response = await forgotPasswordAction(data);
        }
        console.log(response);
        if (!!response.error) {
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",

          })
        } else {
          if(resetPassword){
            toast.success("Successfully reset password");
            router.push('/login');
          }
          else{
            if(response.token){
            router.push(`/forgot-password/${response.token}`);}
            else{
              toast.error("Email Not Found");
            }
          }
        }
      } catch (err: any) {
        toast.error(err.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 2xl:mt-7 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className=" font-medium text-default-600">
          Email{" "}
        </Label>
        <Input size="lg"
          disabled={isPending || resetPassword}
          {...register("email")}
          type="email"
          id="email"
          className={cn("", {
            "border-destructive ": errors.email,
          })}
        />
      </div>
      {errors.email && (
        <div className=" text-destructive mt-2 text-sm">
          {errors.email.message}
        </div>
      )}

      {resetPassword &&
      <>
      <div className="mt-3.5 space-y-2">
        <Label htmlFor="password" className="mb-2 font-medium text-default-600">
          Password{" "}
        </Label>
        <div className="relative">
          <Input size="lg"
            disabled={isPending}
            {...register("password")}
            type={passwordType}
            id="password"
            className="peer  "
            placeholder=" "
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 translate-x-[25rem] cursor-pointer"
            onClick={togglePasswordType}
          >
            {passwordType === "password" ? (
              <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="w-5 h-5 text-default-400"
              />
            )}
          </div>
        </div>
      </div>
      {errors.password && (
        <div className=" text-destructive mt-2 text-sm">
          {errors.password.message}
        </div>
      )}
      <div className="mt-3.5 space-y-2">
        <Label htmlFor="confirmPassword" className="mb-2 font-medium text-default-600">
          Confirm Password{" "}
        </Label>
        <div className="relative">
          <Input size="lg"
            disabled={isPending}
            {...register("confirmPassword")}
            type={confirmPasswordType}
            id="confirmPassword"
            className="peer  "
            placeholder=" "
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 translate-x-[25rem] cursor-pointer"
            onClick={toggleConfirmPasswordType}
          >
            {confirmPasswordType === "password" ? (
              <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="w-5 h-5 text-default-400"
              />
            )}
          </div>
        </div>
      </div>
      {errors.confirmPassword && (
        <div className=" text-destructive mt-2 text-sm">
          {errors.confirmPassword.message}
        </div>
      )}
      </>
      }

      <Button fullWidth disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? "Loading..." : `${resetPassword ? "Reset Password" : "Verify Email"}`}
      </Button>
    </form>
  );
};
export default ForgotPasswordForm;
