const versionPrefix = {
  home: "/home",
};
export const homeApiEndPoint = {
  getHome: () => `${versionPrefix.home}`,
  getHomeDetail: ({ id }: { id: string }) =>
    `${versionPrefix.home}/${id}/detail`,
};
