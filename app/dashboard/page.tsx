import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";

export const instant = false;

export default async function Dashboard() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4 text-muted-foreground">
          Welcome to your account!
        </p>

        <div className="mt-6 rounded-lg border p-6">
          <h2 className="text-xl font-semibold">
            User information
          </h2>

          <p className="mt-4">
            <strong>Name:</strong> {session.user.name}
          </p>

          <p>
            <strong>Email:</strong> {session.user.email}
          </p>

          <p>
            <strong>User ID:</strong> {session.user.id}
          </p>
        </div>

        <div className="mt-6">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}