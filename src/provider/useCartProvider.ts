import { inject, provide, reactive } from "vue";

type Option = {
  id: number,
  name: string,
  price: number,
  isSelected: boolean
}

type Selection = {
  id: number,
  name: string,
  options: Option[]
}

type Meal = {
  mealId: number,
  mealName: string,
  mealPrice: number,
  count: number,
  selections: Selection[]
}

type ResaurantMeals = {
  restaurantId: number,
  restaurantName: string,
  meals: Meal[]
}

const key = Symbol('cart_provider')

export function useSetCartProvider() {
  const cartInfo = reactive<ResaurantMeals[]>([
    {
      restaurantId: 1,
      restaurantName: 'Restaurant 1',
      meals: [{
      mealId: 1,
      mealName: "超好喝紅茶",
      mealPrice: 30,
      count: 1,
      selections: [
        {
          id: 1,
          name: "甜度",
          options: [
            {
              id: 1,
              name: "正常",
              price: 0,
              isSelected: true
            },
            {
              id: 2,
              name: "少糖",
              price: 0,
              isSelected: false
            },
            {
              id: 3,
              name: "半糖",
              price: 0,
              isSelected: false
            },
            {
              id: 4,
              name: "微糖",
              price: 0,
              isSelected: false
            },
            {
              id: 5,
              name: "無糖",
              price: 0,
              isSelected: false
            }
          ]
        },
        {
          id: 2,
          name: "冰塊",
          options: [
            {
              id: 1,
              name: "正常",
              price: 0,
              isSelected: true
            },
            {
              id: 2,
              name: "少冰",
              price: 0,
              isSelected: false
            },
            {
              id: 3,
              name: "微冰",
              price: 0,
              isSelected: false
            },
            {
              id: 4,
              name: "去冰",
              price: 0,
              isSelected: false
            },
            {
              id: 5,
              name: "溫",
              price: 0,
              isSelected: false
            }
          ]
        }
      ]}
    ]
    }
  ])

  provide(key, {
    data: cartInfo,
  });
}

export default function useGetCartProvider() {

  const data = inject<ResaurantMeals[]>(key);

  if (data === undefined) {
    throw new Error("useGetCartProvider() is called without provider.");
    
  }

  return data
}