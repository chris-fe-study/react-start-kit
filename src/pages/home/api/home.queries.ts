import { getUser, getUserDetail } from "@/apis/home/api/home.api";
import { queryOptions } from "@tanstack/react-query";

export const homeQueries = {
  all: () => ["home"] as const,
  lists: () => [...homeQueries.all(), "users"] as const,
  list: () =>
    queryOptions({
      queryKey: homeQueries.lists(),
      queryFn: () => getUser(),
    }),
  details: () => [...homeQueries.all(), "user"] as const,
  detail: (id: string) =>
    queryOptions({
      queryKey: [...homeQueries.details(), id] as const,
      queryFn: () => getUserDetail({ id }),
    }),
};
