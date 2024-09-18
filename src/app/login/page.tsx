import LoginForm from "@/app/login/components/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-[300px] text-center">
      <h1 className="text-h1 mb-5">Sign in</h1>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
