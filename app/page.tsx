// "use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { CopilotPopup } from "@copilotkit/react-ui";
import { DarkModeToggle } from "@/components/DarkModeToggle";
// import { useCopilotAction } from "@copilotkit/react-core";
// import { loginLoginAccessTokenPost, Token } from "./openapi-client";
import { getUser, isLoggedIn } from "@/components/auth/user";
import { redirect } from "next/navigation";

export default async function Home() {
  // useCopilotAction({
  //   name: "login",
  //   description: "Log in user",
  //   handler: async () => {
  //     const { data, error } = await loginLoginAccessTokenPost({
  //       body: {
  //         username: "user@example.com",
  //         password: "fakemeout"
  //       }
  //     })
  //     // if (tokenData) {
  //     //   const userResponse = await fetch('http://127.0.0.1:8000/users/me', {
  //     //     headers: {
  //     //       "Authorization": `Bearer ${tokenData.access_token}`
  //     //     },
  //     //   });
  //     //   const userData = await userResponse.json()
  //     //   console.log("fast api request user data", userData)
  //     // }
  //   },
  // });
  // useCopilotAction({
  //   name: "get_all_users",
  //   description: "Get all the users",
  //   available: "remote",
  //   // render
  // })
  const loggedIn = await isLoggedIn();
  const user = await getUser();
  if (loggedIn && (user && "id" in user)) {
    redirect("/dashboard");
  }
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="absolute top-4 right-4">
          <DarkModeToggle />
        </div>
        {/* <Login /> */}
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                app/page.tsx
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
      {/* <CopilotPopup
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
        // RenderResultMessage={(props) => {
        //   console.log("result message props", props)
        //   return JSON.stringify(props)
        // }}
      /> */}
    </>
  );
}
