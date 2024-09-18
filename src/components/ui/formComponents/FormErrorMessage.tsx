import { cn } from "@/lib/utils";

type IProps = {
  className?: string;
  errorMessage?: string;
};

const FormErrorMessage = ({ className, errorMessage }: IProps) => {
  return (
    <div className={cn("w-full text-destructive text-xs pt-1", className)}>
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormErrorMessage;
