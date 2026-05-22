export type ApiSuccess<T> = {
  data: T;
  success: true;
};

export type ApiError = {
  error: string;
  success: false;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;
