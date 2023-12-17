<template>
  <div>
    <div class="flex justify-center">
      <router-link to="/restaurants" class="btn btn-primary">
        返回
      </router-link>
    </div>
    <div class="flex flex-col w-full h-full gap-10 p-16 bg-orange-200">

      <RecommandCard title="食材種類偏好" describe="您通常喜歡吃哪些類型的食材">
        <a-checkbox-group v-model:value="foodType">
          <a-checkbox value="麵類">麵類</a-checkbox>
          <a-checkbox value="飯類">飯類</a-checkbox>
          <a-checkbox value="肉類">肉類</a-checkbox>
          <a-checkbox value="海鮮">海鮮</a-checkbox>
          <a-checkbox value="蔬菜">蔬菜</a-checkbox>
          <a-checkbox value="水果">水果</a-checkbox>
          <a-checkbox value="奶製品">奶製品</a-checkbox>
          <a-checkbox value="素食">素食</a-checkbox>
          <a-checkbox value="飲品">飲品</a-checkbox>
          <a-checkbox value="湯品">湯品</a-checkbox>
          <a-checkbox value="甜點">甜點</a-checkbox>
        </a-checkbox-group>
      </RecommandCard>
      
      <RecommandCard title="辣度偏好" describe="您更偏好哪種辣度的食物?">
        <a-radio-group v-model:value="spicyLevel">
          <a-radio value="非常辣">非常辣</a-radio>
          <a-radio value="中等辣">中等辣</a-radio>
          <a-radio value="少許辣">少許辣</a-radio>
          <a-radio value="不辣">不辣</a-radio>
        </a-radio-group>
      </RecommandCard>
      
      <RecommandCard title="營養價值偏好" describe="您最看重食物的哪些營養成分?(可多選)?">
          <a-checkbox-group v-model:value="nutritions">
            <a-checkbox value="高蛋白">高蛋白</a-checkbox>
            <a-checkbox value="低碳水化合物">低碳水化合物</a-checkbox>
            <a-checkbox value="維生素豐富">維生素豐富</a-checkbox>
            <a-checkbox value="低鈉或無鈉">低鈉或無鈉</a-checkbox>
            <a-checkbox value="低卡路里">低卡路里</a-checkbox>
          <a-checkbox value="有機食材使用">有機食材使用</a-checkbox>
        </a-checkbox-group>
      </RecommandCard>
      
      <RecommandCard title="烹飪風格偏好" describe="您偏好哪些烹飪風格的餐點?(可多選)">
        <a-checkbox-group v-model:value="cookingStyle">
          <a-checkbox value="家常菜">家常菜</a-checkbox>
          <a-checkbox value="創意料理">創意料理</a-checkbox>
          <a-checkbox value="精緻料理">精緻料理</a-checkbox>
          <a-checkbox value="慢燉料理">慢燉料理</a-checkbox>
          <a-checkbox value="無油料理">無油料理</a-checkbox>
          <a-checkbox value="即時現做">即時現做</a-checkbox>
          <a-checkbox value="季節限定">季節限定</a-checkbox>
        </a-checkbox-group>
      </RecommandCard>
      
      <RecommandCard title="餐點氛圍偏好" describe="您最喜歡哪種氛圍的就餐體驗?(可多選)">
        <a-checkbox-group v-model:value="atmosphere">
          <a-checkbox value="浪漫暢快">浪漫暢快</a-checkbox>
          <a-checkbox value="朋友聚會">朋友聚會</a-checkbox>
          <a-checkbox value="家庭聚會">家庭聚會</a-checkbox>
          <a-checkbox value="工作午餐">工作午餐</a-checkbox>
          <a-checkbox value="快速外賣">快速外賣</a-checkbox>
        </a-checkbox-group>
      </RecommandCard>
      
      <RecommandCard title="國際料理偏好" describe="您偏愛哪些國家的料理風味?(可多選)">
        <a-checkbox-group v-model:value="internationalCookingStyle">
          <a-checkbox value="中式料理">中式料理</a-checkbox>
          <a-checkbox value="西式料理">西式料理</a-checkbox>
          <a-checkbox value="日式料理">日式料理</a-checkbox>
          <a-checkbox value="印度料理">印度料理</a-checkbox>
          <a-checkbox value="韓式料理">韓式料理</a-checkbox>
          <a-checkbox value="法式料理">法式料理</a-checkbox>
        </a-checkbox-group>
      </RecommandCard>

      <div class="flex justify-center">
        <button
          class="p-6 py-2 text-white bg-orange-600 rounded"
          @click="handleStartRecommand"
         >
          開始推薦
        </button>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import RecommandCard from "../components/card/RecommandCard.vue";
import { setRecommandation } from "../hooks/useRecommandation";
import { useRouter } from "vue-router";

  const router = useRouter();

  const foodType = ref<string[]>([]);
  const spicyLevel = ref<string>("1");
  const nutritions = ref<string[]>([]);
  const cookingStyle = ref<string[]>([]);
  const atmosphere = ref<string[]>([]);
  const internationalCookingStyle = ref<string[]>([]);

  const handleStartRecommand = () => {
    const tags = [
      ...foodType.value,
      ...nutritions.value,
      ...cookingStyle.value,
      ...atmosphere.value,
      ...internationalCookingStyle.value,
      spicyLevel.value
    ];

    setRecommandation(tags);

    router.push("/restaurants");
  };
  
</script>