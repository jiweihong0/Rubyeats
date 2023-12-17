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

  const addMeal = (restaurantId: number, meal: Meal) => {
    const restaurant = cartInfo.find(restaurant => restaurant.restaurantId === restaurantId)

    if (restaurant === undefined) {
      cartInfo.push({
        restaurantId,
        restaurantName: 'Restaurant ' + restaurantId,
        meals: [meal]
      })
      return
    }

    restaurant.meals.push(meal)
  }

  const setMealCount = (mealId: number, offset: number) => {
    const restaurantThatHasMeal = cartInfo.find(
      restaurant => restaurant.meals.find(meal => meal.mealId === mealId)
    )

    if (restaurantThatHasMeal === undefined) {
      throw new Error("setMealCount() is called with invalid mealId.")
    }

    const meal = restaurantThatHasMeal.meals.find(meal => meal.mealId === mealId)

    if (meal === undefined) {
      throw new Error("setMealCount() is called with invalid mealId.")
    }

    const newCount = meal.count + offset

    if (newCount < 1) {
      // remove meal from cart
      restaurantThatHasMeal.meals = restaurantThatHasMeal.meals.filter(meal => meal.mealId !== mealId)
      return
    }

    meal.count = newCount
  }

  const getTotalPrice = () => {
    return cartInfo.reduce((sum, restaurant) => {
      return sum + restaurant.meals.reduce((sum, meal) => {
        return sum + meal.mealPrice * meal.count
      }, 0)
    }, 0)
  }

  const getTotalMealTypeCount = () => {
    return cartInfo.reduce((sum, restaurant) => {
      return sum + restaurant.meals.length
    }, 0)
  }

  const provider: CartProvider = {
    data: cartInfo,
    methods: {
      setMealCount,
      getTotalPrice,
      addMeal,
      getTotalMealTypeCount
    }
  }

  provide(key, provider);
}

type CartProvider = {
  data: ResaurantMeals[],
  methods: {
    setMealCount: (mealId: number, newCount: number) => void
    getTotalPrice: () => number
    addMeal: (restaurantId: number, meal: Meal) => void,
    getTotalMealTypeCount: () => number
  }
}

export default function useGetCartProvider() {

  const data = inject<CartProvider>(key);

  if (data === undefined) {
    throw new Error("useGetCartProvider() is called without provider.");
    
  }

  return data
}