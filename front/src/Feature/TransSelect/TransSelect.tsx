import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinkBox from '../../Component/LinkBox/LinkBox';
import SelectFrame from '../../Component/SelectFrame/SelectFrame';
import { RootState } from '../../redux';
import {
  setLoadingFinish,
  setLoadingStart,
  setSemiTotal,
} from '../../redux/total/action';
import {
  DistanceTotalService,
  FoodTotalService,
} from '../../services/CalculService';
import RdBox from './component/RadioBox/RdBox';
import S from './TransSelect.styled';

function TransSelect() {
  const foodList = useSelector((state: RootState) => state.food);
  const distanceList = useSelector((state: RootState) => state.distance);

  const dispatch = useDispatch();

  const handleToSemiClick = async () => {
    const FoodTotal = new FoodTotalService(foodList).getTotal();
    const DistanceTotal = new DistanceTotalService(distanceList).getTotal();
    const total = FoodTotal + DistanceTotal;
    dispatch(setLoadingStart());
    setTimeout(() => {
      dispatch(setSemiTotal(total));
      dispatch(setLoadingFinish());
      console.log('done');
    }, 2000);
  };

  return (
    <SelectFrame title="배달된 방법을 선택해주세요">
      <RdBox />
      <LinkBox
        prevLink="/select/distance"
        nextLink="/result/semi"
        nextClick={handleToSemiClick}
      />
    </SelectFrame>
  );
}

export default TransSelect;
