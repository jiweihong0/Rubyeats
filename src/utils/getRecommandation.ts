interface Location {
  latitude: number;
  longitude: number;
}

interface Dish {
  dish_name: string;
  tags: string[];
}

interface Restaurant {
  name: string;
  location: Location;
  menu: Dish[];
}

const restaurants: Restaurant[] = [
  {
    name: "香蕉葉素食屋",
    location: { latitude: 22.724503, longitude: 120.350234 },
    menu: [
      { dish_name: "素食拉麵", tags: ["麵類", "素食", "蔬菜","維生素豐富","低鈉或無納","低卡路里量","有機食材使用"] },
      { dish_name: "蔬菜炸醬麵", tags: ["麵類", "蔬菜","低卡路里量"] },
      { dish_name: "草莓拿鐵", tags: ["飲品", "水果","創意料理"] },
      { dish_name: "素食甜點拼盤", tags: ["甜點", "素食","維生素豐富","低鈉或無納","低卡路里量","有機食材使用"] }
    ],
  },

  // 第一家餐廳
{
  name: "蔬食樂園",
  location: { latitude: 25.042132, longitude: 121.564958 },
  menu: [
    { dish_name: "素食炸彈三明治", tags: ["麵類", "素食", "快速外賣","創意料理"] },
    { dish_name: "椒麻雞飯", tags: ["飯類", "肉類", "中式料理","少許辣"] },
    { dish_name: "涼拌海帶芽", tags: ["維生素豐富", "蔬菜"] },
    { dish_name: "芒果冰沙", tags: ["飲品", "水果"] },
    { dish_name: "素食奶酪蛋糕", tags: ["甜點", "素食", "精緻料理"] }
  ]
},

// 第二家餐廳
{
  name: "辣翻天川菜館",
  location: { latitude: 30.661188, longitude: 104.041497 },
  menu: [
    { dish_name: "川味水煮牛肉麵", tags: ["麵類", "肉類", "非常辣", "中式料理"] },
    { dish_name: "香辣脆皮雞", tags: ["肉類", "少許辣", "中式料理","朋友聚會", "即時現做"] },
    { dish_name: "麻辣素炸醬麵", tags: ["麵類", "素食", "少許辣", "中式料理"] },
    { dish_name: "酸辣湯", tags: ["湯品", "少許辣", "中式料理"] },
    { dish_name: "冰粉", tags: ["甜點", "中式料理"] }
  ]
},

// 第三家餐廳
{
  name: "地中海風情屋",
  location: { latitude: 41.902782, longitude: 12.496365 },
  menu: [
    { dish_name: "希臘風羊肉沙拉", tags: ["蔬菜", "肉類", "地中海料理","不辣"] },
    { dish_name: "西班牙海鮮鍋", tags: ["海鮮", "肉類", "少許辣"] },
    { dish_name: "義大利風味牛肉千層麵", tags: ["麵類", "肉類", "西式料理","不辣"] },
    { dish_name: "柚子薄荷冰茶", tags: ["飲品", "水果", "西式料理"] },
    { dish_name: "提拉米蘇", tags: ["甜點", "西式料理","浪漫暢快"] }
  ]
},

// 第四家餐廳
{
  name: "日式和食樂",
  location: { latitude: 35.689487, longitude: 139.691711 },
  menu: [
    { dish_name: "拉麵二郎風", tags: ["麵類", "日式料理","不辣"] },
    { dish_name: "照燒雞肉飯糰", tags: ["飯類", "肉類", "日式料理","不辣"] },
    { dish_name: "鰻魚壽司", tags: ["海鮮", "日式料理"] },
    { dish_name: "抹茶拿鐵", tags: ["飲品", "日式料理"] },
    { dish_name: "和風草莓大福", tags: ["甜點", "日式料理"] }
  ]
},

// 第五家餐廳
{
  name: "法式浪漫美食屋",
  location: { latitude: 48.856613, longitude: 2.352222 },
  menu: [
    { dish_name: "法式羊排", tags: ["肉類", "法式料理", "精緻料理","不辣","浪漫暢快"] },
    { dish_name: "法式洋蔥湯", tags: ["湯品", "法式料理","少許辣"] },
    { dish_name: "焦糖布丁", tags: ["甜點", "法式料理","浪漫暢快"] },
    { dish_name: "香檳水果沙拉", tags: ["蔬菜", "水果", "法式料理"] },
    { dish_name: "法式咖啡", tags: ["飲品", "法式料理"] }
  ]
},

// 第六家餐廳
{
  name: "韓辛拉麵",
  location: { latitude: 35.689487, longitude: 139.691711 },
  menu: [
    { dish_name: "起司辛拉麵", tags: ["麵類", "韓式料理", "奶製品", "非常辣"] },
    { dish_name: "韓式燒肉石鍋拌飯", tags: ["飯類", "肉類", "韓式料理", "少許辣"] },
    { dish_name: "辣炒年糕", tags: ["中等辣", "韓式料理"] },

  ]
},
// 第七家餐廳
{
  name: "意式小鎮館",
  location: { "latitude": 41.8719, "longitude": 12.5674 },
  menu: [
    { dish_name: "義大利經典披薩", tags: ["麵類", "蔬菜", "西式料理","不辣","朋友聚會"] },
    { dish_name: "牛肉紅酒燉飯", tags: ["飯類", "肉類", "西式料理", "慢燉料理","不辣","浪漫暢快"] },
    { dish_name: "橙香提拉米蘇", tags: ["甜點", "西式料理","浪漫暢快"] },
    { dish_name: "橙香氣泡水", tags: ["飲品", "水果", "西式料理"] }
  ]
},
// 第八家餐廳
{
  name: "越南風味街",
  location: { "latitude": 14.0583, "longitude": 108.2772 },
  menu: [
    { dish_name: "越南牛肉河粉", tags: ["麵類", "肉類", "中式料理","不辣"] },
    { dish_name: "檸檬草雞飯", tags: ["飯類", "肉類", "中式料理","不辣"] },
    { dish_name: "海鮮春卷", tags: ["海鮮", "中式料理","不辣"] },
    { dish_name: "椰奶糯米糕", tags: ["甜點", "中式料理"] },
    { dish_name: "越南咖啡", tags: ["飲品", "中式料理"] }
  ]
},
// 第九家餐廳
{
  name: "西班牙風味廚房",
  location: { "latitude": 40.4168, "longitude": -3.7038 },
  menu: [
    { dish_name: "西班牙番茄魚湯", tags: ["湯品", "海鮮", "西式料理","不辣","家庭聚會"] },
    { dish_name: "海鮮龍蝦飯", tags: ["飯類", "海鮮", "西式料理","不辣"] },
    { dish_name: "西班牙風味牛排", tags: ["肉類", "西式料理","不辣"] },
    { dish_name: "香橙布丁", tags: ["甜點", "西式料理"] },
    { dish_name: "西班牙桃子沙士", tags: ["飲品", "水果", "西式料理"] }
  ]
},
// 第十家餐廳
{
  name: "泰式風味亭",
  location: { "latitude": 13.7563, "longitude": 100.5018 },
  menu: [
    { dish_name: "泰式椰奶咖哩雞", tags: ["肉類", "中等辣", "泰式料理"] },
    { dish_name: "青咖哩蝦麵", tags: ["麵類", "海鮮", "中等辣", "泰式料理"] },
    { dish_name: "芒果糯米飯", tags: ["飯類", "甜點", "泰式料理"] },
    { dish_name: "香茅檸檬草茶", tags: ["飲品", "泰式料理"] }
  ]
},
// 第十一家餐廳
{
  name : "美國風味堡",
  location: { "latitude": 37.7749, "longitude": -122.4194 },
  menu : [
    { dish_name: "經典芝加哥風格披薩", tags: ["麵類", "肉類", "快速外賣","不辣","朋友聚會","家庭聚會"] },
    { dish_name: "BBQ烤肋排", tags: ["肉類", "不辣","朋友聚會", "即時現做","家庭聚會"] },
    { dish_name: "紐約風格芝士蛋糕", tags: ["甜點", "精緻料理"] },
    { dish_name: "櫻桃可樂", tags: ["飲品", "快速外賣"] }
  ]
},
// 第十二家餐廳
{
  name: "巴西烤肉天堂",
  location: { "latitude": -23.5505, "longitude": -46.6333 },
  menu: [
    { dish_name: "烤牛肉肋眼", tags: ["肉類", "家庭聚會","不辣","朋友聚會"] },
    { dish_name: "香辣烤雞翅", tags: ["肉類", "中等辣", "朋友聚會","不辣","朋友聚會", "即時現做","家庭聚會"] },
    { dish_name: "巴西傳統黑豆燉飯", tags: ["飯類", "維生素豐富","不辣"] },

  ]
},
// 第十三家餐廳
{
  name: "土耳其風情屋",
  location: { "latitude": 41.0082, "longitude": 28.9784 },
  menu: [
    { dish_name: "土耳其烤肉串", tags: ["肉類", "西式料理","不辣","朋友聚會","家庭聚會"] },
    { dish_name: "中東風味橄欖沙拉", tags: ["蔬菜", "西式料理"] },
    { dish_name: "玫瑰水布丁", tags: ["甜點", "西式料理","創意料理"] },
    { dish_name: "紅茶", tags: ["飲品", "西式料理"] }
  ]
},
// 第十四家餐廳
{
  name: "墨西哥風味廚房",
  location: { "latitude": 23.6345, "longitude": -102.5528 },
  menu: [
    { dish_name: "墨西哥玉米餅塔可", tags: ["維生素豐富", "蔬菜", "少許辣","家庭聚會"] },
    { dish_name: "辣椒醬烤牛肉卷", tags: ["肉類", "中等辣", "快速外賣"] },
    { dish_name: "墨西哥風味煎餃", tags: ["肉類", "快速外賣","不辣"] },
    { dish_name: "香蕉玉米布丁", tags: ["甜點", "水果","創意料理"] },
    { dish_name: "墨西哥草莓冰沙", tags: ["飲品", "水果"] }
  ]
},
// 第十五家餐廳
{
  name: "荷蘭風味坊",
  location: { "latitude": 52.3676, "longitude": 4.9041 },
  menu: [
    { dish_name: "荷蘭咖哩肉餅", tags: ["肉類", "少許辣"] },
    { dish_name: "炸魚條配薯條", tags: ["海鮮", "快速外賣","朋友聚會"] },
    { dish_name: "荷蘭起司餅", tags: ["不辣", "即時現做"] },
    { dish_name: "荷蘭風味煎餅", tags: ["甜點", "低卡路里量"] },
    { dish_name: "荷蘭風格冰咖啡", tags: ["飲品"] }
  ]
},
// 第十六家餐廳
{
  name: "希臘風味角",
  location: { "latitude": 37.9838, "longitude": 23.7275 },
  menu: [
    { dish_name: "希臘烤羊肉", tags: ["肉類","不辣","朋友聚會"] },
    { dish_name: "橄欖沙拉", tags: ["蔬菜"] },
    { dish_name: "烤紅酒葡萄", tags: ["水果","甜點"] },
    { dish_name: "希臘風味布丁", tags: ["甜點"] },
    { dish_name: "希臘風味伯爵茶", tags: ["飲品"] }
  ]
},
// 第十七家餐廳
{
  name: "越式鮮果屋",
  location: { "latitude": 10.7769, "longitude": 106.7009 },
  menu: [
    { dish_name: "生春卷", tags: ["蔬菜","不辣","維生素豐富","低鈉或無納"] },
    { dish_name: "芒果生菜雞肉卷", tags: ["肉類", "水果","不辣", "即時現做"] },
    { dish_name: "檸檬草牛肉河粉", tags: ["麵類", "肉類", "中等辣", "即時現做"] },
    { dish_name: "越南椰香糯米糕", tags: ["甜點"] },
    { dish_name: "越南冰奶茶", tags: ["飲品"] }
  ]
},
// 第十八家餐廳
{
  name: "瑞士風味小鎮",
  location: { "latitude": 46.8182, "longitude": 8.2275 },
  menu: [
    { dish_name: "瑞士芝士火鍋", tags: ["高蛋白","不辣","肉類"] },
    { dish_name: "瑞士香腸拼盤", tags: ["肉類","不辣"] },
    { dish_name: "瑞士巧克力瑪芬", tags: ["甜點"] },
    { dish_name: "阿爾卑斯奶茶", tags: ["飲品"] }
  ]
},
// 第十九家餐廳
{
  name: "超級健康素食屋",
  location: { "latitude": -37.8136, "longitude": 144.9631 },
  menu: [
    { dish_name: "藜麥蔬菜沙拉", tags: ["蔬菜", "素食", "高蛋白"] },
    { dish_name: "蔬菜彩虹卷", tags: ["蔬菜", "素食"] },
    { dish_name: "紅藜松露意大利麵", tags: ["麵類", "素食","不辣"] },
    { dish_name: "巧克力慕斯", tags: ["甜點", "素食"] },
    { dish_name: "草莓蘋果健康果汁", tags: ["飲品", "水果", "素食"] }
  ]
},
// 第二十家餐廳
{
  name: "澳洲牛排屋",
  location: { "latitude": -33.8688, "longitude": 151.2093 },
  menu: [
    { dish_name: "澳洲特級眼肉牛排", tags: ["肉類","不辣", "即時現做","浪漫暢快"] },
    { dish_name: "澳洲海鮮拼盤", tags: ["海鮮","不辣","家庭聚會"] },
    { dish_name: "澳式薯條", tags: ["蔬菜","不辣","朋友聚會"] },
    { dish_name: "澳式藍莓芝士蛋糕", tags: ["甜點"] },
    { dish_name: "澳洲經典啤酒", tags: ["飲品","朋友聚會"] }
  ]
}
];

const user_1_location: Location = { latitude: 25.033, longitude: 121.565 };
const user_1_tags: string[] = ["飯類", "牛肉", "甜品", "海鮮", "地方特色風味", "印度式"];

// Weight variables
const WEIGHT_DISH: number = 0.9;
const WEIGHT_DISTANCE: number = 0.1;

function calculateDishSimilarity(userTags: string[], dishTags: string[]): number {
  const intersectionLen = new Set(userTags).size + new Set(dishTags).size - new Set([...userTags, ...dishTags]).size;
  const unionLen = new Set([...userTags, ...dishTags]).size;
  const similarity = unionLen !== 0 ? intersectionLen / unionLen : 0;
  return similarity;
}

function calculateDistanceScore(userLocation: Location, restaurantLocation: Location): number {
  const { latitude: userLat, longitude: userLon } = userLocation;
  const { latitude: restaurantLat, longitude: restaurantLon } = restaurantLocation;
  const distance = Math.sqrt(Math.pow(userLat - restaurantLat, 2) + Math.pow(userLon - restaurantLon, 2));
  const distanceScore = 1 / (1 + distance);
  return distanceScore;
}

//export default function recommendRestaurants(userLocation: Location, userTags: string[], restaurants: Restaurant[]): [string, number][] {
export default function recommendRestaurants(userLocation: Location, userTags: string[]): [string, number][] {
  const scores: [string, number][] = [];

  for (const restaurant of restaurants) {
    // Calculate dish similarity scores
    const dishSimilarityScores = restaurant.menu.map((dish) => calculateDishSimilarity(userTags, dish.tags));
    const avgDishSimilarityScore = dishSimilarityScores.length > 0 ? dishSimilarityScores.reduce((a, b) => a + b) / dishSimilarityScores.length : 0;

    // Calculate distance score
    const distanceScore = calculateDistanceScore(userLocation, restaurant.location);

    const totalScore = WEIGHT_DISH * avgDishSimilarityScore + WEIGHT_DISTANCE * distanceScore;

    scores.push([restaurant.name, totalScore]);
  }

  const recommendedRestaurants = scores.sort((a, b) => b[1] - a[1]);

  return recommendedRestaurants;
}