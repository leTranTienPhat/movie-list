import { FormControl, FormField, FormItem } from "@/components/ui/form";
import FormInputWrapper from "@/components/ui/formComponents/FormInputWrapper";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

type IProps = {
  fieldName: string;
  labelName?: string;
  maxLength?: number;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  layout?: "default" | "up-down";
  className?: string;
  classLabel?: string;
  classInput?: string;
  classError?: string;
  errors?: { message?: string };
  value?: string;
};

const FormInput = ({ fieldName, placeholder, ...props }: IProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormInputWrapper {...props}>
          <FormItem>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
          </FormItem>
        </FormInputWrapper>
      )}
    />
  );
};

export default FormInput;
