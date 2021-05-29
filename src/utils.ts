import { ROUND_DIGITS } from "./const";
import { IState } from "./store/reducers/rates-reducer";

export const setRatio = (item: string, data: IState): number | null => {
  if (!/[\w]+\/[\w]+/.test(item)) return null;

  const [firstSymbol, secondSymbol] = item.split('/');
  let firstValue, secondValue;

  Object.entries(data.rates).map(([itemKey, itemValue]) => {
    if (firstSymbol === itemKey) { firstValue = itemValue }
    if (secondSymbol === itemKey) { secondValue = itemValue }
  })

  if (firstSymbol === data.base) { firstValue = 1 }
  if (secondSymbol === data.base) { secondValue = 1 }

  if (firstValue && secondValue) return  Math.round(secondValue/firstValue * Math.pow(10, ROUND_DIGITS)) / Math.pow(10, ROUND_DIGITS) ;

  return null;
}