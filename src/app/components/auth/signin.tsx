"use client";

import SigninForm from "./signin-form";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signin } from "@/lib/api/user";
import { SignInData } from "@/lib/types";
import { validateSignIn } from "@/lib/validation/user";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [userDetails, setUserDetails] = useState<SignInData>();

  const router = useRouter();

  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: signin,
    onError: (err) => {
      toast({
        variant: "destructive",
        title: "Signin Failed",
        description: err.message,
      });
    },
    onSuccess: (data) => {
      toast({
        variant: "success",
        title: "Sign in Success",
        description: "Welcome aboard",
      });

      //Pull random user and store as logged in user to simulate logging in.
      // This is because, there is no way of getting logged in user.
      window.sessionStorage.setItem("userLoggedIn", JSON.stringify(data.payload));
      router.push("/");
    },
  });

  const signinFn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Validate data
    const { status, message } = await validateSignIn(userDetails);
    if (!status) {
      toast({
        variant: "destructive",
        title: "Signin Failed",
        description: message,
      });
      return;
    }
    mutate(userDetails!);
  };

  return (
    <SigninForm
      user={userDetails}
      setUser={setUserDetails}
      onSubmit={signinFn}
      isPending={isPending}
    />
  );
}
