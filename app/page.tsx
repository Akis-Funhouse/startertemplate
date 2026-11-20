import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-lg">

        <CardContent className="space-y-4">
          <Button className="w-full" size="lg">
            <Link href="/login">
              Login to your account
            </Link>
          </Button>

          <Button
            variant="outline"
            className="w-full"
            size="lg"
          >
            <Link href="/register">
              Create an account
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}