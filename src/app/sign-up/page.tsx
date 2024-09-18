import SignUpForm from "@/app/sign-up/components/SignUpForm";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="w-[300px] text-center">
      <h1 className="text-h1 mb-5">Sign up</h1>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
