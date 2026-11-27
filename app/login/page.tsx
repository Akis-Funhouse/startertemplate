
"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/dashboard",
      });

      if (error) {
        setError(error.message || "Login failed");
        return;
      }

      router.push("/dashboard");
      router.refresh();

    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email and password.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}

              <Button
              type="submit"
              className="w-full"
              disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
                </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col">
          <CardDescription>
            Don't have an account?
          </CardDescription>

          <Button variant="link">
            <Link href="/register">Register</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
