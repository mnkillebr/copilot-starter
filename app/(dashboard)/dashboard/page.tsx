

// "use client";
import { getUser } from "@/components/auth/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
// import { useEffect, useState } from "react";

export default async function DashboardPage() {

  // client side implementation
  // const [user, setUser] = useState<any>(null);
  // useEffect(() => {
  //   async function fetchUser() {
  //     const userResponse = await fetch("/api/user");
  //     const userData = await userResponse.json();
  //     console.log(userData);
  //     setUser(userData);
  //   }
  //   fetchUser();
  // }, [])

  // server side implementation
  const user = await getUser();
  if (!user || !("id" in user)) {
    redirect("/login");
  }
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {user && "full_name" in user ? ( // Type guard
          <h1 className="text-xl font-semibold">Hello {user.full_name}</h1>
        ) : (
          <h1 className="text-xl font-semibold">Hello Guest</h1> // Fallback for error or guest
        )}
        <p className="text-muted-foreground">
          Welcome to your dashboard
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$12,345</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}