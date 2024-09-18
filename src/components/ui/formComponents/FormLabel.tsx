import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

type IProps = {
  children: React.ReactNode;
  className?: string;
  isError?: boolean;
};
const FormLabel = ({ children, className, isError = false }: IProps) => {
  return (
    <Label
      className={cn("min-w-[100px] lg:min-w-[130px] my-auto text-base", className, {
        "text-destructive": isError,
      })}
    >
      {children}
    </Label>
  );
};

export default FormLabel;
