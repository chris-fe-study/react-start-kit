import { http, HttpResponse, HttpHandler } from "msw";
import { homeApiEndPoint, homeListMockData } from "../config";
import { prependApiUrl } from "@/shared/lib";

export const homeMockHandlers: HttpHandler[] = [
  http.get(prependApiUrl(homeApiEndPoint.getHome()), () => {
    return HttpResponse.json(homeListMockData);
  }),
];

export const error404Handler: HttpHandler = http.get(
  prependApiUrl(homeApiEndPoint.getHome()),
  () => {
    return HttpResponse.json(null, { status: 404 });
  }
);
