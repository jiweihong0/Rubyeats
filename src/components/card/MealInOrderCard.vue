<script lang="ts" setup>
import { defineProps } from "vue";
import useGetCartProvider from "../../provider/useCartProvider";
type Meal = ReturnType<typeof useGetCartProvider>['data'][0]['meals'][0];

type Props = {
  meal: Meal;
}

type Selection = Meal['selections'][0];

const props = defineProps<Props>()

const hasSelectionError = props.meal.selections.reduce((acc, selection) => {
  return acc || selection.options.every(option => !option.isSelected);
}, false);

const getSelectedOption = (selection: Selection) => {
  const selectedOption = selection.options.find(option => option.isSelected);

  return selectedOption
};

const getTotalPrice = () => {
  return props.meal.mealPrice + props.meal.selections.reduce((acc, selection) => {
    const selectedOption = getSelectedOption(selection);

    return acc + (selectedOption ? selectedOption.price : 0);
  }, 0);
};

</script>

<template>
  <li class="w-full" v-if="!hasSelectionError">
    <div class="flex w-full py-2">
      <div class="w-1/4">
        <img class="aspect-[4/3] w-full" src="https://picsum.photos/200/300" alt="meal" />
      </div>
      <div class="w-3/4 py-1 pl-2">
        <div class="flex justify-between w-full">
          <span class="text-lg font-bold">{{ props.meal.mealName }}</span>
          <span>NT$ {{ props.meal.mealPrice }}</span>
        </div>

        <div v-for="(selection) in meal.selections" class="flex justify-between w-full">
          <span>{{ selection.name }}: {{ getSelectedOption(selection)?.name }}</span>
          <span>NT$ {{ getSelectedOption(selection)?.price }}</span>
        </div>

      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <button class="px-4 bg-gray-400">
          <span class="m-auto text-lg">-</span>
        </button>
        <span class="px-4 text-lg bg-gray-400">
          {{ props.meal.count }}
        </span>
        <button class="px-4 bg-gray-400">
          <span class="m-auto text-lg">+</span>
        </button>
      </div>
      <div>
        <span class="text-lg font-bold">NT$ {{ getTotalPrice() }}</span>
      </div>
    </div>
  </li>
</template>