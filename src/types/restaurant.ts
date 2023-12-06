export type IBussinessHour = {
  weekday: number;
  bussinessStartTime: string;
  bussinessEndTime: string;
  isOnBussiness: boolean;
}

export type IRestaurant = {
  restaurant_image: string;
  restaurant_name: string;
  restaurant_description: string;
  restaurant_address: string;
  restaurant_business_hours: IBussinessHour[];
}