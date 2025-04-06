"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Form from "next/form";
import { login } from "@/components/actions/login-action";
import { useActionState } from "react";
import { FieldError, FormError } from "@/components/ui/FormError";

export default function LoginPage() {
  const [state, dispatch] = useActionState(login, undefined);
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form className="space-y-4" action={dispatch}>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="email"
              placeholder="Enter your email"
            />
            <FieldError state={state} field="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <FieldError state={state} field="password" />
          </div>
          <Button className="w-full">Login</Button>
          <FormError state={state} />
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register
            </Link>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
} 