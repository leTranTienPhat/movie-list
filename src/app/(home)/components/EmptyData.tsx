"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";

const EmptyData = () => {
  const router = useRouter();

  const redirectToAddMoviePage = () => {
    router.push(ROUTES.ADD_MOVIE);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-10 mx-10">
        <p className="text-h2 text-center">Your movie list is empty</p>
        <Button className="w-full sm:w-[202px] h-[56px] font-bold" onClick={redirectToAddMoviePage}>
          Add a new movie
        </Button>
      </div>
    </div>
  );
};

export default EmptyData;
