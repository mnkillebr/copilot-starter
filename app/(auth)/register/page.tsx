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
import Form from "next/form";
import Link from "next/link";
import { register } from "@/components/actions/register-action";
import { useActionState } from "react";
import { FieldError, FormError } from "@/components/ui/FormError";

export default function RegisterPage() {
  const [state, dispatch] = useActionState(register, undefined);
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Create a new account to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form className="space-y-4" action={dispatch}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="full_name"
            />
            <FieldError state={state} field="full_name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
            <FieldError state={state} field="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
            />
            <FieldError state={state} field="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
            />
            <FieldError state={state} field="confirmPassword" />
          </div>
          <Button className="w-full">Register</Button>
          <FormError state={state} />
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
} 