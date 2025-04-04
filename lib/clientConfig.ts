import type { CreateClientConfig } from "@/app/openapi-client/client.gen";
import { config } from "dotenv";

config({ path: ".env" });

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
});