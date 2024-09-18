import FormErrorMessage from "@/components/ui/formComponents/FormErrorMessage";
import FormLabel from "@/components/ui/formComponents/FormLabel";
import { cn } from "@/lib/utils";

type IProps = {
  className?: string;
  classLabel?: string;
  classError?: string;
  layout?: "default" | "up-down";
  labelName?: string;
  children: React.ReactNode;
  errors?: { message?: string };
  description?: string;
  separator?: string;
};

const FormInputWrapper = ({ className, classLabel, classError, errors, layout = "default", labelName, children }: IProps) => {
  return (
    <div className={cn("relative pb-5", { flex: layout === "default" }, className)}>
      <FormLabel className={cn({ hidden: !labelName }, classLabel)} isError={Boolean(errors)}>
        {labelName}
      </FormLabel>
      <div className={""}>
        {children}
        <FormErrorMessage className={cn("overflow-x-visible whitespace-nowrap", classError)} errorMessage={errors?.message} />
      </div>
    </div>
  );
};

export default FormInputWrapper;
