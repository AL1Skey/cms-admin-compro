"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registerAct } from "./action";
import { toast } from "sonner";
import { useRouter } from "@/components/navigation";

type Inputs = {
  name: string;
  email: string;
  password: string;
  role: string;
};

const RegForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    registerAct(data);
    toast.success("Account created successfully");
    router.push("/auth/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name", { required: true })}
          size="lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="dashcode@gmail.com"
          {...register("email", { required: true })}
          size="lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="dashcode"
          {...register("password", { required: true })}
          size="lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Controller
          name="role"
          control={control}
          defaultValue="" // default value should be set for controlled components
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select a Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Role</SelectLabel>
                  <SelectItem value='{"Super Admin":10}'>Super Admin</SelectItem>
                  <SelectItem value='{"Admin":9}'>Admin</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
          rules={{ required: true }}
        />
      </div>

      <Button type="submit" fullWidth>
        Create An Account
      </Button>
    </form>
  );
};

export default RegForm;
