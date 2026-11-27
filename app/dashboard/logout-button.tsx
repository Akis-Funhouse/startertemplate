"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogout() {
  setLoading(true);
  setError("");

  try {
    const { error } = await authClient.signOut();

    if (error) {
      setError(error.message || "Logout failed");
      return;
    }

    router.replace("/login");
    router.refresh();

  } catch {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}

  return (
    <div>
        {error && (
            <p role="alert" className="text-sm text-red-500">
                {error}
                </p>
            )}
    <Button
      onClick={handleLogout}
      disabled={loading}
      variant="outline"
    >
      {loading ? "Logging out..." : "Logout"}
    </Button>
    </div>
  );
}