"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        console.error("Logout failed", error);
        return;
      }

      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleLogout}
      disabled={loading}
      variant="outline"
    >
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
}