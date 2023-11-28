import { inject, provide, reactive } from "vue";
import { IRestaurant } from "../types/restaurant";

const key = 'restaurant_edit_info'

export function useRestaurantEditProvider() {
  const defaultRestaurantInfo = reactive<IRestaurant>({
  restaurant_image: '',
  restaurant_name: '',
  restaurant_description: '',
  restaurant_address: '',
  restaurant_business_hours: [
    {
      weekday: 0, // Sunday
      bussinessStartTime: '09:00',
      bussinessEndTime: '17:00',
      isOnBussiness: true,
    },
    {
      weekday: 1, // Monday
      bussinessStartTime: '09:00',
      bussinessEndTime: '17:00',
      isOnBussiness: true,
    },
    {
      weekday: 2, // Tuesday
      bussinessStartTime: '09:00',
      bussinessEndTime: '17:00',
      isOnBussiness: true,
    },
    {
      weekday: 3, // Wednesday
      bussinessStartTime: '09:00',
      bussinessEndTime: '17:00',
      isOnBussiness: true,
    },
    {
      weekday: 4, // Thursday
      bussinessStartTime: '09:00',
      bussinessEndTime: '17:00',
      isOnBussiness: true,
    },
    {
      weekday: 5, // Friday
      bussinessStartTime: '09:00',
      bussinessEndTime: '17:00',
      isOnBussiness: true,
    },
    {
      weekday: 6, // Saturday
      bussinessStartTime: '09:00',
      bussinessEndTime: '17:00',
      isOnBussiness: true,
    },
  ],
  })

  provide(key, defaultRestaurantInfo);
}

export default function useGetEditRestaurantInfo() {

  const data = inject<IRestaurant>(key);

  if (data === undefined) {
    throw new Error("useGetEditRestaurantInfo() is called without provider.");
    
  }

  return data
}