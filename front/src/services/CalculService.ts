import { SelectType } from '../lib/types';
import { DAILY_STATE } from '../redux/daily/daily';
import { DISTANCE_STATE } from '../redux/distance/distance';
import { FOOD_STATE } from '../redux/food/food';
import { OFFSET_STATE } from '../redux/offset/offset';

type FoodEntry = [
  string,
  {
    cost: number;
  } | null,
][];

type ItemEntry = [string, SelectType][];

interface ITotalProp {
  getTotal: () => number;
}

// export class OffsetTotalService implements ITotalProp {
//   constructor(private offsetList: OFFSET_STATE) {}

//   getTotal() {
//     const FoodEntry = getListEntry(this.offsetList);
//     return getListTotal(FoodEntry);
//   }
// }

export class FoodTotalService implements ITotalProp {
  constructor(private foodList: FOOD_STATE) {}

  getTotal() {
    const FoodEntry = getFoodListEntry(this.foodList);
    return getFoodListTotal(FoodEntry);
  }
}

function getFoodListEntry(ItemList: FOOD_STATE) {
  return Object.entries(ItemList);
}

function getFoodListTotal(ItemList: FoodEntry) {
  const totalResult = ItemList.reduce((acc, cur) => {
    if (cur[1] === null) return acc;
    else return (acc += cur[1].cost);
  }, 0);
  return totalResult;
}

export class DistanceTotalService implements ITotalProp {
  constructor(private distanceList: DISTANCE_STATE) {}

  getTotal() {
    return getDistanceTotal(this.distanceList);
  }
}

function getDistanceTotal(distanceList: DISTANCE_STATE) {
  if (distanceList.transport == 'walk/Bike') return 0;
  if (distanceList.total == null) return 0;
  return (parseInt(distanceList.total) * 145) / 100;
}

export class DailyTotalService implements ITotalProp {
  constructor(private itemList: DAILY_STATE) {}

  getTotal() {
    const ItemEntry = getDailyListEntry(this.itemList);
    return getDailyListTotal(ItemEntry);
  }
}

function getDailyListEntry(ItemList: DAILY_STATE) {
  return Object.entries(ItemList);
}

function getDailyListTotal(ItemList: ItemEntry) {
  const totalResult = ItemList.reduce((acc, cur) => {
    if (typeof cur[1].cost === 'boolean') return acc;
    else return (acc += cur[1].cost);
  }, 0);
  return totalResult;
}
