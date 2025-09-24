import { type HttpHandler } from "msw";
import { homeMockHandlers } from "@/apis/home/api";

export const mockHandlers: HttpHandler[] = [...homeMockHandlers];
