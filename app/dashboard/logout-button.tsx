"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@base-ui/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        const { error } = await authClient.signOut();

        if (error) {
            console.error("Logout failed", error);
            return;
        }

        router.push("/login");
        router.refresh();
    }

    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    );
}