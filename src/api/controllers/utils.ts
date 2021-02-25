import axios from 'axios';

type TRequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type TRestApiHeaders = {
  'content-type': string,
  Authorization?: string,
};

type TApiData = {
  data: any;
  message: string;
  isSuccess: boolean;
};

type TApiSuccess = TApiData;
type TApiFail = TApiData;

type TRestApiOptions = {
  method: TRequestMethod;
  headers: TRestApiHeaders;
  params?: string;
}

export type TApiReturn = TApiSuccess | TApiFail;
export type TFetchReturnType = Promise<Pick<TApiReturn, 'data'> | Error>;

const parseResult = (res: TApiReturn): Pick<TApiReturn, 'data'> | Error => {
  if (!res.isSuccess) {
    throw new Error('res.isSuccess is false');
  }
  return res.data;
};

const makeOptions = (method: TRequestMethod, params: any): TRestApiOptions => ({
  method,
  headers: {
    'content-type': 'application/json',
  },
  params,
});

const request = async (url: string, options: TRestApiOptions): TFetchReturnType => {
  try {
    const res = await axios({
      ...options,
      url,
    });
    const data = parseResult(res.data);
    return data;
  } catch (e) {
    console.error('@request api error', e);
    return e.message;
  }
};

export {
  makeOptions,
  request,
};
