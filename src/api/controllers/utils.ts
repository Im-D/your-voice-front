import axios from 'axios';

type TRequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type TRestApiHeaders = {
  'content-type': string,
  Authorization?: string,
};

type TApiData = {
  data: any;
  message: string | number;
  isSuccess: boolean;
};

type TApiSuccess = TApiData;
type TApiFail = TApiData;

interface IRestApiOptions {
  method: TRequestMethod;
  headers: TRestApiHeaders;
  params?: string;
}

export type TApiReturn = TApiSuccess | TApiFail;
export type TFetchReturnType = Promise<TApiReturn>;

const parseResult = (res: TApiReturn): any => {
  if (!res.isSuccess) {
    throw new Error('res.isSuccess is false');
  }
  return res.data;
};

const makeOptions = (method: TRequestMethod, params: any): IRestApiOptions => ({
  method,
  headers: {
    'content-type': 'application/json',
  },
  params,
});

const request = async (url: string, options: IRestApiOptions): TFetchReturnType => {
  try {
    const res = await axios({
      method: options.method,
      url,
      params: options.params,
      headers: options.headers,
    });
    const data: any = await parseResult(res.data);
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
