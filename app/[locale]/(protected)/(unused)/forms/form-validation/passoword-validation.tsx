"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const schema = z
  .object({
    password: z.string().min(4, { message: "Password is more than 4 characters." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Passwords didn't match." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const PasswordValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: z.infer<typeof schema>) {
    toast.message(JSON.stringify(data, null, 2));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="password"
          className={cn("", {
            "text-destructive": errors.password,
          })}
        >
          Password
        </Label>
        <Input
          type="password"
          {...register("password")}
          placeholder="Enter your password"
          className={cn("", {
            "border-destructive focus:border-destructive": errors.password,
          })}
        />
        {errors.password && (
          <p className="text-xs text-destructive">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="confirmPassword"
          className={cn("", {
            "text-destructive": errors.confirmPassword,
          })}
        >
          Confirm Password
        </Label>
        <Input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm your password"
          className={cn("", {
            "border-destructive focus:border-destructive": errors.confirmPassword,
          })}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div className="mt-2">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default PasswordValidation;
