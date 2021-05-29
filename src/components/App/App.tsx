import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { fetchRatesFirst, fetchRatesSecond, fetchRatesThird } from "../../store/actions/rates-actions";
import { PairNames } from "../../const";
import cl from "clsx";
import s from "./App.module.scss";
import { IInitialState } from "../../store/reducers/rates-reducer";
import { setRatio } from "../../utils";

const App = () => {
  const firstData = useSelector((state: {RATES: IInitialState}) => state.RATES.first);
  const secondData = useSelector((state: {RATES: IInitialState}) => state.RATES.second);
  const thirdData = useSelector((state: {RATES: IInitialState}) => state.RATES.third);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchRatesFirst());
    dispatch(fetchRatesSecond());
    dispatch(fetchRatesThird());
  }, [])

  return (
    <section className={s.wrap}>
      <div className={s.content}>
        <div className={cl(s.cell, s.cell__header)}>Pair name/market</div>
        <div className={cl(s.cell, s.cell__header)}>First</div>
        <div className={cl(s.cell, s.cell__header)}>Second</div>
        <div className={cl(s.cell, s.cell__header)}>Third</div>
        {PairNames.map((item) => {
          return (
            <React.Fragment key={item}>
              <div className={s.cell}>{item}</div>
              <div className={s.cell}>{firstData.base ? setRatio(item, firstData) : ''}</div>
              <div className={s.cell}>{secondData.base ? setRatio(item, secondData) : ''}</div>
              <div className={s.cell}>{thirdData.base ? setRatio(item, thirdData) : ''}</div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default App;
