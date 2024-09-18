"use client";

import { svg } from "@/assets";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/ui/formComponents/FormInput";
import { ILoginSchema, loginSchema } from "@/validations/zod/loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const LoginForm = () => {
  const formMethods = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: ILoginSchema) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json", // Add this line
        },
      }
    );

    if (response.ok) {
      console.log("response", response);
      console.log("Sign up successful");
    } else {
      console.log("Sign up failed");
    }
    console.log(values);
  };

  const loginWithGoogle = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/google`;
  };

  return (
    <FormProvider {...formMethods}>
      <Form {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormInput
            fieldName="email"
            placeholder="Email"
            layout="up-down"
            errors={formMethods.formState.errors.email}
          />
          <FormInput
            fieldName="password"
            placeholder="Password"
            layout="up-down"
            errors={formMethods.formState.errors.password}
          />
          <div>
            <div className="flex items-center justify-center space-x-2 pb-5">
              <Checkbox id="terms" className="bg-input border-none" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <div className="flex items-center justify-center space-x-2 pb-5">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Dont have account? <Link href={"/sign-up"}>Sign up</Link>
              </label>
            </div>

            <Button type="submit" className="font-bold w-full">
              Login
            </Button>
            <div className="mt-4">
              <Button
                type="button"
                variant="secondary"
                className="w-full flex gap-2 items-center justify-center"
                onClick={loginWithGoogle}
              >
                <div className="relative w-4 h-4">
                  <Image src={svg.googleIcon} alt="google icon" fill />
                </div>
                Login with Google
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
};

export default LoginForm;
