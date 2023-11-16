
<template>
  <div class="Box">
    <div class="box1">
      <Category v-for="category in store.categories" :id="category.id" :image="category.image" :bgColor="category.color"
        :name="category.name" :group="category.group" :item="category.item" />
    </div>
    <div class="box2">
      <Promotion v-for="promotion in store.promotions" :id="promotion.id" :image="promotion.image"
        :bgColor="promotion.color" :title="promotion.title" :bgB="promotion.bg"/>
    </div>

  </div>
</template>
<script>
import Button from './components/Button.vue';
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';

import { useStore } from "./stores/store";
export default {
  name: "App",
  components: {
    Category,
    Promotion,
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
<style>
.Box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

}

.box1 {
  display: flex;
  gap: 25px;
  margin-top: -116px;
  margin-left: 33px;
  border: 1px;


}

.box2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-left: 33px;
  border: 1px;
  margin-top: 20px;

}
</style>