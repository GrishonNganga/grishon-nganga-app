"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignInData } from "@/lib/types";

type SigninFormProps = {
  user?: SignInData;
  setUser: any;
  isPending: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SigninForm({
  user,
  setUser,
  isPending,
  onSubmit,
}: SigninFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState: Partial<SignInData>) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className="mx-auto mt-10 max-w-sm">
      <CardHeader>
        <CardTitle className="text-center text-xl">Sign In</CardTitle>
        <CardDescription className="text-center">
          Enter your information to log in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Username</Label>
            <Input
              id="username"
              name="username"
              value={user?.username || ""}
              placeholder="yourusername"
              required
              type="name"
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              value={user?.password || ""}
              placeholder="*******"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
          </div>
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Sing in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
