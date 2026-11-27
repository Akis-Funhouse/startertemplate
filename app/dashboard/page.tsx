
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const instant = false;

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <header className="border-b bg-gray-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <LogoutButton />
        </div>
      </header>

      {/* Dashboard content */}
      <div className="mx-auto max-w-5xl space-y-8 p-6 md:p-10">

        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome, {user.name}!
          </h2>
        </div>

        {/* User information */}
        <Card>
          <CardHeader>
            <CardTitle>Account information</CardTitle>
            <CardDescription>
              Your personal account details.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              
              {/* Avatar */}
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-xl font-semibold">
                  {(user.name?.[0] || user.email[0]).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              {/* User details */}
              <div className="grid flex-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Name
                  </p>
                  <p className="font-medium">
                    {user.name}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Email address
                  </p>
                  <p className="font-medium">
                    {user.email}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    User ID
                  </p>
                  <p className="break-all font-mono text-sm">
                    {user.id}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}
