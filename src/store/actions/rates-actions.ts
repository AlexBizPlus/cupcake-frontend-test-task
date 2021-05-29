import { UPDATE_FIRST, UPDATE_SECOND, UPDATE_THIRD } from './action-types';
import { APIRoute } from "../../api/const";
import { Dispatch } from 'react';
import { AxiosResponse, AxiosStatic } from 'axios';

interface IResponse {
  base: string;
  rates: {
    [elem: string]: number
  }
  timestamp: number,
  date: string;
}

export const setRatesFirst = (data: IResponse) => ({
  type: UPDATE_FIRST,
  payload: { base: data.base, rates: data.rates }
});

export const setRatesSecond = (data: IResponse) => ({
  type: UPDATE_SECOND,
  payload: { base: data.base, rates: data.rates }
});

export const setRatesThird = (data: IResponse) => ({
  type: UPDATE_THIRD,
  payload: { base: data.base, rates: data.rates }
});

export const fetchRatesFirst = () => (dispatch: any, _getState: any, api: AxiosStatic) => (
  api.get(APIRoute.FIRST)
    .then((res: AxiosResponse<IResponse>) => dispatch(setRatesFirst(res.data as IResponse)))
    .then(() => dispatch(subscribeRatesFirst()))
);

export const fetchRatesSecond = () => (dispatch: any, _getState: any, api: AxiosStatic) => (
  api.get(APIRoute.SECOND)
    .then((res: AxiosResponse<IResponse>) => dispatch(setRatesSecond(res.data as IResponse)))
    .then(() => dispatch(subscribeRatesSecond()))
);

export const fetchRatesThird = () => (dispatch: any, _getState: any, api: AxiosStatic) => (
  api.get(APIRoute.THIRD)
    .then((res: AxiosResponse<IResponse>) => dispatch(setRatesThird(res.data as IResponse)))
    .then(() => dispatch(subscribeRatesThird()))
);

export const subscribeRatesFirst = () => (dispatch: any, _getState: any, api: AxiosStatic) => (
  api.get(APIRoute.FIRST_POLL)
    .then((res: AxiosResponse<IResponse>) => dispatch(setRatesFirst(res.data as IResponse)))
    .catch(err => console.log(err))
    .finally(() => setTimeout(() => dispatch(subscribeRatesFirst()), 1000))
);

export const subscribeRatesSecond = () => (dispatch: any, _getState: any, api: AxiosStatic) => (
  api.get(APIRoute.SECOND_POLL)
    .then((res: AxiosResponse<IResponse>) => dispatch(setRatesSecond(res.data as IResponse)))
    .catch(err => console.log(err))
    .finally(() => setTimeout(() => dispatch(subscribeRatesSecond()), 1000))
);

export const subscribeRatesThird = () => (dispatch: any, _getState: any, api: AxiosStatic) => (
  api.get(APIRoute.THIRD_POLL)
    .then((res: AxiosResponse<IResponse>) => dispatch(setRatesThird(res.data as IResponse)))
    .catch(err => console.log(err))
    .finally(() => setTimeout(() => dispatch(subscribeRatesThird()), 1000))
);