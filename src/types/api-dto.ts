export type ResponseDTO<T> = {
  data: T;
  code: string;
  message: string;
};
