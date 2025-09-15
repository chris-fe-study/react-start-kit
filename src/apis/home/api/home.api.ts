import { publicApi } from "@/lib/api-client";
import {
  type HomeListResponseDTO,
  type HomeResponseDTO,
} from "../model/home.dto";
import { homeApiEndPoint } from "../config/home-endpoint";

export const getUser = async () => {
  const response = await publicApi.get<HomeListResponseDTO>(
    homeApiEndPoint.getHome()
  );
  return response.data.data;
};
export const getUserDetail = async ({ id }: { id: string }) => {
  const response = await publicApi.get<HomeResponseDTO>(
    homeApiEndPoint.getHomeDetail({ id })
  );
  return response.data.data;
};
