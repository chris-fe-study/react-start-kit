import type { ResponseDTO } from "@/types";

export interface Home {
  id: string;
  email: string;
  name: string;
}

export type HomeResponseDTO = ResponseDTO<Home>;
