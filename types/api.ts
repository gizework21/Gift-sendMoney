export type ApiResponse<T> = {
  ok: boolean;
  data?: T;
  error?: string;
};

export type BanksResponse<T> = {
  ok: boolean;
  data: T;
};

export type ExchangeRateResponse<T> = {
  ok: boolean;
  data: T;
};
